import AllRentalsHeader from "@/components/AllRentals/AllRentalsHeader";
import RentalsCard from "@/components/AllRentals/RentalsCard";
import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  return (
    <>
      <div className="mb-12 mt-12">
        <AllRentalsHeader rentals={rentals} />
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
