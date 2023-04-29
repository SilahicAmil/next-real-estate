import Head from "next/head";
import Header from "@/components/UI/Header";
import RentalFilter from "@/components/AllRentals/RentalFilter";
import RentalsCard from "@/components/AllRentals/RentalsCard";
import RentalsMap from "@/components/AllRentals/RentalsMap";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

const AllRentalsPage = ({ rentals }) => {
  const [rentalsData, setRentalsData] = useState(rentals);

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

  return (
    <>
      <Head>
        <title>Real Estate - Rentals</title>
        <meta
          property="og:title"
          content="View all 100+ rentals we offer. Filter to the exact needs you have, to best enjoy your next rental. Over 50+ new rentals added each day!"
          key="title"
        />
      </Head>
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
        <div className="lg:w-full lg:flex">
          <RentalsMap />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lsm:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-2 mt-12 lg:w-full m-4 h-full">
            {/* pagination needed for this */}
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
