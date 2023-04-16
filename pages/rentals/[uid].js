import Header from "@/components/UI/Header";
import LandlordCard from "@/components/RentalsDetails/LandlordCard";
import PhotoCarousel from "@/components/RentalsDetails/PhotoCarousel";
import RentalDescription from "@/components/RentalsDetails/RentalDescription";
import RentalInformation from "@/components/RentalsDetails/RentalInformation";
import { supabase } from "@/lib/supabase";

const RentalsDetailsPage = ({ rental }) => {
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
      <RentalInformation
        sqft={rental.sqft}
        location={rental.state}
        pricing={rental.price}
      />
      <div className="lg:flex justify-center gap-24 mb-24 mt-12 h-full shadow-inner pt-12">
        <RentalDescription longDescription={rental.longDescription} />
        <span>Calendar Date Picker Here</span>
      </div>
      <div className="shadow-inner h-32 flex">
        <h1>Location Map or Reviews</h1>
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
