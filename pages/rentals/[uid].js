import Header from "@/components/UI/Header";
import LandlordCard from "@/components/RentalsDetails/LandlordCard";
import { PHOTO_DATA } from "@/data/photo-data";
import PhotoCarousel from "@/components/RentalsDetails/PhotoCarousel";
import RentalDateRange from "@/components/RentalsDetails/RentalDateRange";
import RentalDescription from "@/components/RentalsDetails/RentalDescription";
import RentalInformation from "@/components/RentalsDetails/RentalInformation";
import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const RentalsDetailsPage = ({ rental }) => {
  const router = useRouter();
  const submitCheckoutToServerHandler = async (quantity) => {
    const productData = {
      name: rental.address,
      price: rental.price,
      description: rental.description,
      amount: quantity,
    };

    const response = await fetch("/api/checkout-session", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    router.replace(result.url);
  };

  return (
    <>
      <div className="mt-12 mb-12">
        <Header subtext={rental.description} title={rental.address} />
      </div>
      <div className="lg:flex justify-center gap-24 mb-12 mt-12 h-full shadow-inner pt-12">
        <PhotoCarousel imageData={PHOTO_DATA} />
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
      <div className="lg:flex justify-around h-full shadow-inner pt-12 pb-12">
        <RentalDescription longDescription={rental.longDescription} />
        <RentalDateRange onCheckoutSubmit={submitCheckoutToServerHandler} />
      </div>
      <div className="mt-12 mb-12 shadow-inner">
        <h1>Locations and Reviews</h1>
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
