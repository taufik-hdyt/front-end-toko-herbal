import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import { bubleStyles } from "./Product.styles";

const Products: React.FC = (): JSX.Element => {
  return (
    <Box p="6">
      <Box
        rounded="md"
        filter="drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25))"
        bgGradient="linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%)"
        w="300px"
        h="150px"
        mb="5"
        pos="relative"
      >
        <Box {...bubleStyles} />
        <Box {...bubleStyles} top="30px" right="30px" />
        <Box {...bubleStyles} top="50px" right="50px" />
      </Box>
      <Grid templateColumns="1fr 1fr 1fr 1fr" gap="8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e: number, index: number) => {
          const name = `Produk ${e}`;
          return (
            <GridItem key={`produk-item-${index}`}>
              <Box w="full" bg="white" shadow="md" rounded="md">
                <Image w="full" src="/images/bear.png" alt={name} />
                <Box p="2">
                  <Text>{name}</Text>
                  <Text>Rp100.000</Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default memo(Products);
