import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import AddHoursModal from "./AddHoursModal";
import logo from "../../assets/dashboardLogo.png";
import calender from "../../assets/calender.png";
import dashboard from "../../assets/dashboard.png";
import dashboardActive from "../../assets/dashboard-active.png";
import properties from "../../assets/properties.png";
import workers from "../../assets/workers.png";
import profile from "../../assets/userProfile.png";
import settings from "../../assets/settings.png";

const DashboardSidebar = ({ setOffcanvas, offcanvas }) => {
  let location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        offcanvas ? "fixed lg:relative z-50" : "hidden lg:block"
      } h-full`}
    >
      <div className="bg-indigo-950 text-sm font-medium text-white h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <Link className="px-6 py-5 block" to="/">
              <img src={logo} alt="" />
            </Link>
            <button
              onClick={() => setOffcanvas(false)}
              className="lg:hidden text-white text-2xl font-bold p-2"
            >
              {" "}
              <RxCross2 />
            </button>
          </div>
          {/* <div className="m-6">
            <button
              style={{ borderRadius: "9999px" }}
              className="icon flex items-center gap-[10px] px-4 py-3  w-full "
              onClick={() => setOpen(true)}
            >
              <FaPlus />
              Add Hours
            </button>
          </div>
          <p className="text-indigo-200 text-xs font-bold pl-6 mb-6">
            Dashboard
          </p> */}
          <Link
            to="/dashboard/calender"
            className={`${
              location.pathname === "/dashboard/calender" &&
              "text-indigo-400 bg-[#14112E] border-l-[5px] border-indigo-400"
            } px-6 py-4 flex items-center gap-3 `}
          >
            <img src={calender} alt="" />
            Facebook Post
          </Link>
          {/* <Link
            to="/dashboard/calender"
            className={`${
              location.pathname === "/dashboard/calender" &&
              "text-indigo-400 bg-[#14112E] border-l-[5px] border-indigo-400"
            } px-6 py-4 flex items-center gap-3 `}
          >
            <img src={calender} alt="" />
            Calendar Overview
          </Link> */}
          {/* <Link
            to="/dashboard/yearly"
            className={`${
              location.pathname === "/dashboard/yearly" &&
              "text-indigo-400 bg-[#14112E] border-l-[5px]  border-indigo-400"
            } px-6 py-4 flex items-center gap-3  mb-6 `}
          >
            <img
              src={
                location.pathname === "/dashboard/yearly"
                  ? dashboardActive
                  : dashboard
              }
              alt=""
            />
            Yearly Dashboard
          </Link>
          <p className="text-indigo-200 text-xs font-bold pl-6 mb-6">Manage</p>
          <Link
            to="/dashboard/calender"
            className={`${
              location.pathname === "/" && "text-indigo-400"
            } px-6 py-4 flex items-center gap-3 `}
          >
            <img src={properties} alt="" />
            Properties
          </Link>
          <Link
            to="/dashboard/calender"
            className={`${
              location.pathname === "/" && "text-indigo-400"
            } px-6 py-4 flex items-center gap-3 `}
          >
            <img src={workers} alt="" />
            Co Workers
          </Link> */}
        </div>
        <div>
          <p className="text-indigo-200 text-xs font-bold pl-6 mb-6">User</p>
          <Link
            to="/dashboard/calender"
            className={`${
              location.pathname === "/" && "text-indigo-400"
            } px-6 py-4 flex items-center gap-3 `}
          >
            <img src={profile} alt="" />
            Profile
          </Link>
          <Link
            to="/dashboard/calender"
            className={`${
              location.pathname === "/" && "text-indigo-400"
            } px-6 py-4 flex items-center gap-3 `}
          >
            <img src={settings} alt="" />
            Settings
          </Link>
        </div>
        {open && <AddHoursModal open={open} setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default DashboardSidebar;
