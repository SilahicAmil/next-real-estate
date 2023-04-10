import Header from "@/components/UI/Header";
import LandlordCard from "@/components/RentalsDetails/LandlordCard";
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
        <LandlordCard
          name={rental.landlord_name}
          email={rental.landlord_email}
          phone={rental.landlord_phone}
        />
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
