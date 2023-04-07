import AllRentalsHeader from "@/components/AllRentals/AllRentalsHeader";
import RentalFilter from "@/components/AllRentals/RentalFilter";
import RentalsCard from "@/components/AllRentals/RentalsCard";
import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  const removedDuplicateStates = rentals.filter(
    (val, index, self) => index === self.findIndex((t) => t.state === val.state)
  );

  const alphabetizeStates = removedDuplicateStates.sort((a, b) => {
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
        <RentalFilter rentals={alphabetizeStates} />
        <RentalsCard
          description={rentals[5].description}
          address={rentals[5].address}
          uid={rentals[5].uid}
        />
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
