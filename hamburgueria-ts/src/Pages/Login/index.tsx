import { Flex } from "@chakra-ui/react";
import LoginForm from "./LoginForm";
import HeroCall from "../../components/HeroCall";

function Login() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} mt={"20vh"}>
      <LoginForm />
      <HeroCall />
    </Flex>
  );
}

export default Login;
