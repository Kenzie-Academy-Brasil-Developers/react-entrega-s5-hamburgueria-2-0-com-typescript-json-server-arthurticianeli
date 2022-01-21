import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";

interface CardProps {
  image: string;
}

const Card = ({ image }: CardProps) => {
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
      <Image h={"150px"} w={"full"} src={image} objectFit={"cover"} />

      <Box p={6}>
        <Stack spacing={3} mb={3}>
          <Text textStyle={"heading3"}>Heading3</Text>
          <Text textStyle={"caption"} color="gray.300">
            Caption
          </Text>
          <Text textStyle={"body"} color="primary">
            Body
          </Text>
        </Stack>

        <Button variant={"greenMd"}>Adicionar</Button>
      </Box>
    </Box>
  );
};

export default Card;
