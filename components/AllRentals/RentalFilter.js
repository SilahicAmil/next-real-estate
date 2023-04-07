import { AiOutlineFilter } from "react-icons/ai";

const RentalFilter = ({ states, bedrooms }) => {
  const filterFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
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
                  <option value="Default-Bedroom">Number of Bedrooms</option>
                  {bedrooms.map((bedroom) => {
                    return (
                      <option key={bedroom.bedrooms} value={bedroom.bedroms}>
                        {bedroom.bedrooms}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="">
                <select
                  id="Price"
                  className="bg-white p-2 w-64 rounded-md text-center h-full mb-2 tracking-wider text-lg"
                >
                  <option value="Default-Price">Select Price Range</option>
                  <option value="1">$0-1k</option>
                  <option value="2">$1k-5k</option>
                  <option value="3+">$5k+</option>
                </select>
              </div>
              <div className=" ">
                <select
                  id="Locations"
                  className="bg-white p-2 w-64 rounded-md text-center h-full mb-2 tracking-wider text-lg"
                >
                  <option value="Default-Location">Select Location</option>
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
