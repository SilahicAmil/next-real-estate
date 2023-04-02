import Image from "next/image";

const LandingTeamCard = ({ snippet, image, name, position }) => {
  return (
    <div className="mb-8 sm:break-inside-avoid w-96 h-96">
      <blockquote className="rounded-xl bg-gray-50 p-6 shadow flex items-center flex-col ">
        <Image
          alt="Photo of Tim Cook"
          src="/images/workplace.jpeg"
          className="h-64 w-64 rounded-full object-cover"
          width={200}
          height={200}
        />
        <p className="leading-relaxed text-gray-700 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          sed aspernatur minima eaque officiis id dicta quasi veritatis error,
          perferendis asperiores ipsa deserunt est rem tempora labore. Ipsa,
          harum libero!
        </p>
      </blockquote>

      <div className="mt-4 flex items-center gap-4">
        <div className="text-sm">
          <p className="font-medium">Tim Cook</p>
          <p className="mt-1">CEO @ Real Estate</p>
        </div>
      </div>
    </div>
  );
};

export default LandingTeamCard;
