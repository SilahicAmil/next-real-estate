const RentalFilter = ({ locations }) => {
  // Filer based off bedrooms, price and location dropdown
  return (
    <>
      <div className="">
        <div className="w-full flex justify-center">
          <form className="flex gap-12 ">
            <div>
              <select
                id="Bedrooms"
                className="bg-red-500 p-2 rounded-sm w-64 text-center"
              >
                <option value="Default-Bedroom">Number of Bedrooms</option>
                <option value="1">1 Bedroom(s)</option>
                <option value="2">2 Bedroom(s)</option>
                <option value="3+">3+ Bedroom(s)</option>
              </select>
            </div>
            <div>
              <select
                id="Price"
                className="bg-red-500 p-2 w-64 rounded-sm text-center"
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
            <div>
              <select
                id="Locations"
                className="bg-red-500 p-2 w-64 rounded-sm text-center"
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

            <button className="w-32 bg-blue-500">Filter</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RentalFilter;
