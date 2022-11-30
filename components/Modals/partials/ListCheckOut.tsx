import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";

const ListCheckOut: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Flex pt="5">
        <Box>
          <Text fontSize="25px" color="black" fontWeight="semibold">
            Coffe Latte
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="25px" color="black" fontWeight="semibold">
            Rp. 50.000
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default memo(ListCheckOut);
