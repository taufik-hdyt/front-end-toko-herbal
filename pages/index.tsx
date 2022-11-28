import { Box } from "@chakra-ui/react";
import type { NextPage, NextPageContext } from "next";
import Login from "../containers/Login/Login";
import Product from "../containers/Product/Product";

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Product />
      {/* <Login /> */}
    </div>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      title: "Home",
    },
  };
}
export default Home;
