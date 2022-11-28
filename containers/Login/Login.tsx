import { memo } from "react";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Login: React.FC = (): JSX.Element => {
  return (
    <Container mt="15%" maxW="container.sm" color="">
      <FormControl width="50">
        <Heading mb="30px" textAlign="center">
          Login
        </Heading>

        <FormLabel>Email</FormLabel>
        <Input placeholder="Masukan Email" type="email" />

        <FormLabel mt="30px">Password</FormLabel>
        <Input placeholder="Masukan Password" type="password" />
      </FormControl>

      <Button mt="50px" width="100%" colorScheme="messenger">
        Log in
      </Button>

      <Text mt="200px" textAlign="center">
        Belum Punya Akun?? <Link href="#">Buat akun</Link>
      </Text>
    </Container>
  );
};
export default memo(Login);
