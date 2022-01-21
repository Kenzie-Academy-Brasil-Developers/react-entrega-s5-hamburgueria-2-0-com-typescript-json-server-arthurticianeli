import { Flex } from "@chakra-ui/react";
import HeroCall from "../../components/HeroCall";
import SigninForm from "./SigninForm";

function Signin() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} mt={"20vh"}>
      <HeroCall />
      <SigninForm />
    </Flex>
  );
}

export default Signin;
