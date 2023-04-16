import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = ({}) => {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>404 Page</h1>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
    </>
  );
};

ErrorPage.displayName = "errorPage";

export default ErrorPage;
