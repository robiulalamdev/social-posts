import { useContext, useEffect, useState } from "react";
import CalendarHeader from "../Components/Calender/CalendarHeader";
import Month from "../Components/Calender/Month";
import EventModal from "../Components/Calender/EventModal";
import { getMonth } from "../Utils/DayMatrix";
import GlobalContext from "../context/GlobalContext";
import Sidebar from "../Components/Calender/Sidebar";
import Successfull from "../Components/Calender/Successfull";

const Calender = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState(false);

  const [successfullOpen, setSuccessfullOpen] = useState(false);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && (
        <EventModal
          setSuccessfullOpen={setSuccessfullOpen}
          setEventData={setEventData}
        />
      )}
      {successfullOpen && (
        <Successfull setSuccessfullOpen={setSuccessfullOpen} />
      )}

      <div className="flex w-full">
        <div className="px-8 pt-8 w-full ">
          <CalendarHeader />
          <Month
            month={currenMonth}
            setOpen={setOpen}
            eventData={eventData}
            setEventData={setEventData}
          />
        </div>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Calender;
