import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useState } from "react";

const RentalDateRange = ({}) => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  return (
    <>
      <div className="lg:h-64 lg:w-1/3 h-32 w-full p-2">
        <DateRangePicker
          className="h-full w-full bg-red-200"
          onChange={setDates}
          value={dates}
        />
      </div>
    </>
  );
};

export default RentalDateRange;
