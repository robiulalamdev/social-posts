import  { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import Divider from "../../Shared/Divider";
import SocialBtn from "../../Shared/SocialBtn";
import AuthTitle from "../../Shared/AuthTitle";
import eye from "../../assets/passwortd_eye.png";

const SignUp = () => {
  const [isChecked, setChecked] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div className="pb-5 lg:pb-28 pt-10 lg:pt-p_153 max-w-authWidth mx-auto">
      <AuthTitle>Create Account</AuthTitle>
      <SocialBtn />
      <Divider />

      <form>
        <div className="mb-5">
          <label htmlFor="name">
            Full Name <span>(Required)</span>{" "}
          </label>
          <input type="text" id="name" />
        </div>
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

        <div className="flex gap-3 items-center mb-5 lg:mb-10">
          <label className="flex items-center gap-4">
            <input
              className="hidden"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`${
                isChecked && "bg-slate-200"
              } border  border-black rounded-sm h-[18px] w-[18px] flex items-center justify-center flex-shrink-0`}
            >
              {isChecked ? "✔" : ""}
            </span>
            <p>
              By providing your email, you agreeing to our{" "}
              <Link className="underline" to="#">
                Terms of Service
              </Link>{" "}
              .
            </p>
          </label>
        </div>
        <Link to="/verify-email">
          <PrimaryBtn>Create Account</PrimaryBtn>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
