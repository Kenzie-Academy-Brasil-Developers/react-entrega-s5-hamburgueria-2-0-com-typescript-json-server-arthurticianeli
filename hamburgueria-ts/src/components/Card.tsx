import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

interface CardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  id: string;
  amount: number;
}

const Card = ({ title, category, price, image, id, amount }: CardProps) => {
  const { changeCart, Cart } = useCart();
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

  const handleClick = () => {
    changeCart(Cart, data, accessToken, 1);
  };

  return (
    <Box
      maxW={"300px"}
      w={"full"}
      m={"auto"}
      h={"350px"}
      bg={"white"}
      transition={"transform .4s"}
      borderRadius={"5px"}
      border={"#E0E0E0 2px solid"}
      _hover={{ border: "#27AE60 2px solid", transform: "scale(1.03)" }}
    >
      <Image h={"150px"} w={"full"} src={image} objectFit={"scale-down"} />

      <Box p={6}>
        <Stack spacing={3} mb={3}>
          <Text textStyle={"heading3"}>{title}</Text>
          <Text textStyle={"caption"} color="gray.300">
            {category}
          </Text>
          <Text textStyle={"body"} color="primary">
            R$ {price}
          </Text>
        </Stack>

        <Button variant={"greenMd"} onClick={handleClick}>
          Adicionar
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
