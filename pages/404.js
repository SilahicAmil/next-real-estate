import Error from "@/components/UI/Error";
import Head from "next/head";

const ErrorPage = ({}) => {
  return (
    <>
      <Head>
        <title>Real Esate - 404</title>
      </Head>
      <div className="h-full">
        <Error />
      </div>
    </>
  );
};

ErrorPage.displayName = "errorPage";

export default ErrorPage;
