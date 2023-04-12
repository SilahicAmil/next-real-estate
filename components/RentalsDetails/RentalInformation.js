import { AiOutlineHome } from "react-icons/ai";

const RentalInformation = () => {
  return (
    <>
      <div className="lg:flex justify-around gap-24 mb-12 mt-12 h-full shadow-inner pt-12">
        <div className="flex items-center ">
          <AiOutlineHome className="text-4xl" />
          <p className="flex text-xl">Apartment</p>
        </div>
        <div className="flex">
          <AiOutlineHome />

          <p>SQFT</p>
        </div>
        <div className="flex">
          <AiOutlineHome />

          <p>Location</p>
        </div>
        <div className="flex">
          <AiOutlineHome />

          <p>Pricing</p>
        </div>
      </div>
    </>
  );
};

export default RentalInformation;
