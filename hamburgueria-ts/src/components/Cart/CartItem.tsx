import {
  Button,
  Flex,
  Image,
  InputProps as ChakraInputProps,
  Text,
} from "@chakra-ui/react";
import CartCounter from "./CartCounter";
import { FaTrash } from "react-icons/fa";

interface InputProps extends ChakraInputProps {
  title: string;
  image: string;
}

const CartItem = ({ title, image }: InputProps) => {
  return (
    <Flex maxW={"450px"} w={"full"} h={"80px"} borderRadius={"5px"}>
      <Image w={"80px"} h={"80px"} src={image} mr={"10px"}></Image>
      <Flex flexDir={"column"} justifyContent={"space-between"}>
        <Text textStyle={"heading3"}>{title}</Text>
        <CartCounter />
      </Flex>
      <Button bg={"transparent"} mt={"10px"} ml={"auto"} color={"#BDBDBD"}>
        <FaTrash />
      </Button>
    </Flex>
  );
};

export default CartItem;
