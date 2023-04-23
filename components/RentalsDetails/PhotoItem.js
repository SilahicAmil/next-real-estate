import Image from "next/image";
const PhotoItem = ({ imagePath, imageName }) => {
  return (
    <>
      <div>
        <Image alt={imageName} src={imagePath} width={400} height={400} />
      </div>
    </>
  );
};

export default PhotoItem;
