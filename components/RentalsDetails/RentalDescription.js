const RentalDescription = ({ longDescription }) => {
  return (
    <>
      <div className="lg:w-1/3 mb-4">
        <h1 className="text-2xl mb-4 tracking-wider">Description</h1>
        <p className="tracking-widest text-md font-sans">{longDescription}</p>
      </div>
    </>
  );
};

export default RentalDescription;
