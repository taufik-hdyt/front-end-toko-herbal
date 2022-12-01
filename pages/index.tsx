import type { NextPage, NextPageContext } from "next";
import Layout from "../components/Layout/Layout";
import Product from "../containers/Product/Product";
import nookies from "nookies";
import { redirect } from "next/dist/server/api-utils";

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <Product />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  if (!cookies.token) {
    return {
      redirect: {
        destination: "login",
      },
    };
  }
  return {
    props: {
      title: "Home",
    },
  };
}
export default Home;
