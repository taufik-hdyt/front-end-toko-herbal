import { memo } from "react";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import { ILayoutProps } from "./Layout.types";

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <Grid
      templateAreas={`"header header cart "
              "nav main cart"
              "nav footer cart"`}
      gridTemplateRows={"100px 1fr 30px"}
      gridTemplateColumns={"109px 1fr 500px"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <Header />
      <Sidebar />
      <Cart />
      <GridItem pl="2" bg="rgba(190, 195, 202, 0.3)" area={"main"}>
        {children}
      </GridItem>
      <Footer />
    </Grid>
  );
};

export default memo(Layout);
