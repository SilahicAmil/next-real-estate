import { AiOutlineFilter } from "react-icons/ai";

const RentalFilter = ({ states, bedrooms, onUpdateFilter }) => {
  const filterFormSubmitHandler = (e) => {
    e.preventDefault();

    // onUpdateFilter goes here to update state for rentals card in /rentals
    onUpdateFilter({
      bedrooms: e.target.Bedrooms.value,
      location: e.target.Locations.value,
      price: e.target.Price.value,
    });
  };

  return (
    <>
      <section className="bg-[#F3F3FA] h-full w-full font-sans">
        <div className="w-full flex justify-center items-center">
          <form
            className="flex flex-col gap-12 h-full mb-12 mt-12 justify-center"
            onSubmit={filterFormSubmitHandler}
          >
            <h1 className="flex items-center justify-center text-sm text-gray-500 tracking-wider">
              Filter Settings
            </h1>
            <div className="w-full bg-white border" />
            <div className="lg:flex gap-12 h-full">
              <div>
                <select
                  id="Bedrooms"
                  className="bg-white p-2 rounded-md w-64 text-center h-full mb-2 tracking-wider text-lg"
                >
                  <option value="No-Bedroom">Number of Bedrooms</option>
                  {bedrooms.map((bedroom) => {
                    return (
                      <option key={bedroom.bedrooms} value={bedroom.bedroms}>
                        {bedroom.bedrooms}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <select
                  id="Price"
                  className="bg-white p-2 w-64 rounded-md text-center h-full mb-2 tracking-wider text-lg"
                >
                  <option value="No-Price">Select Price Range</option>
                  <option value="0-100">$0-100</option>
                  <option value="100-500">$100-500</option>
                  <option value="500+">$500+</option>
                </select>
              </div>
              <div>
                <select
                  id="Locations"
                  className="bg-white p-2 w-64 rounded-md text-center h-full mb-2 tracking-wider text-lg"
                >
                  <option value="No-Location">Select Location</option>
                  {states.map((location) => {
                    return (
                      <option key={location.uid} value={location.state}>
                        {location.state}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="bg-[#1C3988]  rounded-md hover:rounded-lg hover:duration-200 justify-center items-center flex">
                <button
                  className="w-32 h-full p-2  text-white flex items-center justify-center gap-4 "
                  type="submit"
                >
                  <AiOutlineFilter className="text-lg" />
                  <span className="tracking-wider text-lg">Filter</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default RentalFilter;
