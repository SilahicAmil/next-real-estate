import Image from "next/image";

const LandlordCard = ({ name, email }) => {
  return (
    <div className="lg:w-1/4 flex-col flex items-center bg-[#F3F3FA] rounded-md sm:mt-12 lg:mt-0">
      <div className="w-32 h-32 mt-12 mb-6">
        <Image
          alt={name}
          src="/images/workplace.jpeg"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h1 className="font-merriweather text-4xl">{name}</h1>
      <h1 className="font-sans text-sm">{email}</h1>
    </div>
  );
};

export default LandlordCard;
