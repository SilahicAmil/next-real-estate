import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";

const RentalDateRange = ({}) => {
  const [dates, setDates] = useState([new Date(), new Date()]);

  //   Add stripe submit handler here
  //   and all related logic - need to probably useCOntext for this to make it easier
  //   Below is the logic for how to calculate the days - so just price*days and send to STRIPE API

  console.log(Math.floor(Math.abs(dates[0] - dates[1]) / 86400000));

  return (
    <>
      <div className="lg:h-64 lg:w-1/3 h-32 w-full p-2">
        <DateRangePicker
          className="h-full w-full bg-red-200"
          onChange={setDates}
          value={dates}
        />
        <button>Checkout</button>
      </div>
    </>
  );
};

export default RentalDateRange;
