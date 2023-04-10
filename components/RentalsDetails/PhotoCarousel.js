import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import PhotoItem from "./PhotoItem";

const PhotoCarousel = ({ imageData }) => {
  return (
    <>
      <div className="lg:w-1/2 h-full">
        <Carousel showArrows={true}>
          {/* Map Over PhotoItem */}
          <PhotoItem />
          <div>
            <Image
              alt="123"
              src="/images/test-photo.jpeg"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              alt="123"
              src="/images/test-photo.jpeg"
              width={400}
              height={400}
            />
          </div>
          <div>
            <Image
              alt="123"
              src="/images/test-photo.jpeg"
              width={400}
              height={400}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default PhotoCarousel;
