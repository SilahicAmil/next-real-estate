import Error from "@/components/UI/Error";
import Head from "next/head";

const ErrorPage = ({}) => {
  return (
    <>
      <Head>
        <title>Real Esate - 404</title>
        <meta
          property="og:title"
          content="Error Page for Real Estate. Something Went Wrong. Please Retry Again!"
          key="title"
        />
      </Head>
      <Error />
    </>
  );
};

ErrorPage.displayName = "errorPage";

export default ErrorPage;
