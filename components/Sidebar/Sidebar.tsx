import { Avatar, Box, GridItem, Image, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { memo } from "react";
import ModalAddItem from "../Modals/ModalAddItem";
interface IProps {
  isOpenSideBar: boolean;
}
const Sidebar: React.FC<IProps> = ({ isOpenSideBar }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem pl="2" area={"nav"}>
      <Box
        transition="0.3s"
        w={isOpenSideBar ? "250px" : "70px"}
        ml="20px"
        mt="50px"
        cursor={"pointer"}
      >
        <Link href="/">
          <Image mt="25px" src="/images/fork.png" alt="pesan" />
        </Link>

        <Link href="/history">
          <Image mt="40px" src="/images/clip.png" alt="laporan" />
        </Link>
        <Image onClick={onOpen} mt="40px" src="/images/add.png" alt="add" />
      </Box>

      <ModalAddItem isOpen={isOpen} onClose={onClose} />
    </GridItem>
  );
};

export default memo(Sidebar);
