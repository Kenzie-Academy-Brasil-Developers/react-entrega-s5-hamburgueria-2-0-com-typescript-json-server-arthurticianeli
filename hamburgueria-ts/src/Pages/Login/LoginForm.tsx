import { Box, Button, Stack, Text } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useHistory } from "react-router-dom";

import { InputField } from "../../components/Inputs/InputField";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<SignInData>;
  loading: boolean;
}
interface SignInData {
  email: string;
  password: string;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();

  return (
    <Box
      maxW={"500px"}
      w={"full"}
      border={"#F5F5F5 solid 2px"}
      padding={"20px"}
      boxShadow={"0px 0px 30px -20px rgba(0, 0, 0, 0.25)"}
      mr={{ base: "0px", lg: "60px" }}
    >
      <Text textStyle={"heading3"} mb={"20px"}>
        Login
      </Text>

      <Stack spacing={"20px"} align={"center"}>
        <InputField
          placeholder="Digite seu nome"
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

        <Button
          isLoading={loading}
          variant={"green"}
          w={"full"}
          onClick={handleSignIn}
        >
          Entrar
        </Button>

        <Text
          textStyle={"body"}
          px={{ base: "5px", lg: "20" }}
          textAlign={"center"}
          color={"gray.50"}
        >
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>
        <Button
          variant={"gray"}
          w={"full"}
          onClick={() => history.push("/signup")}
        >
          Cadastrar
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
