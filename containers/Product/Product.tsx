import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import { bubleStyles } from "./Product.styles";

const Products: React.FC = (): JSX.Element => {
  return (
    <Box>
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
