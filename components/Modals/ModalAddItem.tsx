import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
} from "@chakra-ui/react";
import { memo } from "react";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheckout: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Box boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent h="781px">
          <ModalHeader fontSize="35px">Add Item</ModalHeader>
          <ModalBody>
            <FormControl mt="100px">
              <Flex>
                <Box
                  textAlign="center"
                  w="130px"
                  fontSize="30px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Nama
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    w="550px"
                    h="67px"
                    fontSize="25px"
                    fontWeight="semibold"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  ></Input>
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="130px"
                  fontSize="30px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Image
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    w="550px"
                    h="67px"
                    fontSize="20px"
                    fontWeight="semibold"
                    type="file"
                    multiple
                    accept="image/*"
                  />
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="130px"
                  fontSize="30px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Price
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    w="411px"
                    h="67px"
                    fontSize="25px"
                    fontWeight="semibold"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  ></Input>
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="130px"
                  fontSize="30px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  Category
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Select
                    w="278px"
                    h="67px"
                    fontWeight="semibold"
                    fontSize="27px"
                    color="#CECECE"
                    icon={<TriangleDownIcon />}
                    placeholder="Category"
                  />
                </Box>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              fontSize="30px"
              w="180px"
              h="70px"
              bg="#F24F8A"
              color="white"
              borderRadius="10px"
              mr="20px"
            >
              Cancel
            </Button>
            <Button
              fontSize="30px"
              w="180px"
              h="70px"
              bg="#57CAD5"
              color="white"
              borderRadius="10px"
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default memo(ModalCheckout);
