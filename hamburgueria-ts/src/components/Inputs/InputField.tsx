import {
  FormControl,
  FormLabel,
  Input,
  InputProps as ChakraInputProps,
  Text,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  placeholder: string;
  label: string;
  type?: string;
}

const InputField = ({ placeholder, label, type }: InputProps) => {
  return (
    <FormControl>
      <FormLabel>
        <Text textStyle={"body"} color={"gray.500"}>
          {label}
        </Text>
      </FormLabel>
      <Input
        type={type}
        maxW={"450px"}
        w={"full"}
        h="60px"
        borderRadius="8px"
        bg="gray.0"
        border="transparent 2px solid"
        borderColor="transparent"
        placeholder={placeholder}
        _placeholder={{ color: "gray.50" }}
        _hover={{
          _placeholder: { color: "gray.300" },
          border: "#333 2px solid",
        }}
        _focus={{
          _placeholder: { color: "gray.300" },
          border: "#333 2px solid",
        }}
      />
    </FormControl>
  );
};

export default InputField;
