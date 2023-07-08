import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";
import Header from "@/components/UI/Header";

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

      <Header
        title="Contact Us"
        subtext="Let us know any issues you encounter!"
      />
      <ContactForm />
    </>
  );
};

export default ContactUsPage;
