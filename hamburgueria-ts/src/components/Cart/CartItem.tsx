import {
  Button,
  Divider,
  Flex,
  Image,
  InputProps as ChakraInputProps,
  Text,
} from "@chakra-ui/react";
import CartCounter from "./CartCounter";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

interface InputProps extends ChakraInputProps {
  title: string;
  category: string;
  price: string;
  image: string;
  id: string;
  amount: number;
}

const CartItem = ({
  title,
  category,
  price,
  image,
  id,
  amount,
}: InputProps) => {
  const { deleteCart, loadCart } = useCart();
  const { user, accessToken } = useAuth();

  const data = {
    userId: user.id,
    id,
    title,
    category,
    price,
    image,
    amount,
  };

  const handleDelete = () => {
    deleteCart(data, accessToken);
    loadCart(data.userId, accessToken);
  };

  return (
    <>
      <Flex maxW={"450px"} w={"full"} h={"80px"} borderRadius={"5px"}>
        <Image w={"80px"} h={"80px"} src={image} mr={"10px"}></Image>
        <Flex flexDir={"column"} justifyContent={"space-between"}>
          <Text textStyle={"heading3"}>{title}</Text>
          <CartCounter
            title={title}
            category={category}
            price={price}
            image={image}
            id={id}
            amount={amount}
          />
        </Flex>
        <Button
          bg={"transparent"}
          mt={"10px"}
          ml={"auto"}
          color={"#BDBDBD"}
          onClick={handleDelete}
        >
          <FaTrash />
        </Button>
      </Flex>
      <Divider />
    </>
  );
};

export default CartItem;
