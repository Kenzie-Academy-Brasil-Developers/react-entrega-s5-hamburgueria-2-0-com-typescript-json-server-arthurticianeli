import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";

import Logo from "../assets/logo.svg";
import Bag from "../assets/bag.svg";
import Details from "../assets/details.png";

function HeroCall() {
  return (
    <Stack spacing={"30px"} display={"flex"} alignItems={"center"} my={"30px"}>
      <Image src={Logo} w={"250px"} />
      <Flex
        maxW={"350px"}
        border={"#F5F5F5 solid 2px"}
        alignItems={"center"}
        p={"15px"}
        rounded={"5px"}
        boxShadow={"0px 0px 30px -20px rgba(0, 0, 0, 0.25)"}
      >
        <Center
          maxW={"60px"}
          minW={"60px"}
          h={"60px"}
          bg={"rgb(220, 255, 238)"}
          mr={"20px"}
        >
          <Image src={Bag} color="#27AE60" />
        </Center>
        <Text mw={"200px"} w="full" textStyle={"body"}>
          A vida é como um sanduíche, é preciso recheá-la com os
          <b> melhores </b>
          ingredientes.
        </Text>
      </Flex>
      <Image
        src={Details}
        w={"250px"}
        display={{ base: "none", lg: "block" }}
      />
    </Stack>
  );
}

export default HeroCall;
