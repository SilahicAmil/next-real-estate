import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useRef, useState } from "react";

import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;
const Map = ({ rentals }) => {
  const [mapInstance, setMapInstance] = useState(null);
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-90.791303, 40.267571],
      zoom: 4,
    });

    map.on("load", () => {
      setMapInstance(map);

      map.resize();
    });

    new mapboxgl.Marker()
      .setLngLat([rentals[2].longitude, rentals[2].latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3>${rentals[2].address}</h3>`
        )
      )
      .addTo(map);
  }, [rentals]);

  return (
    <>
      <div
        className="lg:h-[100vh] w-full rounded-lg mt-12 m-4"
        ref={mapContainer}
      ></div>
    </>
  );
};

export default Map;
