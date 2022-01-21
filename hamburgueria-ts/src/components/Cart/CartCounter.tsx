import { Button, Center, Flex } from "@chakra-ui/react";

const CartCounter = () => {
  return (
    <Flex w={"100px"} h={"30px"}>
      <Button
        minW={0}
        borderRadius={"0px"}
        w={"30px"}
        h={"30px"}
        color="#EB5757"
      >
        -
      </Button>
      <Center fontSize={"12px"} w={"45px"} h={"30px"} marginX={"15px"}>
        1
      </Center>
      <Button
        minW={0}
        borderRadius={"0px"}
        w={"30px"}
        h={"30px"}
        color="#EB5757"
      >
        +
      </Button>
    </Flex>
  );
};

export default CartCounter;
