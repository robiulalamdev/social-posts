import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import GlobalContext from "../../context/GlobalContext";
import CountDown from "./CountDown";

export default function Day({ day, setOpen }) {
  const [dayEvents, setDayEvents] = useState([]);

  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-primary text-white rounded-full w-6 h-6 text-xs font-normal flex items-center justify-center"
      : "text-xs font-normal text-slate-950";
  }

  const handleOpen = (e, idx, evt) => {
    e.stopPropagation();

    setOpen(true);

    setSelectedEvent(evt);
  };

  return (
    <div className="border-r border-t border-gray-200 flex gap-2 flex-row lg:flex-col p-0 lg:p-2 min-h-16 h-auto lg:h-[138px]">
      <header
        onClick={() => setShowEventModal(true)}
        className="w-16 lg:w-auto border-r lg:border-none flex flex-col items-center justify-center"
      >
        <p className="lg:hidden text-sm ">{day.format("ddd").toUpperCase()}</p>

        <p
          className={`text-sm text-slate-950 font-normal text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer w-full p-2 lg:p-0"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
          setOpen(false);
        }}
      >
        <div className="">
          <div className="flex flex-col gap-1 h-[90px] overflow-y-scroll no-scrollbar">
            {dayEvents?.map((evt, idx) =>
              dayEvents.length === 1 ? (
                <div
                  key={idx}
                  style={{
                    borderLeft: `3px solid ${
                      evt.category === "Analysis"
                        ? "#F59E0B"
                        : evt.category === "Consultation"
                        ? "#6366F1"
                        : evt.category === "Repairs"
                        ? "#10B981"
                        : "#3B82F6"
                    }`,
                  }}
                  onClick={(e) => {
                    setSelectedEvent(evt);
                    handleOpen(e, idx, evt);
                    setDaySelected(day);
                  }}
                  className={`text-center min-h-[43px] h-full ${
                    evt.category === "Analysis"
                      ? "bg-[#FEF3C7]"
                      : evt.category === "Consultation"
                      ? "bg-[#E0E7FF]"
                      : evt.category === "Repairs"
                      ? "bg-[#D1FAE5]"
                      : "bg-[#DBEAFE]"
                  } 
                  
                   w-full py-3 px-6 text-gray-600 text-sm rounded-4px overflow-hidden truncate rounded`}
                >
                  <CountDown evt={evt} />

                  <p className={` text-sm font-bold text-slate-950 mb-1`}>
                    {evt.category}
                  </p>

                  <p
                    className={`
                     "text-slate-950"
                     text-sm font-bold  mb-1`}
                  >
                    9 Hours
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    borderLeft: `3px solid ${
                      evt.category === "Analysis"
                        ? "#F59E0B"
                        : evt.category === "Consultation"
                        ? "#6366F1"
                        : evt.category === "Repairs"
                        ? "#10B981"
                        : "#3B82F6"
                    }`,
                  }}
                  key={idx}
                  onClick={(e) => {
                    setSelectedEvent(evt);
                    handleOpen(e, idx, evt);
                    setDaySelected(day);
                  }}
                  className={`flex items-center justify-between   min-h-[43px]  h-full ${
                    evt.category === "Analysis"
                      ? "bg-[#FEF3C7]"
                      : evt.category === "Consultation"
                      ? "bg-[#E0E7FF]"
                      : evt.category === "Repairs"
                      ? "bg-[#D1FAE5]"
                      : "bg-[#DBEAFE]"
                  }  w-full py-3 px-[6px]  text-gray-600 text-sm rounded-[4px] overflow-hidden truncate`}
                >
                  <div>
                    <p className="text-xs font-bold text-slate-950">
                      {evt.category}
                    </p>
                    <p
                      className={` "text-slate-950"
                      text-sm font-bold `}
                    >
                      9 Hours
                    </p>
                  </div>
                  <CountDown evt={evt} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
