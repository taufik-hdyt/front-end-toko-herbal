import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import { imgStyles } from "./Header.styles";

const Header: React.FC = (): JSX.Element => {
  return (
    <GridItem pl="2" area={"header"}>
      <Box>
        <Image ml="25px" mt="25px" src="/images/menu (1).png" alt="menu" />
        <Text mt="-35px" textAlign="center" fontSize="30px" color="black">
          Food Items
        </Text>
        <Box mt="-25px" ml="75%" width="300px" position="relative">
          <Image {...imgStyles} src="/images/search.png" alt="search" />
        </Box>
      </Box>
    </GridItem>
  );
};

export default memo(Header);
