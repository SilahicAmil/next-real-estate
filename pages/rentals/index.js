import AllRentalsHeader from "@/components/AllRentals/AllRentalsHeader";
import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  return (
    <>
      <div className="mb-12 mt-12">
        <AllRentalsHeader rentals={rentals} />
        {rentals.map((item) => {
          return (
            <h1 key={item.uid}>
              {item.bedrooms}-{item.bathrooms}-{item.price}-{item.sqft}
            </h1>
          );
        })}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data, error } = await supabase.from("real_data").select();

  return {
    props: {
      rentals: data,
    },
  };
};

export default AllRentalsPage;
