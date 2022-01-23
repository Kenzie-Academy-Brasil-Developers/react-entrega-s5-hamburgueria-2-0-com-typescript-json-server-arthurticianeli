import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { InputField } from "../../components/Inputs/InputField";

import {
  FieldValues,
  DeepMap,
  FieldError,
  UseFormRegister,
} from "react-hook-form";

interface SignupFormProps {
  handleSignup: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignUpData>;
  loading: boolean;
}

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const SignupForm = ({
  handleSignup,
  errors,
  register,
  loading,
}: SignupFormProps) => {
  const history = useHistory();

  return (
    <Box
      maxW={"500px"}
      w={"full"}
      border={"#F5F5F5 solid 2px"}
      padding={"20px"}
      boxShadow={"0px 0px 30px -20px rgba(0, 0, 0, 0.25)"}
      ml={{ base: "0px", lg: "60px" }}
    >
      <Flex justifyContent={"space-between"}>
        <Text textStyle={"heading3"} mb={"20px"}>
          Cadastro
        </Text>
        <Link onClick={() => history.push("/")}>
          <Text
            textStyle={"body"}
            color={"gray.300"}
            _hover={{ color: "gray.600" }}
            w={{ base: "100px", sm: "100%" }}
            textAlign={"center"}
          >
            <u>Retornar para o login</u>
          </Text>
        </Link>
      </Flex>
      <Stack spacing={"20px"} align={"center"}>
        <InputField
          placeholder="Digite seu nome"
          label="Nome"
          error={errors.name}
          {...register("name")}
        />

        <InputField
          type="email"
          placeholder="Digite seu e-mail"
          label="E-mail"
          error={errors.email}
          {...register("email")}
        />

        <InputField
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          error={errors.password}
          {...register("password")}
        />

        <InputField
          type="password"
          placeholder="Digite novamente sua senha"
          label="Confirme sua senha"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />

        <Button variant={"green"} w={"full"} onClick={handleSignup}>
          Cadastrar
        </Button>
      </Stack>
    </Box>
  );
};
