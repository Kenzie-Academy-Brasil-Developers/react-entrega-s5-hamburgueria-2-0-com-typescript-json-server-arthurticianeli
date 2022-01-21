import { Grid } from "@chakra-ui/react";
import Card from "./Card";

function ProductsList() {
  return (
    <Grid
      templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
      gap={10}
      px={"10vw"}
      my={"5vh"}
      w="100%"
    >
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
      <Card image="img" />
    </Grid>
  );
}

export default ProductsList;
