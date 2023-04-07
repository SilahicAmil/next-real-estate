import AllRentalsHeader from "@/components/AllRentals/AllRentalsHeader";
import RentalFilter from "@/components/AllRentals/RentalFilter";
import RentalsCard from "@/components/AllRentals/RentalsCard";
import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  const removedDuplicateStates = rentals.filter(
    // self is the array of the current element that is being filtered
    (val, index, self) => index === self.findIndex((t) => t.state === val.state)
  );

  const alphabetizedStates = removedDuplicateStates.sort((a, b) => {
    // probably a better way to do this
    if (a.state < b.state) {
      return -1;
    }
    if (a.state > b.state) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div className="mb-12 mt-12">
        <AllRentalsHeader rentals={rentals} />
        <RentalFilter rentals={alphabetizedStates} />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 lsm:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-12 m-8 mb-24 mt-12">
          {rentals.map((rental) => {
            return (
              <RentalsCard
                key={rental.uid}
                description={rental.description}
                address={rental.address}
                uid={rental.uid}
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
