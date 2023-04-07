import Image from "next/image";
import Link from "next/link";

const RentalsCard = ({ description, address, uid }) => {
  return (
    <>
      <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            className="w-full h-64"
            src="/images/workplace.jpeg"
            alt="Sunset in the mountains"
            width={1000}
            height={1000}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <Link href={`/rentals/${uid}`} className="underline">
                {address}
              </Link>
            </div>
            <p className="text-gray-700 text-sm h-16">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalsCard;
