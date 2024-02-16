import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomToTop from "../Components/BottomToTop/BottomToTop";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Outlet />
      {/* <Footer /> */}
      {/* <BottomToTop /> */}
    </div>
  );
};

export default MainLayout;
