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
  Divider,
  Text,
  Flex,
  IconButton,
  Box,
  Stack,
  Badge,
} from "@chakra-ui/react";

import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        onClick={onOpen}
        position={"relative"}
        mx={"10px"}
        _hover={{ bg: "gray.200" }}
        rounded={"8px"}
      >
        <IconButton
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          color={"#BDBDBD"}
          _focus={{ boxShadow: "none" }}
          height={"60px"}
          width={"60px"}
          icon={<FaShoppingCart size={"25px"} />}
          aria-label="Search Products"
          pt={"10px"}
        />
        <Badge
          position={"absolute"}
          top={"5px"}
          left={"30px"}
          bg={"primary"}
          rounded={"8px"}
          boxSize={"7"}
          cursor={"pointer"}
        >
          <Text
            lineHeight={"30px"}
            textStyle={"heading3"}
            color={"white"}
            textAlign={"center"}
            s
          >
            0
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
            <CartItem title={"Produto1"} image={"img"} />
            <Divider my={"20px"} />
            <Flex>
              <Text textStyle={"heading3"}>Total</Text>
              <Text textStyle={"heading3"} color={"gray.500"} ml={"auto"}>
                R$14,00
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Stack w="full" spacing={4}>
              <Button variant={"gray"} w="full">
                Remover todos
              </Button>
              <Button variant={"green"} w={"full"}>
                Finalizar compra
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;
