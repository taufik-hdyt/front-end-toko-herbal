import {
  Box,
  Container,
  Flex,
  Grid,
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
    <Box>
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

      <Grid w="401px">
        <Box
          onClick={onOpen}
          mb="10px"
          as="button"
          textAlign="center"
          h="61px"
          fontSize="25px"
          bg="#57CAD5"
          color="white"
          fontWeight="bold"
          w="360px"
        >
          Checkout
        </Box>
        <Box
          as="button"
          textAlign="center"
          h="61px"
          fontSize="25px"
          bg="#F24F8A"
          color="white"
          fontWeight="bold"
          w="360px"
        >
          Cancel
        </Box>
      </Grid>

      <ModalCheckout isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default memo(CheckOut);
