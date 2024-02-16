import  { useEffect, useState } from "react";
import lock from "../../assets/lock.png";

function CountDown({ evt }) {
  const [timeElapsed, setTimeElapsed] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const startDateTime = new Date(`${evt.date} UTC`);

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
  }, [evt.startTime]);

  return (
    <div className="flex justify-center">
      {timeElapsed.hours > 48 ? (
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
      ) : timeElapsed.hours < 0 ? (
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
          Not Started
        </button>
      ) : (
        <button className="text-white text-xs font-normal flex gap-[2px] rounded-full items-center bg-red-500 mb-1 py-[2px] px-2">
          <img src={lock} alt="" />
          {timeElapsed.hours}h {timeElapsed.minutes}m
        </button>
      )}
    </div>
  );
}

export default CountDown;
