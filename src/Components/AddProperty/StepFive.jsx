import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import GlobalContext from "../../context/GlobalContext";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import AuthTitle from "../../Shared/AuthTitle";

const StepFive = () => {
  const navigate = useNavigate();
  const { setPropertyData } = useContext(GlobalContext);
  const labelRef = useRef(null);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailList, setEmailList] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleAddEmail = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.trim());

    if (isValidEmail) {
      setEmailList((prevEmails) => [...prevEmails, emailInput.trim()]);
      setEmailInput("");
    } else {
      console.log("Invalid email address");
    }
  };

  const handleRemoveEmail = (index) => {
    setEmailList((prevEmails) => [
      ...prevEmails.slice(0, index),
      ...prevEmails.slice(index + 1),
    ]);
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement("input");
    tempInput.value = labelRef.current.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1500);
  };

  const handleContinue = () => {
    setPropertyData((prevData) => ({
      ...prevData,
      emails: emailList,
    }));
    navigate("/");
  };

  return (
    <>
      <AuthTitle>Invite Coworkers </AuthTitle>
      <p className="text-secondary font-normal text-base mt-3 mb-5 lg:mb-10">
        If you have coworkers, you add them to collaborate on this property.
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-5 lg:mb-10 relative">
          <label>Copy this link and share with your workers</label>
          <div className="flex items-center justify-between bg-slate-50 rounded-full p-3 lg:py-1 lg:pr-1 lg:pl-4">
            <label
              ref={labelRef}
              className="mb-0 text-ellipsis overflow-hidden ..."
            >
              https://www.retracker.com/coworker_invite
            </label>
            <button
              onClick={copyToClipboard}
              type="button"
              className="hidden lg:block border border-primary text-primary rounded-full py-2 px-4 cursor-copy"
            >
              Copy Link
            </button>
          </div>
          {isTooltipVisible && (
            <div className="absolute -bottom-5 right-0 text-xs text-secondary">
              Link copied to clipboard!
            </div>
          )}
          <button
            onClick={copyToClipboard}
            type="button"
            className="mt-2 block lg:hidden border w-full border-primary text-primary rounded-full py-2 px-4"
          >
            Copy Link
          </button>
        </div>
        <div>
          <div className="mb-2">
            <label>Invite by email</label>
            <input
              type="email"
              value={emailInput}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === "Enter" && handleAddEmail()}
            />
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap items-start justify-start gap-2 mb-5 lg:mb-10">
            {emailList.map((email, index) => (
              <div
                key={index}
                className="flex items-center rounded-full gap-3 bg-violet-50 py-1 px-3"
              >
                <p className="text-xs font-medium">{email}</p>
                <button
                  onClick={() => handleRemoveEmail(index)}
                  type="button"
                  className="h-8 w-8 icon flex-shrink-0"
                >
                  {" "}
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
          <PrimaryBtn onClick={handleContinue} type="button">
            Send Invites
          </PrimaryBtn>
          <Link
            to="/"
            className="text-primary font-bold text-base  text-center mt-4 w-full"
            type="button"
          >
            Skip for now
          </Link>
        </div>
      </form>
    </>
  );
};

export default StepFive;
