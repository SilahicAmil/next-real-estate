import "@/styles/globals.css";

import { useEffect, useState } from "react";

import Layout from "@/components/Layout/Layout";
import Loading from "@/components/UI/Loading";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };

    const end = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  switch (Component.displayName) {
    case "errorPage":
      return <Component {...pageProps} />;

    default: {
      return isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
  }
}
