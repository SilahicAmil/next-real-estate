import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import PhotoItem from "./PhotoItem";

const PhotoCarousel = ({ imageData }) => {
  return (
    <>
      <div className="lg:w-1/2">
        <Carousel
          showArrows={true}
          showThumbs={false}
          className="w-full h-full"
        >
          {/* Map Over PhotoItem Eventually */}
          {imageData.map((photo) => {
            return (
              <PhotoItem
                key={photo.id}
                imageName={photo.imageName}
                imagePath={photo.imagePath}
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default PhotoCarousel;
