import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  IconButton,
  Box,
  Stack,
  Badge,
  Center,
} from "@chakra-ui/react";

import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function CartComponent() {
  const [loading, setLoading] = useState(true);

  const { Cart, loadCart, removeAll } = useCart();

  const { user, accessToken } = useAuth();

  useEffect(() => {
    loadCart(user.id, accessToken).then((res) => setLoading(false));
  }, []);

  const handleRemoveAll = () => {
    removeAll(Cart, user.id, accessToken);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        onClick={onOpen}
        position={"relative"}
        mr={{ base: "10px", sm: "20px" }}
        ml={{ base: "-5px", sm: "10px" }}
        _hover={{ bg: "gray.200" }}
        rounded={"8px"}
      >
        <IconButton
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          color={"#BDBDBD"}
          _focus={{ boxShadow: "none" }}
          height={{ base: "25px", sm: "30px" }}
          width={{ base: "25px", sm: "30px" }}
          icon={<FaShoppingCart size={"100%"} />}
          aria-label="Search Products"
          pt={"10px"}
        />
        <Badge
          position={"absolute"}
          top={{ base: "0px", sm: "-5px" }}
          left={{ base: "25px", sm: "25px" }}
          bg={"primary"}
          rounded={"8px"}
          boxSize={{ base: "5", sm: "6" }}
          cursor={"pointer"}
        >
          <Text
            lineHeight={{ base: "20px", sm: "25px" }}
            color={"white"}
            textAlign={"center"}
          >
            {Cart.length}
          </Text>
        </Badge>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"8px"}>
          <ModalHeader
            bg={"primary"}
            color={"white"}
            mb={"20px"}
            borderRadius={"8px 8px 0px 0px"}
          >
            Carrinho de compras
          </ModalHeader>
          <ModalCloseButton color={"gray.100"} />

          <ModalBody>
            {Cart.length === 0 ? (
              <Flex flexDir={"column"} textAlign={"center"}>
                <Text textStyle={"heading3"}>Sua sacola está vazia</Text>
                <Text color={"gray.300"} textStyle={"body600"}>
                  Adicione itens
                </Text>
              </Flex>
            ) : (
              <>
                <Stack spacing={4}>
                  {Cart.map((e) => (
                    <CartItem
                      key={e.id}
                      title={e.title}
                      category={e.category}
                      price={e.price}
                      image={e.image}
                      id={e.id}
                      amount={e.amount}
                    />
                  ))}
                </Stack>

                <Flex mt={"20px"}>
                  <Text textStyle={"heading3"}>Total</Text>
                  <Text textStyle={"heading3"} color={"gray.500"} ml={"auto"}>
                    R$
                    {Cart.reduce(
                      (a, b) => (a += Number(b.price) * b.amount),
                      0
                    )}
                    ,00
                  </Text>
                </Flex>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            {Cart.length > 0 && (
              <Stack w="full" spacing={4}>
                <Button variant={"gray"} w="full" onClick={handleRemoveAll}>
                  Remover todos
                </Button>
                <Button variant={"green"} w={"full"}>
                  Finalizar compra
                </Button>
              </Stack>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CartComponent;
