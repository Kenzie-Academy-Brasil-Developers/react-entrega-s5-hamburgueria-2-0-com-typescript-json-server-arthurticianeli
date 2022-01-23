import { ReactNode, useCallback, useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";

interface ProductProviderProps {
  children: ReactNode;
}

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
}

interface ProductListContextData {
  productList: Product[];
  loadProductList: () => void;
}

const ProductContext = createContext<ProductListContextData>(
  {} as ProductListContextData
);

const useProductList = () => {
  const context = useContext(ProductContext);
  return context;
};

const ProductListProvider = ({ children }: ProductProviderProps) => {
  const [productList, setProductList] = useState<Product[]>([]);

  const loadProductList = useCallback(async () => {
    try {
      const response = await api.get(`/productList`);

      setProductList(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <ProductContext.Provider
      value={{
        productList,
        loadProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProductList, ProductListProvider };
