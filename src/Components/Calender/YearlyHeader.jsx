import { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import dayjs from "dayjs";
import filter from "../../assets/filter.png";
import SmallCalendar from "./SmallCalendar";

export default function YearlyHeader() {
  const [year, setYear] = useState(dayjs().year());
  const [isSmallCalendarActive, setIsSmallCalendarActive] = useState(false);

  function handlePrevYear() {
    setYear((prevYear) => prevYear - 1);
  }

  function handleNextYear() {
    setYear((prevYear) => prevYear + 1);
  }

  return (
    <header className="flex items-center w-full mx-auto mb-8 relative">
      <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-3">
        <div className="flex items-center gap-5">
          <button
            className="w-9 h-9 border border-slate-200 rounded-full flex justify-center items-center text-primary text-2xl"
            onClick={handlePrevYear}
          >
            <MdNavigateBefore />
          </button>

          <h2
            onClick={() => setIsSmallCalendarActive(!isSmallCalendarActive)}
            className="text-2xl lg:text-3xl text-slate-950 font-bold"
          >
            Year {year}
          </h2>

          <button
            className="w-9 h-9 border border-slate-200 rounded-full flex justify-center items-center text-primary text-2xl"
            onClick={handleNextYear}
          >
            <MdNavigateNext />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex gap-2 items-center text-xs font-bold border py-2 px-4 border-primary text-primary rounded-full">
            <img src={filter} alt="" />
            Filter
          </button>
          <button
            style={{ width: "unset", height: "unset", borderRadius: "9999px" }}
            className="icon py-2 px-4 gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.25 9.5V13C14.25 13.3315 14.1183 13.6495 13.8839 13.8839C13.6495 14.1183 13.3315 14.25 13 14.25H3C2.66848 14.25 2.35054 14.1183 2.11612 13.8839C1.8817 13.6495 1.75 13.3315 1.75 13V9.5C1.75 9.30109 1.82902 9.11032 1.96967 8.96967C2.11032 8.82902 2.30109 8.75 2.5 8.75C2.69891 8.75 2.88968 8.82902 3.03033 8.96967C3.17098 9.11032 3.25 9.30109 3.25 9.5V12.75H12.75V9.5C12.75 9.30109 12.829 9.11032 12.9697 8.96967C13.1103 8.82902 13.3011 8.75 13.5 8.75C13.6989 8.75 13.8897 8.82902 14.0303 8.96967C14.171 9.11032 14.25 9.30109 14.25 9.5ZM7.46938 10.0306C7.53905 10.1005 7.62185 10.156 7.71301 10.1939C7.80417 10.2317 7.90191 10.2512 8.00062 10.2512C8.09934 10.2512 8.19707 10.2317 8.28824 10.1939C8.3794 10.156 8.4622 10.1005 8.53187 10.0306L11.0319 7.53062C11.1728 7.38973 11.2519 7.19863 11.2519 6.99937C11.2519 6.80012 11.1728 6.60902 11.0319 6.46812C10.891 6.32723 10.6999 6.24807 10.5006 6.24807C10.3014 6.24807 10.1103 6.32723 9.96937 6.46812L8.75 7.6875V2.5C8.75 2.30109 8.67098 2.11032 8.53033 1.96967C8.38968 1.82902 8.19891 1.75 8 1.75C7.80109 1.75 7.61032 1.82902 7.46967 1.96967C7.32902 2.11032 7.25 2.30109 7.25 2.5V7.6875L6.03062 6.46938C5.88973 6.32848 5.69863 6.24932 5.49937 6.24932C5.30012 6.24932 5.10902 6.32848 4.96812 6.46938C4.82723 6.61027 4.74807 6.80137 4.74807 7.00063C4.74807 7.19988 4.82723 7.39098 4.96812 7.53188L7.46938 10.0306Z"
                fill="white"
              />
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      {isSmallCalendarActive && (
        <div className="absolute bg-white top-20 border p-4 rounded-lg">
          {" "}
          <SmallCalendar />{" "}
        </div>
      )}
    </header>
  );
}
