const RentalFilter = ({ locations }) => {
  // Filer based off bedrooms, price and location dropdown
  return (
    <>
      <div className="bg-[#F3F3FA] h-full w-full">
        <div className="w-full flex justify-center items-center ">
          <form className="flex flex-col gap-12 h-full mb-12 mt-12 justify-center">
            <h1 className="flex items-center justify-center text-sm text-gray-500">
              Filter Settings
            </h1>
            <div className="w-full  bg-red-500 border"></div>
            <div className="lg:flex gap-12 h-full">
              <div>
                <select
                  id="Bedrooms"
                  className="bg-red-500 p-2 rounded-md w-64 text-center h-full mb-2"
                >
                  <option value="Default-Bedroom">Number of Bedrooms</option>
                  <option value="1">1 Bedroom(s)</option>
                  <option value="2">2 Bedroom(s)</option>
                  <option value="3+">3+ Bedroom(s)</option>
                </select>
              </div>
              <div className="">
                <select
                  id="Price"
                  className="bg-red-500 p-2 w-64 rounded-md text-center h-full mb-2"
                >
                  <option value="Default-Price">Select Price Range</option>
                  {/* set first option to min price  */}
                  <option value="1">$0-1k</option>
                  {/* figure out how to do the middle */}
                  <option value="2">$1k-5k</option>
                  {/* set last option to max price */}
                  <option value="3+">$5k+</option>
                </select>
              </div>
              <div className=" ">
                <select
                  id="Locations"
                  className="bg-red-500 p-2 w-64 rounded-md text-center h-full mb-2"
                >
                  <option value="Default-Location">Select Location</option>
                  {/* Map over locations here instead of timezone */}
                  {locations.map((location) => {
                    return (
                      <option key={location.uid} value={location.name}>
                        {location.time_zone}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="bg-blue-500 rounded-md hover:rounded-lg hover:duration-200 justify-center items-center flex">
                <button className="w-32 h-full p-2">Filter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RentalFilter;
