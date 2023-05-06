import Header from "@/components/UI/Header";
import { useQRCode } from "next-qrcode";

const ConfirmationPage = ({}) => {
  const { Canvas } = useQRCode();
  return (
    <>
      <div>
        <Header
          title="Thank you for your purchase"
          subtext="We hope you enjoy your rental!"
        />
        <div className="flex items-center w-full justify-center">
          <Canvas
            text="Test QR Code"
            options={{
              level: "L",
              margin: 2,
              scale: 5,
              width: 250,
              color: {
                dark: "#010599FF",
                light: "#FFBF60FF",
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
