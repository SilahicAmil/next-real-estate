import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useRef, useState } from "react";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;

const RentalsMap = () => {
  const [mapInstance, setMapInstance] = useState(null);
  const [webglError, setWebglError] = useState(null);
  const mapContainer = useRef();

  useEffect(() => {
    if (mapboxgl.supported() === false) {
      setWebglError(true);
      return;
    } else {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: process.env.NEXT_PUBLIC_MAP_STYLE,
        center: [-90.791303, 40.267571],
        zoom: 4,
        cooperativeGestures: true,
      });

      map.on("load", () => {
        setMapInstance(map);

        // map.resize();
      });

      map.on("click", (event) => {
        const features = map.queryRenderedFeatures(event.point, {
          layers: ["updated-real-estate"],
        });

        if (!features.length) {
          return;
        }

        const feature = features[0];

        new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(
            `<h3>${feature.properties.address}</h3><a href="rentals/${feature.properties.uid}" rel="noreferrer" target="_blank">View Property</a>`
          )
          .addTo(map);
      });

      map.addControl(new mapboxgl.NavigationControl());
    }
  }, []);

  return (
    <>
      {webglError ? (
        <div className="lg:w-full rounded-lg mt-12 m-4">
          <h1 className="text-2xl tracking-wider">
            Please Enable WebGL to View Map.
          </h1>
        </div>
      ) : (
        <div
          className="h-[100vh] lg:h-[100vh] lg:w-full rounded-lg mt-12 m-4 "
          ref={mapContainer}
        />
      )}
    </>
  );
};

export default RentalsMap;
