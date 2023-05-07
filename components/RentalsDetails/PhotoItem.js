import Image from "next/image";
const PhotoItem = ({ imagePath, imageName }) => {
  return (
    <>
      <div className="h-full">
        <Image
          alt={imageName}
          src={imagePath}
          width={400}
          height={300}
          priority={true}
          className="object-fit w-full h-full"
        />
      </div>
    </>
  );
};

export default PhotoItem;
