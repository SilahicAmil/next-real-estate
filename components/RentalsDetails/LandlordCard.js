import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import Image from "next/image";

const LandlordCard = ({ name, email, phone }) => {
  return (
    <div className="lg:w-1/4 flex-col flex items-center justify-center bg-[#F3F3FA] rounded-md sm:mt-6 lg:mt-0 h-full p-12">
      <div className="w-48 h-48 mt-6 mb-6">
        <Image
          alt={name}
          src="/images/workplace.jpeg"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="font-merriweather text-4xl">{name}</h1>
      <div className="flex flex-col items-center mt-4 font-sans">
        <p className="text-md flex items-center gap-2">
          <AiOutlineMail className="text-lg" />
          {email}
        </p>
        <p className="tex-sm flex items-center gap-2">
          <AiOutlinePhone className="text-lg" />
          +1&nbsp;{phone}
        </p>
      </div>
      <button className="mt-4 underline">View Landlord Profile</button>
    </div>
  );
};

export default LandlordCard;
