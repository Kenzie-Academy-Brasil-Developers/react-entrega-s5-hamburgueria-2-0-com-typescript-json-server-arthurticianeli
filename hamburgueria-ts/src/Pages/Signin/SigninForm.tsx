import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import InputField from "../../components/Inputs/InputField";

function SigninForm() {
  return (
    <Box
      maxW={"500px"}
      w={"full"}
      border={"#F5F5F5 solid 2px"}
      padding={"20px"}
      boxShadow={"0px 0px 30px -20px rgba(0, 0, 0, 0.25)"}
      ml={"150px"}
    >
      <Flex justifyContent={"space-between"}>
        <Text textStyle={"heading3"} mb={"20px"}>
          Cadastro
        </Text>
        <Link>
          <Text
            textStyle={"body"}
            color={"gray.300"}
            _hover={{ color: "gray.600" }}
          >
            <u>Retornar para o login</u>
          </Text>
        </Link>
      </Flex>
      <Stack spacing={"20px"} align={"center"}>
        <InputField label="Nome" placeholder="Digite seu nome" />

        <InputField
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
        />

        <InputField
          label="Senha"
          type={"password"}
          placeholder="Digite sua senha"
        />
        <InputField
          label="Confirme sua senha"
          type={"password"}
          placeholder="Digite sua senha novamente"
        />

        <Button variant={"green"} w={"full"}>
          Cadastrar
        </Button>
      </Stack>
    </Box>
  );
}

export default SigninForm;
