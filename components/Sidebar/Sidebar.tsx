import { Box, GridItem, Image } from "@chakra-ui/react";
import { memo } from "react";

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <GridItem pl="2" area={"nav"}>
      <Box ml="20px" mt="50px">
        <Image mt="25px" src="/images/fork.png" alt="pesan" />
        <Image mt="40px" src="/images/clip.png" alt="laporan" />
        <Image mt="40px" src="/images/add.png" alt="add" />
      </Box>
    </GridItem>
  );
};

export default memo(Sidebar);
