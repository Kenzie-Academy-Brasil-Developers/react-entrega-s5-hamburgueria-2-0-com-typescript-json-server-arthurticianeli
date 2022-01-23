import { Box, Flex, Grid, IconButton, Image } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import { useAuth } from "../../contexts/AuthContext";

import InputSearch from "../../components/Inputs/InputSearch";
import CartComponent from "../../components/Cart/Cart";
import Card from "../../components/Card";
import { api } from "../../services/api";

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  amount: number;
}

export function Main() {
  const [showSearch, setShowSearch] = useState(false);

  const { signOut } = useAuth();

  const [productList, setProductList] = useState<Product[]>([]);

  const loadProductList = useCallback(async () => {
    try {
      const response = await api.get(`/productList`);

      setProductList(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    loadProductList();
  }, [loadProductList]);

  const handleChange = (value: string) => {
    setProductList(
      productList.filter((e) =>
        e.title.toLowerCase().includes(value.toLowerCase())
      )
    );

    if (value.length === 0) loadProductList();
  };

  return (
    <>
      {/************* HEADER *************/}
      <Flex
        borderBottom="1px"
        borderBottomColor="#f5f5f5"
        paddingX="8"
        paddingY="2"
        justifyContent={"space-between"}
        px={"10vw"}
        minH={"60px"}
      >
        {showSearch ? (
          <Box m="auto">
            <InputSearch
              hide={false}
              setShowSearch={setShowSearch}
              handleChange={handleChange}
            />
          </Box>
        ) : (
          <>
            <Image
              src={Logo}
              width={{ base: "100px", sm: "150px", md: "200px" }}
            />
            <Flex alignItems={"center"}>
              <InputSearch
                hide={true}
                setShowSearch={setShowSearch}
                handleChange={handleChange}
              />
              <IconButton
                bg={"transparent"}
                color={"#BDBDBD"}
                _focus={{ boxShadow: "none" }}
                height={{ base: "20px", sm: "30px" }}
                width={{ base: "20px", sm: "30px" }}
                icon={<FaSearch size="100%" />}
                aria-label="Search Products"
                display={{ base: "flex", lg: "none" }}
                onClick={() => setShowSearch(true)}
              />
              <CartComponent />
              <IconButton
                bg={"transparent"}
                color={"#BDBDBD"}
                _focus={{ boxShadow: "none" }}
                height={{ base: "20px", sm: "30px" }}
                width={{ base: "20px", sm: "30px" }}
                icon={<FaSignOutAlt size="100%" />}
                aria-label="Logout"
                onClick={signOut}
              />
            </Flex>
          </>
        )}
      </Flex>

      {/************* PRODUCTS LIST *************/}
      <Grid
        templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
        gap={10}
        px={"10vw"}
        my={"5vh"}
      >
        {productList.map((e, i) => (
          <Card
            key={e.id}
            title={e.title}
            category={e.category}
            price={e.price}
            image={e.image}
            id={e.id}
            amount={e.amount}
          />
        ))}
      </Grid>
    </>
  );
}
