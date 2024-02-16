import SocialMediaBtn from "./SocialMediaBtn";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const SocialBtn = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-center mt-5 lg:mt-10">
      <SocialMediaBtn pic={google} name="Continue with Google" />
      <SocialMediaBtn pic={facebook} name="Continue with Facebook" />
    </div>
  );
};

export default SocialBtn;
