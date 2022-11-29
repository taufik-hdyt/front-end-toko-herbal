import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { memo } from "react";

const CartItem: React.FC = (): JSX.Element => {
  return (
    <HStack>
      <Image
        w="100px"
        h="100px"
        src="/images/firdaus-roslan-pN769u0KHNA-unsplash.png"
        alt="Image"
      />
      <Box flex="1">
        <Text fontSize="20px" color="black">
          Coffee Latte
        </Text>
        <Flex justify="space-between" mt="20px">
          <Flex>
            <Button
              w="40px"
              h="40px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              fontSize="20px"
              textAlign="center"
              color="#82DE3A"
              rounded="0"
            >
              <MinusIcon />
            </Button>

            <Box
              w="45px"
              h="40px"
              border="1px solid #82DE3A"
              fontSize="29px"
              textAlign="center"
              color="#82DE3A"
            >
              1
            </Box>
            <Button
              w="40px"
              h="40px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              fontSize="20px"
              textAlign="center"
              color="#82DE3A"
              fontWeight="bold"
              rounded="0"
            >
              <AddIcon />
            </Button>
          </Flex>
          <Text fontSize="20px">Rp.50.000</Text>
        </Flex>
      </Box>
    </HStack>
  );
};

export default memo(CartItem);
