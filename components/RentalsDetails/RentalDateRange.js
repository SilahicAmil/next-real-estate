import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";

const RentalDateRange = ({ onCheckoutSubmit }) => {
  const [dates, setDates] = useState([new Date(), new Date()]);

  const calcDates = Math.floor(Math.abs(dates[0] - dates[1]) / 86400000);

  const checkoutFormSubmitHandler = (e) => {
    e.preventDefault();
    let quantity = 0;
    // might change this to a if else statement to make it more readable
    calcDates === 0 ? (quantity = 1) : (quantity = calcDates);

    onCheckoutSubmit(quantity);
  };

  return (
    <>
      <div className="lg:h-64 lg:w-1/3 h-32 w-full p-2">
        <DateRangePicker
          className="h-full w-full bg-red-200"
          onChange={setDates}
          value={dates}
        />

        <form onSubmit={checkoutFormSubmitHandler}>
          <section>
            <button type="submit">Checkout</button>
          </section>
        </form>
      </div>
    </>
  );
};

export default RentalDateRange;
