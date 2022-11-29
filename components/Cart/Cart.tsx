import { GridItem, Text } from "@chakra-ui/react";
import { memo } from "react";

const Cart: React.FC = (): JSX.Element => {
  return (
    <GridItem pl="2" area={"cart"}>
      <Text fontSize="25px" color="black" textAlign="center" mt="7">
        Cart
      </Text>
    </GridItem>
  );
};

export default memo(Cart);
