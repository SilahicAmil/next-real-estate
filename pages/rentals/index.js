import AllRentalsHeader from "@/components/AllRentals/AllRentalsHeader";
import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  return (
    <>
      <div>
        <AllRentalsHeader />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data, error } = await supabase.from("addresses").select();

  return {
    props: {
      rentals: data,
    },
  };
};

export default AllRentalsPage;
