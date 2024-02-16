import { useState } from "react";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import eye from "../../assets/passwortd_eye.png";

const Reset = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passShow, setPassShow] = useState(false);

  return (
    <div className="pb-p_105 lg:pb-p_188 pt-p_125 lg:pt-p_228 max-w-authWidth mx-auto">
      <AuthTitle>Reset Password </AuthTitle>
      <p className="mt-3 mb-5 lg:mb-10 text-base font-normal text-[#78716C]">
        Enter a new password and confirm your new password to reset.
      </p>

      <form>
        <div className="mb-5">
          <label htmlFor="new-pass">
            New Password <span>(Required)</span>{" "}
          </label>

          <div className="relative">
            <input type={passwordShow ? "text" : "password"} id="new-pass" />
            <img
              onClick={() => setPasswordShow(!passwordShow)}
              className="absolute right-4 top-4 cursor-pointer"
              src={eye}
              alt=""
            />
          </div>
        </div>
        <div className="mb-5 lg:mb-10">
          <label htmlFor="cfr-pass">
            Confirm Password <span>(Required)</span>{" "}
          </label>

          <div className="relative">
            <input type={passShow ? "text" : "password"} id="cfr-pass" />
            <img
              onClick={() => setPassShow(!passShow)}
              className="absolute right-4 top-4 cursor-pointer"
              src={eye}
              alt=""
            />
          </div>
        </div>

        <PrimaryBtn>Reset Password </PrimaryBtn>
      </form>
    </div>
  );
};

export default Reset;
