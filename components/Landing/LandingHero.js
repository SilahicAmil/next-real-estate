import Image from "next/image";
import Link from "next/link";

const LandingHero = ({}) => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8  ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Corp Education"
                src="/images/behind-photo.svg"
                className="absolute h-1/2 w-full object-cover ml-16 opacity-40"
                width={400}
                height={400}
              />
              <div className="h-full w-full relative m-auto flex justify-center items-center">
                <Image
                  alt="Photo of House"
                  src="/images/modern-house-removebg.png"
                  width={1000}
                  height={1000}
                  className="z-50 h-full w-full object-cover "
                />
              </div>
            </div>

            <div className="lg:py-24 ">
              <h1 className="text-6xl font-bold sm:text-4xl w-1/2">
                Modern living for everyone
              </h1>

              <p className="mt-4 text-[#5F5B53] w-auto text-md">
                We provide a complete service for the rental of real estate. We
                have been in operation for 15+ years.
              </p>

              <Link
                href="/rentals"
                className="mt-8 inline-block  bg-[#1C3988] rounded-sm px-12 py-3 font-medium text-lg text-white  hover:rounded-xl hover:duration-200"
              >
                Look at our offers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingHero;
