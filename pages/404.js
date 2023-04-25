import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = ({}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Real Esate - 404</title>
      </Head>
      <div>
        <h1>404 Page</h1>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
    </>
  );
};

ErrorPage.displayName = "errorPage";

export default ErrorPage;
