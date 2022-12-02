import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import axios from "axios";

const Products: React.FC = (): JSX.Element => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/user")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
                  <Button mt="4">View</Button>
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
