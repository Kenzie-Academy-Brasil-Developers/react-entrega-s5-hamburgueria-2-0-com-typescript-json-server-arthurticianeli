import { Box, Center, Flex, IconButton, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import Cart from "../Cart/Cart";
import InputSearch from "../Inputs/InputSearch";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
      justifyContent={"space-between"}
      pl={"10vw"}
      pr={"12vw"}
    >
      {showSearch ? (
        <Box m="auto">
          <InputSearch hide={false} setShowSearch={setShowSearch} />
        </Box>
      ) : (
        <>
          <Image src={Logo} width={{ base: "100px", md: "200px" }} />
          <Flex alignItems={"center"}>
            <InputSearch hide={true} setShowSearch={setShowSearch} />
            <IconButton
              bg={"transparent"}
              color={"#BDBDBD"}
              _focus={{ boxShadow: "none" }}
              height={"60px"}
              width={"60px"}
              icon={<FaSearch size={"25px"} />}
              aria-label="Search Products"
              display={{ base: "flex", lg: "none" }}
              onClick={() => setShowSearch(true)}
            />
            <Cart />
            <IconButton
              bg={"transparent"}
              color={"#BDBDBD"}
              _focus={{ boxShadow: "none" }}
              height={"60px"}
              width={"60px"}
              icon={<FaSignOutAlt size={"30px"} />}
              aria-label="Logout"
            />
          </Flex>
        </>
      )}
    </Flex>
  );
}

export default Header;
