import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import PhotoItem from "./PhotoItem";

const PhotoCarousel = ({ imageData }) => {
  return (
    <>
      <div className="lg:w-1/2">
        <Carousel showArrows={true} showThumbs={false}>
          {/* Map Over PhotoItem Eventually */}
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
        </Carousel>
      </div>
    </>
  );
};

export default PhotoCarousel;
