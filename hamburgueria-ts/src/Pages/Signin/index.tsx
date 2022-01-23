import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { api } from "../../services/api";

import { Flex, useToast } from "@chakra-ui/react";
import { SignupForm } from "./SignupForm";
import HeroCall from "../../components/HeroCall";
import { useHistory } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignUpData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

export const Signup = () => {
  const history = useHistory();
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignup = ({ name, email, password }: SignUpData) => {
    setLoading(true);

    api
      .post("/register", { name, email, password })
      .then((_) => {
        setLoading(false);

        toast({
          title: "Cadastro realizado com sucesso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "E-mail já existente",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
      });
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mt={{ base: "10px", lg: "15vh" }}
      mx={{ base: "10vw", lg: "5vh" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <HeroCall />
      <SignupForm
        errors={errors}
        handleSignup={handleSubmit(handleSignup)}
        loading={loading}
        register={register}
      />
    </Flex>
  );
};
