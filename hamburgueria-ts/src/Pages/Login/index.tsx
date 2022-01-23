import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import HeroCall from "../../components/HeroCall";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signInSchema = yup.object().shape({
  email: yup.string().required("Nome obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

interface SignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    setLoading(true);
    signIn(data)
      .then((_: any) => setLoading(false))
      .catch((err: any) => setLoading(false));
  };

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      my={{ base: "10px", lg: "20vh" }}
      mx={{ base: "10vw", lg: "5vh" }}
      flexDir={{ base: "column-reverse", lg: "row" }}
    >
      <LoginForm
        errors={errors}
        handleSignIn={handleSubmit(handleSignIn)}
        loading={loading}
        register={register}
      />
      <HeroCall />
    </Flex>
  );
};
