
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";

const ForgetPass = () => {
  return (
    <div className="pb-p_153 lg:pb-p_236 pt-p_173 lg:pt-p_276 max-w-authWidth mx-auto">
      <AuthTitle>Forgot Password</AuthTitle>
      <p className="mt-2 lg:mt-3 mb-5 lg:mb-10 text-base font-normal text-[#78716C]">
        A link will be sent to your registered email to reset your password.
      </p>

      <form>
        <div className="mb-5 lg:mb-10">
          <label htmlFor="email">
            Email <span>(Required)</span>
          </label>
          <input type="email" id="email" />
        </div>
        <PrimaryBtn>Send Rest Link</PrimaryBtn>
      </form>
    </div>
  );
};

export default ForgetPass;
