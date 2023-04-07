import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

const RentalsDetailsPage = ({ rental }) => {
  const router = useRouter();

  const uid = router.query.uid;

  return (
    <>
      <div>
        <h1>Rentals Details Page</h1>
        <p>{uid}</p>
        <p>
          {rental.map((rent) => {
            return rent.landlord_name;
          })}
        </p>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { uid } = context.query;

  const { data, error } = await supabase
    .from("real_estate")
    .select()
    .eq("uid", `${uid}`);

  return {
    props: {
      rental: data,
    },
  };
};

export default RentalsDetailsPage;
