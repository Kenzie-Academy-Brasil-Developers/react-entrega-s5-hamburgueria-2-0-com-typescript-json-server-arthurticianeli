import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import {
  useState,
  useCallback,
  useEffect,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="gray.400">{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        onChangeCapture={(e) => setValue(e.currentTarget.value)}
        onBlurCapture={handleInputBlur}
        onFocus={handleInputFocus}
        borderColor={inputVariation[variation]}
        color={inputVariation[variation]}
        maxW={"450px"}
        w={"full"}
        h="60px"
        borderRadius="8px"
        bg="gray.0"
        // border="transparent 2px solid"
        // borderColor="transparent"
        _placeholder={{ color: "gray.50" }}
        _hover={{
          _placeholder: { color: "gray.300" },
          border: "#333 2px solid",
        }}
        _focus={{
          _placeholder: { color: "gray.300" },
          border: "#333 2px solid",
        }}
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const InputField = forwardRef(InputBase);
