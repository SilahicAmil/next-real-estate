const RentalDescription = ({ longDescription }) => {
  return (
    <>
      <div className="w-1/3 h-full">
        <h1 className="text-4xl mb-4">Description</h1>
        <p className="tracking-wider">{longDescription}</p>
      </div>
    </>
  );
};

export default RentalDescription;
