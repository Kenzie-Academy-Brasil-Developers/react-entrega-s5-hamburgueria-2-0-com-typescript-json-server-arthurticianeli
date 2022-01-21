import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from "@chakra-ui/react";
import InputField from "../../components/Inputs/InputField";

function LoginForm() {
  return (
    <Box
      maxW={"500px"}
      w={"full"}
      border={"#F5F5F5 solid 2px"}
      padding={"20px"}
      boxShadow={"0px 0px 30px -20px rgba(0, 0, 0, 0.25)"}
      mr={"60px"}
    >
      <Text textStyle={"heading3"} mb={"20px"}>
        Login
      </Text>
      <Stack spacing={"20px"} align={"center"}>
        <FormControl>
          <InputField placeholder="Digite seu nome" label="Nome" />
        </FormControl>
        <FormControl>
          <InputField
            label="Senha"
            type={"password"}
            placeholder="Digite sua senha"
          />
        </FormControl>
        <Button variant={"green"} w={"full"}>
          Logar
        </Button>
        <Text
          textStyle={"body"}
          px={"20"}
          textAlign={"center"}
          color={"gray.50"}
        >
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>
        <Button variant={"gray"} w={"full"}>
          Cadastrar
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
