import Image from "next/image";

const LandingAbout = ({}) => {
  return (
    <>
      <section className="shadow-inner" id="about">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
              <div className="h-full w-full relative m-auto flex justify-center items-center">
                <Image
                  alt="Photo of House"
                  src="/images/workplace.jpeg"
                  width={500}
                  height={1000}
                  className="z-50 h-full object-cover w-full"
                />
              </div>
            </div>

            <div className="lg:py-24">
              <h1 className="text-6xl font-bold sm:text-4xl w-1/2">About Us</h1>

              <p className="mt-4 text-[#5F5B53] w-auto text-md ">
                We are a company that connects the world of real estate. We
                provide a complete service for the sale, purchase or rental of
                real estate. Our advantage is more than 15 years of experience
                in attractive locations across the world!
                <br />
                <br />
                <br />
                We have a connection in all markets, so we can solve everything
                under one roof. By constantly innovating our business
                activities, we move forward and we are able to offer truly
                above-standard services that set us apart from the competition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingAbout;
