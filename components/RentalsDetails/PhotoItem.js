import Image from "next/image";
const PhotoItem = ({ imageName }) => {
  return (
    <>
      <div>
        <Image
          alt="123"
          src="/images/test-photo.jpeg"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};

export default PhotoItem;
