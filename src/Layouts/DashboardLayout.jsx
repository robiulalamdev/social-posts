import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../Components/Calender/Header";
import DashboardSidebar from "../Components/Calender/DashboardSidebar";

const DashboardLayout = () => {
  const [offcanvas, setOffcanvas] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 h-screen">
      <DashboardSidebar offcanvas={offcanvas} setOffcanvas={setOffcanvas} />
      <div className="col-span-5 h-full overflow-y-scroll">
        <Header offcanvas={offcanvas} setOffcanvas={setOffcanvas} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
