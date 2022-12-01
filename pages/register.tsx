import type { NextPage, NextPageContext } from "next";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";

const RegisterPage: NextPage = (): JSX.Element => {
  return <Register />;
};

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      title: "Register",
    },
  };
}
export default RegisterPage;
