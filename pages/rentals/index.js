import "mapbox-gl/dist/mapbox-gl.css";

import { useEffect, useRef, useState } from "react";

import Header from "@/components/UI/Header";
import RentalFilter from "@/components/AllRentals/RentalFilter";
import RentalsCard from "@/components/AllRentals/RentalsCard";
import mapboxgl from "mapbox-gl";
import { supabase } from "@/lib/supabase";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN;

const AllRentalsPage = ({ rentals }) => {
  const [rentalsData, setRentalsData] = useState(rentals);
  const [mapInstance, setMapInstance] = useState(null);
  const mapContainer = useRef();

  const removedDuplicateBedrooms = rentals.filter(
    // self is the array of the current element that is being filtered
    (val, index, self) =>
      index === self.findIndex((t) => t.bedrooms === val.bedrooms)
  );

  const sortedBedrooms = removedDuplicateBedrooms.sort((a, b) => {
    return a.bedrooms - b.bedrooms;
  });

  const removedDuplicateStates = rentals.filter(
    (val, index, self) => index === self.findIndex((t) => t.state === val.state)
  );

  const sortedStates = removedDuplicateStates.sort((a, b) => {
    return a.state.localeCompare(b.state);
  });

  // this will eventually be async from "/api/filterUpdater" or something like that
  const filterUpdateHandler = (filterData) => {
    // this filter is going to be very complex
    // Possibly find a way to make it more efficient
    // See if I can filer directly from supabase with all those filters - in an API file
    // and just handle like 0-100 here
    const { bedrooms, location, price } = filterData;

    if (
      bedrooms === "No-Bedroom" &&
      location === "No-Location" &&
      price === "No-Price"
    ) {
      setRentalsData(rentals);
      return;
    }

    const filteredRentals = rentals.filter((rental) => {
      return (
        rental.bedrooms === bedrooms ||
        rental.state === location ||
        rental.price === price
      );
    });
    setRentalsData(filteredRentals);
  };

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

    new mapboxgl.Marker().setLngLat([-90.791303, 40.267571]).addTo(map);
  }, []);

  return (
    <>
      <div className="mb-12 mt-12">
        <Header
          subtext="Choose from the most advantageous offers"
          title="Search for a Rental"
        />
        <RentalFilter
          states={sortedStates}
          bedrooms={sortedBedrooms}
          onUpdateFilter={filterUpdateHandler}
        />
        {/*  */}
        <div className="h-96 w-full" ref={mapContainer}></div>
        {/*  */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 lsm:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-12 m-12 mb-24 mt-12">
          {rentalsData.map((rental) => {
            return (
              <RentalsCard
                key={rental.uid}
                description={rental.description}
                address={rental.address}
                uid={rental.uid}
                price={rental.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await supabase.from("real_estate").select();

  return {
    props: {
      rentals: data,
    },
  };
};

export default AllRentalsPage;
