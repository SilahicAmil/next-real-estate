import Header from "@/components/UI/Header";
import { useQRCode } from "next-qrcode";

const ConfirmationPage = ({}) => {
  const { Image } = useQRCode();
  return (
    <>
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
              color: {
                dark: "#010599FF",
                light: "#FFBF60FF",
              },
            }}
            alt="QR Code"
          />
        </div>
        {/* Download QR Code */}
        <button>download</button>
        {/* Send QR Code to email */}
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <button>Send Email</button>
        </form>
      </div>
    </>
  );
};

export default ConfirmationPage;
