import Image from "next/image";
import Link from "next/link";

const RentalsCard = ({ description, address, uid }) => {
  return (
    <>
      <div className="">
        <div className="max-w-sm rounded shadow-xl">
          <Image
            className="w-full h-64"
            src="/images/workplace.jpeg"
            alt="Sunset in the mountains"
            width={1000}
            height={1000}
          />
          <div className="px-6 py-4 w-full">
            <div className="font-bold text-xl mb-2">
              <Link
                href={`/rentals/${uid}`}
                className="underline font-merriweather"
              >
                {address}
              </Link>
            </div>
            <p className="text-gray-600 text-sm h-12  font-sans">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalsCard;
