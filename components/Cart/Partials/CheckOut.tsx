import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { memo } from "react";
import ModalCheckout from "../../Modals/ModalCheckout";

const CheckOut: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="400px">
      <Flex>
        <Box>
          <Text fontSize="24px" ml="20px">
            Total:
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text mr="20px" fontSize="24px">
            Rp. 105.000*
          </Text>
        </Box>
      </Flex>
      <Text fontSize="20px" fontWeight="semibold" ml="15px" mt="10px">
        *Belum termasuk ppn
      </Text>

      <Grid>
        <GridItem>
          <Button
            onClick={onOpen}
            h="61px"
            fontSize="25px"
            bg="#57CAD5"
            color="white"
            fontWeight="bold"
            rounded="0"
            w="390px"
          >
            Checkout
          </Button>
        </GridItem>
        <GridItem>
          <Button
            h="61px"
            fontSize="25px"
            bg="#F24F8A"
            color="white"
            fontWeight="bold"
            rounded="0"
            mt="3"
            w="390px"
          >
            Cancel
          </Button>
        </GridItem>
      </Grid>

      <ModalCheckout isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default memo(CheckOut);
