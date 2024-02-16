import { useLocation } from "react-router";
import Header from "./Header";
import "../Styles/Auth.css";

const Auth = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative">
      <div className="absolute w-full top-7 lg:top-16 z-10">
        <Header />
      </div>

      <div className={location.pathname === "/" ? "auth_home_layout" : "auth_layout"}>
        <div className="container mx-auto">
          <div className="px-5 lg:px-0 lg:max-w-[1536px] w-full bg-white rounded-3xl">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
