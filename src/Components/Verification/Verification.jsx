import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import Confetti from "react-confetti";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const Verification = () => {
  return (
    <div className=" pb-20 lg:pb-p_188 pt-[100px] lg:pt-p_228 max-w-authWidth mx-auto text-center">
      <Confetti />
      <div className="icon h-16 w-16 mx-auto mb-5 lg:mb-10">
        <IoMdCheckmark className="text-3xl" />
      </div>

      <AuthTitle>Welcome to RETracker</AuthTitle>
      <p className="mt-3 mb-5 lg:mb-10 text-sm lg:text-base font-normal text-[#78716C]">
        You have been verified to our platform successfully. Opening doors to
        manage your property like never before.
      </p>
      <Link to="/">
        <PrimaryBtn>Continue </PrimaryBtn>
      </Link>
    </div>
  );
};

export default Verification;
