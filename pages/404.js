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
      <div className="flex flex-col items-center justify-center h-[100vh] bg-red-300">
        <h1 className="text-4xl">404 Page</h1>
        <button
          onClick={() => router.back()}
          className="text-4xl bg-red-500 p-4"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

ErrorPage.displayName = "errorPage";

export default ErrorPage;
