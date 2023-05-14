import Image from "next/image";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  return (
    <>
      <div className="h-screen w-full">
        <div className="h-1/6 w-1/6 m-auto flex justify-center items-center mt-12">
          {/* /https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png */}
          {/* please dont sue me yotube, just want to use your monkey image */}
          <Image
            alt="Youtue Loading Error Monkey"
            src="/images/error-monkey.png"
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
          />
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
            className="text-white font-mono text-xl bg-darkBlue p-3 w-52 rounded-md hover:rounded-xl hover:duration-100"
          >
            Go Home
          </button>
        </center>
      </div>
    </>
  );
};

export default Error;
