import Head from "next/head";
import Landing from "@/components/Landing/Landing";
import { useRouter } from "next/router";

const HomePage = ({}) => {
  const router = useRouter();

  if (router.asPath === "/?status=success") {
    router.replace("/confirmation");
  }

  if (router.asPath === "/?status=cancel") {
    router.replace("/cancellation");
  }

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          property="og:title"
          content="High-End Apartment Rentals. Find the best rental for you with endless options. Now Servicing ALL 50 states."
          key="title"
        />
      </Head>
      <div>
        <Landing />
      </div>
    </>
  );
};

export default HomePage;
