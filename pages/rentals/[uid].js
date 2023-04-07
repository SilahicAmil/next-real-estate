import { useRouter } from "next/router";

const RentalsDetailsPage = ({}) => {
  const router = useRouter();

  const uid = router.query.uid;

  return (
    <>
      <div>
        <h1>Rentals Details Page</h1>
        {uid}
      </div>
    </>
  );
};

export default RentalsDetailsPage;
