import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";
import download from "../../assets/download.png";
import user from "../../assets/user.png";
import back from "../../assets/back.png";

const ActivityDetails = ({ setOpen }) => {
  const { setShowEventModal, selectedEvent, dispatchCalEvent } =
    useContext(GlobalContext);

  const [timeElapsed, setTimeElapsed] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const startDateTime = new Date(`${selectedEvent.date} UTC`);

    const calculateTimeElapsed = () => {
      const currentDateTime = new Date();

      const timeDifference = currentDateTime - startDateTime;

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeElapsed({ hours, minutes });
    };

    const intervalId = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(intervalId);
  }, [selectedEvent.startTime]);

  const [spendHour, setSpendHour] = useState(0);
  const [eventDetails, setEventDetails] = useState(null);

  const removeHandler = () => {
    dispatchCalEvent({ type: "delete", payload: selectedEvent });
    setOpen(false);
  };

  useEffect(() => {
    setEventDetails(selectedEvent);

    const calculateTimeDifference = () => {
      const startTimeParts = selectedEvent.startTime.match(
        /(\d+):(\d+) ([APMapm]{2})/
      );
      const startTime = new Date();
      startTime.setHours(
        parseInt(startTimeParts[1]),
        parseInt(startTimeParts[2]),
        startTimeParts[3].toUpperCase() === "PM" ? 12 : 0
      );

      let endTime;
      if (selectedEvent.endTime !== "Invalid Date") {
        const endTimeParts = selectedEvent?.endTime.match(
          /(\d+):(\d+) ([APMapm]{2})/
        );
        endTime = new Date();
        endTime.setHours(
          parseInt(endTimeParts[1]),
          parseInt(endTimeParts[2]),
          endTimeParts[3].toUpperCase() === "PM" ? 12 : 0
        );
      } else {
        endTime = new Date();
      }

      const timeDifference = endTime - startTime;

      const hours = Math.floor(timeDifference / (60 * 60 * 1000));
      setSpendHour(hours);
    };

    calculateTimeDifference();
  }, [selectedEvent, eventDetails]);

  return (
    <>
      <div className=" px-6 py-4 flex items-center gap-3 border-b border-slate-200 ">
        <button className="cursor-pointer" onClick={() => setOpen(false)}>
          <img src={back} alt="" />
        </button>
        <p className="text-[#161736] text-lg font-semibold  ">
          Activity Details
        </p>
      </div>
      <div className="p-6">
        <div className="icon h-[120px] w-[120px]  flex flex-col mx-auto mb-6">
          <p className="text-4xl font-bold mb-1">{spendHour}</p>
          <p className="text-xs font-medium">Hours Spent</p>
        </div>
        <div className="flex justify-between gap-16 items-center mb-6">
          <div className="flex flex-col gap-4 text-slate-500 text-sm font-medium">
            <p className="text-slate-950 text-sm font-semibold">Information</p>
            <p>Category</p>
            <p>Subcategory</p>
            <p>Date</p>
            <p>Start Time</p>
            <p>
              {eventDetails?.endTime === "Invalid Date"
                ? "In Progress!"
                : "End Time"}
            </p>
            <p>Status</p>
          </div>
          <div className="flex flex-col gap-4 items-end text-slate-950 text-sm font-normal">
            <button className="bg-slate-950 flex items-center  gap-[2px] px-2 py-[2px] text-xs font-normal text-white rounded-full">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M9.75 3.75H8.25V2.625C8.25 2.02826 8.01295 1.45597 7.59099 1.03401C7.16903 0.612053 6.59674 0.375 6 0.375C5.40326 0.375 4.83097 0.612053 4.40901 1.03401C3.98705 1.45597 3.75 2.02826 3.75 2.625V3.75H2.25C2.05109 3.75 1.86032 3.82902 1.71967 3.96967C1.57902 4.11032 1.5 4.30109 1.5 4.5V9.75C1.5 9.94891 1.57902 10.1397 1.71967 10.2803C1.86032 10.421 2.05109 10.5 2.25 10.5H9.75C9.94891 10.5 10.1397 10.421 10.2803 10.2803C10.421 10.1397 10.5 9.94891 10.5 9.75V4.5C10.5 4.30109 10.421 4.11032 10.2803 3.96967C10.1397 3.82902 9.94891 3.75 9.75 3.75ZM4.5 2.625C4.5 2.22718 4.65804 1.84564 4.93934 1.56434C5.22064 1.28304 5.60218 1.125 6 1.125C6.39782 1.125 6.77936 1.28304 7.06066 1.56434C7.34196 1.84564 7.5 2.22718 7.5 2.625V3.75H4.5V2.625Z"
                    fill="white"
                  />
                </svg>
              </span>{" "}
              Locked
            </button>
            <p className="flex items-center gap-2">
              <span className="bg-emerald-500 w-3 h-3 rounded-full block"></span>
              {eventDetails?.category}
            </p>
            <p> {eventDetails?.subcategory}</p>
            <p> {eventDetails?.date}</p>
            <p> {eventDetails?.startTime}</p>
            <p>
              {" "}
              {eventDetails?.endTime === "Invalid Date"
                ? "--"
                : eventDetails?.endTime}
            </p>
            <button className="bg-emerald-50 px-2 py-[2px] rounded-full text-emerald-500 text-xs font-medium">
              Completed
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-950 mb-4">
            Attachments
          </p>
          <div className="mb-6 flex flex-col gap-4">
            {eventDetails?.files &&
              eventDetails?.files.map((pic, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl p-4 flex items-center gap-3 justify-between"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={pic?.name ? URL?.createObjectURL(pic) : ""}
                      alt=""
                    />
                    <div>
                      <p className="text-[#323539] text-sm font-medium">
                        {pic?.name}
                      </p>
                      <p className="text-[#858C95] text-xs font-normal">
                        {(pic?.size / 1024).toFixed(2)} kb
                      </p>
                    </div>
                  </div>
                  <button>
                    <a
                      href={pic?.name ? URL?.createObjectURL(pic) : ""}
                      download
                    >
                      <img src={download} alt="" />
                    </a>
                  </button>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-4">
            <OutLineBtn onClick={removeHandler}>Delete</OutLineBtn>
            {timeElapsed.hours > 48 ? (
              <div className="w-full">
                <PrimaryBtn>Expired</PrimaryBtn>
              </div>
            ) : (
              <div
                className="w-full"
                onClick={() => {
                  setShowEventModal(true), setOpen(false);
                }}
              >
                <PrimaryBtn>Edit</PrimaryBtn>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="icon h-16 w-16 fixed bottom-6 right-6">
        <img src={user} alt="" />
      </button>
    </>
  );
};

export default ActivityDetails;
