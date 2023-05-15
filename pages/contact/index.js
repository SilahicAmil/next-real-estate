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

      <div>
        <form>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" placeholder="Jim Bob" id="full-name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="jimbob@realestate.com" id="email" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Type your message here..."
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactUsPage;
