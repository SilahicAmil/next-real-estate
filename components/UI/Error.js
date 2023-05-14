import Loading from "./Loading";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen justify-center">
        <div className="h-1/6">
          <Loading />
        </div>
        <center className="mt-24 m-auto">
          <div className="tracking-wider mt-4">
            <span className="text-gray-500 text-6xl block">
              <span>4&nbsp;0&nbsp;4</span>
            </span>
            <span className="text-gray-500 text-xl">
              Our team of highly trained monkeys, couldn&#39;t find what you are
              looking for!
            </span>
          </div>
        </center>
        <center className="mt-6">
          <button
            onClick={() => router.replace("/")}
            className="text-gray-500 font-mono text-xl bg-gray-200 p-3 w-52 rounded-md hover:rounded-xl hover:duration-100"
          >
            Go Home
          </button>
        </center>
      </div>
    </>
  );
};

export default Error;
