import Image from "next/image";

const LandingTestimonialCard = ({}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-3">
      <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
        <div className="flex flex-col justify-between h-full">
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
                <h3 className="font-semibold leading-normal">Dana White</h3>
                <p className="text-gray-500 uppercase">@danawhite</p>
              </div>
            </div>
            <p className="text-lg font-medium">
              If you haven&rsquo;t tried out Real Estate yet, I would definitely
              recommend it for your next rental! &#x1F919;&#x1F3FB;
            </p>
          </div>
          <div className="block">
            <p className="text-sm text-gray-500 font-medium">3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTestimonialCard;
