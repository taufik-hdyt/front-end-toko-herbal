import { Box, Flex, GridItem, Spacer, Text, VStack } from "@chakra-ui/react";
import { memo } from "react";
import CartItem from "./Partials/CartItem";
import CheckOut from "./Partials/CheckOut";

const Cart: React.FC = (): JSX.Element => {
  return (
    <GridItem pl="2" area={"cart"}>
      <Flex direction="column" h="full">
        <Text fontSize="25px" color="black" textAlign="center" mt="7">
          Cart
        </Text>
        <Box w="23px" bg="#57CAD5" rounded={"full"} ml="56%" mt="-30px">
          <Text
            textAlign="center"
            fontSize="18px"
            fontWeight={"bold"}
            color="white"
          >
            3
          </Text>
        </Box>

        <Box
          pr="2"
          flex="1"
          h="full"
          mt="50px"
          overflowY="auto"
          maxH="calc(100vh - 350px)"
        >
          <VStack align="stretch" spacing="4">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </VStack>
        </Box>
        <CheckOut />
      </Flex>
    </GridItem>
  );
};

export default memo(Cart);
