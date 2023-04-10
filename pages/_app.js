import "@/styles/globals.css";

import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  if (Component.displayName === "errorPage") {
    return <Component {...pageProps} />;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
