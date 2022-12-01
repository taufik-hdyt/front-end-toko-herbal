import { memo } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const RegisterPage: React.FC = (): JSX.Element => {
  return (
    <Container mt="36">
      <Card>
        <CardBody>
          <Heading mb="30px" textAlign="center">
            Register
            <Avatar bg="red.500" />
          </Heading>
          <FormControl width="md">
            <FormLabel>Full Name</FormLabel>
            <Input h="14" placeholder="Enter your full name" type="text" />
            <FormLabel mt="20px">Email</FormLabel>
            <Input h="14" placeholder="Enter your email" type="email" />
            <FormLabel mt="20px">Password</FormLabel>
            <Input h="14" placeholder="Create passwords" type="password" />
            <Button mt="50px" h="14" width="100%" colorScheme="messenger">
              Register
            </Button>
          </FormControl>

          <Text fontSize="20px" mt="24" textAlign="center" color="red">
            already have an account?? <Link href="/login">Login</Link>
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
};
export default memo(RegisterPage);
