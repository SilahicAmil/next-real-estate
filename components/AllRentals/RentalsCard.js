import Image from "next/image";
import Link from "next/link";

const RentalsCard = ({ description, address, uid, price }) => {
  return (
    <>
      <div className="max-w-sm rounded-lg shadow-xl ">
        <Image
          className="w-full h-64 rounded-t-lg object-cover"
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
          <div className="h-18  font-sans tracking-wide">
            <span>$&nbsp;{price}</span>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalsCard;
