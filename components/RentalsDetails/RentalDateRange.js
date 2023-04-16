import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";

const RentalDateRange = ({}) => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  return (
    <>
      <div className="h-64 w-96">
        <DateRangePicker
          className="h-full w-full bg-red-500"
          onChange={setDates}
          value={dates}
        />
      </div>
    </>
  );
};

export default RentalDateRange;
