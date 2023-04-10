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
      <div className="lg:flex justify-center gap-24 mb-12 mt-12 h-full shadow-inner pt-12">
        <PhotoCarousel />
        <div className="lg:w-1/4 flex-col flex items-center bg-red-500 rounded-md sm:mt-12 lg:mt-0">
          <h1>{rental.landlord_name}</h1>
          <h1>{rental.landlord_email}</h1>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { uid } = context.query;

  const { data } = await supabase
    .from("real_estate")
    .select()
    .eq("uid", `${uid}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      rental: data[0],
    },
  };
};

export default RentalsDetailsPage;
