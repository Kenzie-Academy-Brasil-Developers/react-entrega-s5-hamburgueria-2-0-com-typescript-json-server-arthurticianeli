import { useToast } from "@chakra-ui/react";
import { AxiosResponse } from "axios";
import { ReactNode, useCallback, useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { useAuth } from "./AuthContext";

interface CartProviderProps {
  children: ReactNode;
}

interface Product {
  userId: string;
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  amount: number;
}

interface CartContextData {
  Cart: Product[];
  loadCart: (userId: string, accessToken: string) => Promise<void>;
  changeCart: (
    actualCart: Product[],
    data: Product,
    accessToken: string,
    num: number
  ) => Promise<void>;
  deleteCart: (data: Product, accessToken: string) => Promise<void>;
  removeAll: (
    actualCart: Product[],
    userId: string,
    accessToken: string
  ) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [Cart, setCart] = useState<Product[]>([]);

  const toast = useToast();

  const loadCart = useCallback(async (userId: string, accessToken: string) => {
    try {
      const response = await api.get(`/cart?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setCart(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const changeCart = useCallback(
    async (
      actualCart: Product[],
      data: Product,
      accessToken: string,
      num: number
    ) => {
      const item = actualCart.find((e) => e.title === data.title);

      if (item) {
        api
          .patch(
            `/cart/${item.id}`,
            { amount: item.amount + num },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then(() => loadCart(data.userId, accessToken));
      } else {
        api
          .post("/cart", data, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((_) => {
            loadCart(data.userId, accessToken);
            toast({
              title: "Item adicionado",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          })
          .catch((err) => console.log(err));
      }
    },
    []
  );

  const deleteCart = useCallback(async (data: Product, accessToken: string) => {
    api
      .delete(`/cart/${data.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(() => loadCart(data.userId, accessToken))
      .catch((err) => console.log(err));
  }, []);

  const removeAll = useCallback(
    async (actualCart: Product[], userId: string, accessToken: string) => {
      actualCart.map((e) => {
        api
          .delete(`/cart/${e.id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then(() => loadCart(userId, accessToken))
          .catch((err) => console.log(err));
      });
    },
    []
  );

  return (
    <CartContext.Provider
      value={{
        Cart,
        loadCart,
        changeCart,
        deleteCart,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
