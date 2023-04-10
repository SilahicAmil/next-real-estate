import Header from "@/components/UI/Header";
import PhotoCarousel from "@/components/RentalsDetails/PhotoCarousel";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

const RentalsDetailsPage = ({ rental }) => {
  const router = useRouter();

  const uid = router.query.uid;

  return (
    <>
      <div className="mt-12 mb-12">
        <Header subtext={rental.description} title={rental.address} />
      </div>
      <div className="lg:flex flex-1  justify-around mb-12 mt-12">
        <PhotoCarousel />
        <div className="w-1/4 flex justify-center bg-red-500">
          <h1>{rental.landlord_email}</h1>
        </div>
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
