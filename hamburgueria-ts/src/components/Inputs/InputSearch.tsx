import {
  Button,
  Input,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";

import { FaSearch } from "react-icons/fa";

interface InputProps extends ChakraInputProps {
  hide: boolean;
  setShowSearch: (status: boolean) => void;
}

const InputSearch = ({ hide, setShowSearch }: InputProps) => {
  return (
    <>
      {hide ? (
        <InputGroup w="300px" h="60px" display={{ base: "none", lg: "block" }}>
          <InputRightElement mt={"10px"} mr={"10px"}>
            <Button
              bg={"primary"}
              rounded={"8px"}
              _hover={{ bg: whiten("primary", 50) }}
              padding={"0"}
            >
              <FaSearch color="white" />
            </Button>
          </InputRightElement>
          <Input
            w={"full"}
            h={"full"}
            borderRadius="8px"
            border="#E0E0E0 2px solid"
            placeholder={"Digitar Pesquisa"}
            _placeholder={{ color: "gray.100" }}
            _hover={{
              _placeholder: { color: "gray.300" },
              border: "#333 2px solid",
            }}
            _focus={{
              _placeholder: { color: "gray.300" },
              border: "#333 2px solid",
            }}
          />
        </InputGroup>
      ) : (
        <InputGroup w="300px" h="60px">
          <InputRightElement mt={"10px"} mr={"10px"}>
            <Button
              bg={"primary"}
              rounded={"8px"}
              _hover={{ bg: whiten("primary", 50) }}
              padding={"0"}
              onClick={() => setShowSearch(false)}
            >
              <FaSearch color="white" />
            </Button>
          </InputRightElement>
          <Input
            w={"full"}
            h={"full"}
            borderRadius="8px"
            border="#E0E0E0 2px solid"
            placeholder={"Digitar Pesquisa"}
            _placeholder={{ color: "gray.100" }}
            _hover={{
              _placeholder: { color: "gray.300" },
              border: "#333 2px solid",
            }}
            _focus={{
              _placeholder: { color: "gray.300" },
              border: "#333 2px solid",
            }}
          />
        </InputGroup>
      )}
    </>
  );
};

export default InputSearch;
