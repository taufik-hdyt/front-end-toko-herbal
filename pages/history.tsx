import type { NextPage, NextPageContext } from "next";
import Layout from "../components/Layout/Layout";
import History from "../containers/History/History";

const HistoryPage: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <History />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      title: "History",
    },
  };
}
export default HistoryPage;
