import Image from "next/image";
import Link from "next/link";

const RentalsCard = ({ description, address, uid }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 lsm:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-12 m-8">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            class="w-full h-64"
            src="/images/workplace.jpeg"
            alt="Sunset in the mountains"
            width={1000}
            height={1000}
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              <Link href={`/rentals/${uid}`}>{address}</Link>
            </div>
            <p class="text-gray-700 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalsCard;
