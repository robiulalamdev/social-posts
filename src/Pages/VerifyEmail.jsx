import EmailVerify from "../Components/Verification/EmailVerify";
import Auth from "../Shared/Auth";

const VerifyEmail = () => {
  return (
    <Auth>
      <EmailVerify />
    </Auth>
  );
};

export default VerifyEmail;
