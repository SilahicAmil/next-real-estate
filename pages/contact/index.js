import Head from "next/head";

const ContactUsPage = ({}) => {
  return (
    <>
      <Head>
        <title>Real Estate - Contact Us</title>
        <meta
          property="og:title"
          content="If you encounter any issues please contact us. One of our agents would love to resolve any issues you have."
          key="title"
        />
      </Head>

      <div>
        <h1>Contact Us Page</h1>
        {/* typical contact form will go here */}
      </div>
    </>
  );
};

export default ContactUsPage;
