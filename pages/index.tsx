import type { NextPage, NextPageContext } from "next";
import Layout from "../components/Layout/Layout";
import History from "../containers/History/History";
import Product from "../containers/Product/Product";

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <Product />
    </Layout>
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
