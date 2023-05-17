import Header from "@/components/UI/Header";
import { useQRCode } from "next-qrcode";

const ConfirmationPage = ({}) => {
  const { Image } = useQRCode();
  return (
    <>
      <h1 className="bg-red-500 text-6xl">WORK IN PROGRESS</h1>
      <div>
        <Header
          title="Thank you for your purchase"
          subtext="We hope you enjoy your rental!"
        />
        <div className="flex items-center w-full justify-center">
          <Image
            text="https://next-real-estate-nu.vercel.app/"
            options={{
              level: "Q",
              margin: 2,
              scale: 5,
              width: 250,
            }}
            alt="QR Code"
          />
        </div>
        {/* Send QR Code to email - AWS SQS could be used for this */}
        {/* need to figure out how to create an email template for this */}
        <form className="">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <button>Send Email</button>
        </form>
      </div>
    </>
  );
};

export default ConfirmationPage;
