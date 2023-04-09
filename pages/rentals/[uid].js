import Header from "@/components/UI/Header";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

const RentalsDetailsPage = ({ rental }) => {
  const router = useRouter();

  const uid = router.query.uid;

  return (
    <>
      <div className="mt-12 mb-12">
        <Header subtext={rental.description} title={rental.address} />
        <p>{uid}</p>
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

  if (error) {
    console.log(error);
  }

  return {
    props: {
      rental: data[0],
    },
  };
};

export default RentalsDetailsPage;
