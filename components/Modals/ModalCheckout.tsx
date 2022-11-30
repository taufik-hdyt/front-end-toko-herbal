import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";

import ListCheckOut from "./partials/ListCheckOut";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheckout: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent h="781px">
        <ModalHeader>
          <Flex>
            <Box>
              <Text fontSize="25px" color="black" fontWeight="semibold">
                Checkout
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="25px" color="black" fontWeight="semibold">
                Receipt no: 010410919
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Text fontSize="20px" color="black" fontWeight="semibold">
                Cashier :
              </Text>
            </Box>

            <Box>
              <Text fontSize="20px" color="black" fontWeight="semibold" ml="2">
                Pevita Pearce
              </Text>
            </Box>
          </Flex>
        </ModalHeader>

        <ModalBody mt="100px" overflowY="auto">
          <VStack align="stretch">
            <ListCheckOut />
            <ListCheckOut />
            <ListCheckOut />
            <ListCheckOut />
          </VStack>
        </ModalBody>
        <Box pl="6" pt="5" pr="10">
          <Flex>
            <Box>
              <Text fontSize="25px" color="black" fontWeight="semibold">
                Ppn10%
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="25px" color="black" fontWeight="semibold">
                Rp. 10.500
              </Text>
            </Box>
          </Flex>
        </Box>

        <Flex pr="8" pt="10" justify="flex-end">
          <Box>
            <Text fontSize="25px" color="black" fontWeight="semibold">
              Total :
            </Text>
          </Box>
          <Box>
            <Text fontSize="25px" color="black" fontWeight="semibold" ml="20px">
              Rp. 105.000
            </Text>
          </Box>
        </Flex>

        <Flex justify="flex-start" pl="7">
          <Box>
            <Text fontSize="25px" color="black" fontWeight="semibold">
              Payment :
            </Text>
          </Box>
          <Box>
            <Text fontSize="25px" color="black" fontWeight="semibold" ml="20px">
              Cash
            </Text>
          </Box>
        </Flex>

        <ModalFooter display="inline-block">
          <Button fontSize="35px" w="full" h="70px" bg="#F24F8A" color="white">
            Print
          </Button>
          <Text textAlign="center" fontSize="25px" fontWeight="semibold">
            Or
          </Text>
          <Button fontSize="35px" w="full" h="70px" bg="#57CAD5" color="white">
            Send email
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalCheckout);
