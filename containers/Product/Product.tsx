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
import { memo } from "react";

const Products: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Grid
        templateAreas={`"header header colom1 "
                  "nav main main2"
                  "nav footer main2"`}
        gridTemplateRows={"100px 1fr 30px"}
        gridTemplateColumns={"109px 1fr 500px"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"header"}>
          <Image ml="50px" mt="25px" src="/images/menu (1).png" alt="menu" />
          <Text mt="-35px" textAlign="center" fontSize="30px" color="black">
            Food Items
          </Text>
          <Box mt="-25px" ml="75%" width="300px" position="relative">
            <Image
              position="absolute"
              mt="-5px"
              ml="87%"
              src="/images/search.png"
              alt="search"
            />
          </Box>
        </GridItem>
        <GridItem pl="2" bg="orange.300" area={"colom1"}>
          header 2
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          <Box ml="20px" mt="50px">
            <Image mt="25px" src="/images/fork.png" alt="pesan" />
            <Image mt="40px" src="/images/clip.png" alt="laporan" />
            <Image mt="40px" src="/images/add.png" alt="add" />
          </Box>
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}></GridItem>
        <GridItem pl="2" bg="green.300" area={"footer"}>
          footer
        </GridItem>
      </Grid>
    </Box>
  );
};

export default memo(Products);
