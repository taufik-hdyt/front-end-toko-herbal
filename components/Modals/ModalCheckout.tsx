import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { memo } from "react";
import ListCheckOut from "./Partcials/listcheckout";

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
        <ModalBody pos="relative">
          <Box
            h="full"
            display="flex"
            justifyContent="end"
            alignItems="flex-end"
            bg="green.100"
          >
            <Text fontSize="25px" color="black" fontWeight="bold">
              Total :
            </Text>
            <Text fontSize="25px" color="black" fontWeight="bold" ml="20px">
              Rp. 105.000
            </Text>

            <Text fontSize="25px" color="black" fontWeight="bold">
              Payment :
            </Text>
            <Text fontSize="25px" color="black" fontWeight="bold">
              Cash
            </Text>
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
