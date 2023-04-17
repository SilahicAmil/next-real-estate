import Header from "@/components/UI/Header";
import LandlordCard from "@/components/RentalsDetails/LandlordCard";
import PhotoCarousel from "@/components/RentalsDetails/PhotoCarousel";
import RentalDateRange from "@/components/RentalsDetails/RentalDateRange";
import RentalDescription from "@/components/RentalsDetails/RentalDescription";
import RentalInformation from "@/components/RentalsDetails/RentalInformation";
import { supabase } from "@/lib/supabase";

const RentalsDetailsPage = ({ rental }) => {
  const submitCheckoutToServerHandler = async (quantity) => {
    console.log(quantity);
    // create object of data here
    console.log(rental.price);
    const productData = {
      name: rental.address,
      price: rental.price * quantity,
      description: rental.description,
      amount: quantity,
    };

    const response = await fetch("/api/checkout-session", {
      method: "POST",
      body: JSON.stringify(productData),
    });
    const result = await response.json();

    console.log(result);
  };

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
      <div className="lg:flex justify-center gap-24 mb-12 mt-12 h-full shadow-inner pt-12">
        <RentalDescription longDescription={rental.longDescription} />
        <RentalDateRange onCheckoutSubmit={submitCheckoutToServerHandler} />
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
