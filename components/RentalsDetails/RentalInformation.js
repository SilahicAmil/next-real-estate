import { AiOutlineHome, AiOutlineLayout } from "react-icons/ai";

import { MdAttachMoney } from "react-icons/md";
import { Merriweather } from "next/font/google";
import { VscLocation } from "react-icons/vsc";

const merriweather = Merriweather({ weight: "300", subsets: ["latin"] });

const RentalInformation = ({ sqft, location, pricing }) => {
  return (
    <>
      <div className="mt-12 mb-12 h-24 ">
        <div
          className={`lg:flex items-center justify-around h-full lg:pt-12 shadow-inner ${merriweather.className}`}
        >
          <div className="flex items-center gap-2">
            <AiOutlineHome className="text-3xl text-[#4764C3]" />
            <p className="flex text-xl">Apartment</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineLayout className="text-3xl text-[#4764C3]" />

            <p className="text-xl">{sqft}&nbsp;SQFT</p>
          </div>
          <div className="flex items-center gap-2">
            <VscLocation className="text-3xl text-[#4764C3]" />

            <p className="text-xl">{location},&nbsp;USA</p>
          </div>
          <div className="flex items-center gap-2">
            <MdAttachMoney className="text-3xl text-[#4764C3]" />

            <p className="text-xl">{pricing}/day</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalInformation;
