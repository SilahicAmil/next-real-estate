import { supabase } from "@/lib/supabase";

const AllRentalsPage = ({ rentals }) => {
  return (
    <>
      <div>
        <h1>All Rentals Page</h1>
        {rentals.map((item) => {
          return <h1 key={item.uid}>{item.time_zone}</h1>;
        })}
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
