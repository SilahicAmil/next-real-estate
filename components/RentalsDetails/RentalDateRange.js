import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";

const RentalDateRange = ({ onCheckoutSubmit }) => {
  const [dates, setDates] = useState([new Date(), new Date()]);

  //   Add stripe submit handler here
  const checkoutFormSubmitHandler = (e) => {
    e.preventDefault();

    // quantity will be  the console log below
    // everything else will be handled in other page

    onCheckoutSubmit(Math.floor(Math.abs(dates[0] - dates[1]) / 86400000));
  };
  //   and all related logic - need to probably useCOntext for this to make it easier

  console.log(Math.floor(Math.abs(dates[0] - dates[1]) / 86400000));

  return (
    <>
      <div className="lg:h-64 lg:w-1/3 h-32 w-full p-2">
        <DateRangePicker
          className="h-full w-full bg-red-200"
          onChange={setDates}
          value={dates}
        />

        <button onClick={checkoutFormSubmitHandler}>Checkout</button>
      </div>
    </>
  );
};

export default RentalDateRange;
