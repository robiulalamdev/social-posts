import React from "react";
import Day from "./Day";

export default function Month({ month, setOpen, eventData, setEventData }) {
  return (
    <div className="border rounded-xl">
      <div className="hidden flex-1 lg:grid grid-cols-1 lg:grid-cols-7 text-center ">
        <p className="  border-r py-2">Sun</p>
        <p className="py-2  border-r ">Mon</p>
        <p className="py-2  border-r ">Tue</p>
        <p className="py-2  border-r ">Wed</p>
        <p className="py-2  border-r ">Thu</p>
        <p className="py-2  border-r ">Fri</p>
        <p className="py-2  border-r ">Sat</p>
      </div>
      <div className="flex-1 grid lg:grid-cols-7 grid-rows-5">
        {month.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Day
                day={day}
                key={idx}
                rowIdx={i}
                setOpen={setOpen}
                eventData={eventData}
                setEventData={setEventData}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
