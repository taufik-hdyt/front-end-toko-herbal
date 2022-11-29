import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheckout: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent h="781px">
        <ModalHeader fontSize="30px">Checkout</ModalHeader>
        <Text fontSize="25px" fontWeight="bold" ml="450px" mt="-60px">
          Receipt no: #010410919
        </Text>
        <Text fontSize="20px" fontWeight="semibold" ml="25px" mt="15px">
          Cashier : Pevita Pearce
        </Text>
        <ModalBody>
          <Box mt="100px">
            <Flex>
              <Box w="500px" fontSize="25px" fontWeight="bold">
                Coffe Latte
              </Box>
              <Spacer />
              <Box w="150px" fontSize="25px" fontWeight="semibold">
                Rp. 30.000
              </Box>
            </Flex>
            <Flex mt="15px">
              <Box w="500px" fontSize="25px" fontWeight="bold">
                Black Forest 1x
              </Box>
              <Spacer />
              <Box w="150px" fontSize="25px" fontWeight="semibold">
                Rp. 15.000
              </Box>
            </Flex>

            <Flex mt="15px">
              <Box w="500px" fontSize="25px" fontWeight="bold">
                Salmon Truffle Teriyaki 1x
              </Box>
              <Spacer />
              <Box w="150px" fontSize="25px" fontWeight="semibold">
                Rp. 60.000
              </Box>
            </Flex>

            <Flex mt="15px">
              <Box w="500px" fontSize="25px" fontWeight="bold">
                Ppn 10%
              </Box>
              <Spacer />
              <Box w="150px" fontSize="25px" fontWeight="semibold">
                Rp. 10.500
              </Box>
            </Flex>

            <Flex mt="15px" ml="410px">
              <Box w="165px" fontSize="25px" fontWeight="semibold">
                Total:
              </Box>
              <Box w="160px" fontSize="25px" fontWeight="semibold">
                Rp. 115.500
              </Box>
            </Flex>
          </Box>
        </ModalBody>
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
