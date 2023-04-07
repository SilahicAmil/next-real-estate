import AllRentalsHeader from "@/components/AllRentals/AllRentalsHeader";
import RentalFilter from "@/components/AllRentals/RentalFilter";
import RentalsCard from "@/components/AllRentals/RentalsCard";
import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  // maybe make a util function to remove duplicates and sort

  const removedDuplicateBedrooms = rentals.filter(
    // self is the array of the current element that is being filtered
    (val, index, self) =>
      index === self.findIndex((t) => t.bedrooms === val.bedrooms)
  );

  const sortedBedrooms = removedDuplicateBedrooms.sort((a, b) => {
    return a.bedrooms > b.bedrooms
      ? 1
      : -1 || a.bedrooms < b.bedrooms
      ? -1
      : 1 || 0;
  });

  const removedDuplicateStates = rentals.filter(
    // self is the array of the current element that is being filtered
    (val, index, self) => index === self.findIndex((t) => t.state === val.state)
  );

  const alphabetizedStates = removedDuplicateStates.sort((a, b) => {
    return a.state > b.state ? 1 : -1 || a.state < b.state ? -1 : 1 || 0;
  });

  return (
    <>
      <div className="mb-12 mt-12">
        <AllRentalsHeader rentals={rentals} />
        <RentalFilter states={alphabetizedStates} bedrooms={sortedBedrooms} />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 lsm:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-12 m-8 mb-24 mt-12">
          {rentals.map((rental) => {
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
  const { data, error } = await supabase.from("real_estate").select();

  return {
    props: {
      rentals: data,
    },
  };
};

export default AllRentalsPage;
