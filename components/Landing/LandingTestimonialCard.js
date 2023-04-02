import Image from "next/image";

const LandingTestimonialCard = ({ name, twitterName, snippet, time }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
        <div className="">
          <div className="mb-5 block">
            <div className="flex flex-wrap mb-4 -m-2">
              <div className="w-auto p-2">
                <Image
                  src="/images/workplace.jpeg"
                  alt=""
                  height={1000}
                  width={1000}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="w-auto p-2">
                <h3 className="font-semibold leading-normal">{name}</h3>
                <p className="text-gray-500 uppercase">{twitterName}</p>
              </div>
            </div>
            <p className="text-lg font-medium">{snippet}</p>
          </div>
          <div className="block">
            <p className="text-sm text-gray-500 font-medium">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTestimonialCard;
