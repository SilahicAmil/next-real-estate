import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useRef, useState } from "react";

import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;

const Map = () => {
  const [mapInstance, setMapInstance] = useState(null);
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/silahicamil/clgr20kdu000601r56tp22g9w",
      center: [-90.791303, 40.267571],
      zoom: 4,
    });

    map.on("load", () => {
      setMapInstance(map);

      map.resize();
    });

    map.on("click", (event) => {
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["real-estate"],
      });

      if (!features.length) {
        return;
      }

      const feature = features[0];
      console.log(feature);

      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.address}</h3><a href="rentals/${feature.properties.uid}" rel="noreferrer" target="_blank">View Property</a>`
        )
        .addTo(map);
    });
  }, []);

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
