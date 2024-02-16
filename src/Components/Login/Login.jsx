import { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import AuthTitle from "../../Shared/AuthTitle";
import Divider from "../../Shared/Divider";
import SocialBtn from "../../Shared/SocialBtn";
import eye from "../../assets/passwortd_eye.png";

const Login = () => {
  const [isChecked, setChecked] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="pt-10 pb-5 lg:pb-28 lg:pt-p_153 max-w-[320px] lg:max-w-authWidth mx-auto">
      <AuthTitle>Login to Your Account</AuthTitle>
      <SocialBtn />
      <Divider />
      <form>
        <div className="mb-5">
          <label htmlFor="email">
            Email <span>(Required)</span>{" "}
          </label>
          <input type="email" id="email" />
        </div>
        <div className="mb-6">
          <label htmlFor="password">
            Password <span>(Required)</span>{" "}
          </label>
          <div className="relative">
            <input type={passwordShow ? "text" : "password"} id="password" />
            <img
              onClick={() => setPasswordShow(!passwordShow)}
              className="absolute right-4 top-4 cursor-pointer"
              src={eye}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-between items-center gap-1 lg:gap-3 mb-5 lg:mb-10">
          <label className="flex items-center gap-4 mb-0">
            <input
              className="hidden"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`${
                isChecked && "bg-slate-200"
              } border  border-slate-200 rounded-sm h-[18px] w-[18px] flex items-center justify-center`}
            >
              {isChecked ? "✔" : ""}
            </span>
            Stay signed in
          </label>

          <Link
            to="/forget-password"
            className="text-primary font-semibold text-sm "
          >
            I forgot my password
          </Link>
        </div>
        <Link to="/dashboard/calender">
          <PrimaryBtn>Login</PrimaryBtn>
        </Link>
      </form>
    </div>
  );
};

export default Login;
