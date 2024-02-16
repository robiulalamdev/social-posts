import { Link } from "react-router-dom";
import location from "../../assets/location.png";
import arrow from "../../assets/downarrow.png";
import bell from "../../assets/bell.png";
import ques from "../../assets/ques.png";
import profile from "../../assets/profile.png";
import logo from "../../assets/favicon.png";
import hamburger from "../../assets/hambergur.png";

const Header = ({ setOffcanvas }) => {
  return (
    <div className="py-4 px-6 flex justify-between items-center border-b">
      <div className="hidden lg:flex items-center gap-3">
        <img src={location} alt="" />
        <p className="text-sm font-medium">
          123 Greenfield Avenue, Maplewood, NY 54321, USA
        </p>
        <img src={arrow} alt="" />
      </div>
      <div className="flex  lg:hidden items-center gap-3">
        <button onClick={() => setOffcanvas(true)}>
          <img src={hamburger} alt="" />
        </button>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        <button className="w-8 h-8 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-full">
          <img src={ques} alt="" />
        </button>
        <div className="relative">
          <button className="w-8 h-8 flex items-center justify-center border bg-slate-50 border-slate-200 rounded-full">
            <img src={bell} alt="" />
          </button>{" "}
          <p className="absolute -top-1.5 right-0 icon h-4 w-4 text-xs">8</p>
        </div>
        <button className="border border-primary rounded-full p-[1px] ">
          <img src={profile} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
