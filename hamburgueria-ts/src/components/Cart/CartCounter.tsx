import { Button, Center, Flex } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";

interface Item {
  userid?: string;
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  amount: number;
}

const CartCounter = ({ title, category, price, image, id, amount }: Item) => {
  const { Cart, changeCart, deleteCart } = useCart();
  const { user, accessToken } = useAuth();

  const data = {
    userId: user.id,
    title,
    category,
    price,
    image,
    id,
    amount,
  };

  const handleClickAdd = () => {
    changeCart(Cart, data, accessToken, 1);
  };
  const handleClickRemove = () => {
    data.amount === 1
      ? deleteCart(data, accessToken)
      : changeCart(Cart, data, accessToken, -1);
  };

  return (
    <Flex w={"100px"} h={"30px"}>
      <Button
        minW={0}
        borderRadius={"0px"}
        w={"30px"}
        h={"30px"}
        color="#EB5757"
        onClick={handleClickRemove}
      >
        -
      </Button>
      <Center fontSize={"12px"} w={"45px"} h={"30px"} marginX={"15px"}>
        {amount}
      </Center>
      <Button
        minW={0}
        borderRadius={"0px"}
        w={"30px"}
        h={"30px"}
        color="#EB5757"
        onClick={handleClickAdd}
      >
        +
      </Button>
    </Flex>
  );
};

export default CartCounter;
