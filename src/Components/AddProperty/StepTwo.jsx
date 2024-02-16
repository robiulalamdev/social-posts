import { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";

const StepTwo = ({ setStepper }) => {
  const { setPropertyData } = useContext(GlobalContext);
  const options = [
    {
      title: "Short-Term Rental (STR)",
      subtitle:
        "STRs offer property owners the advantage of higher nightly rates and flexibility in property use, allowing for increased income during peak demand periods.",
    },
    {
      title: "Long-Term Rental (LTR)",
      subtitle:
        "LTRs provide stable, predictable income with less hands-on management, appealing to those seeking consistency and reduced turnover.",
    },
    {
      title: "Hybrid",
      subtitle:
        "Hybrid rental models provide property owners with income diversification, market adaptability, and the flexibility to use the property personally.",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  const handleContinue = () => {
    setPropertyData((prevData) => ({
      ...prevData,
      propertyType: options[selectedOption]?.title,
    }));
    setStepper(3);
  };

  return (
    <>
      <p className="text-primary font-bold text-sm mb-3">Step 02</p>
      <AuthTitle>Property Type </AuthTitle>

      <div>
        <div className="my-5 lg:my-10">
          <label htmlFor="search">Type Lists </label>
          <div className="flex flex-col gap-4 lg:gap-3">
            {options.length > 0 &&
              options.map((option, index) => (
                <div
                  onClick={() => handleOptionClick(index)}
                  key={index}
                  className="cursor-pointer border border-[#E5E7EB] rounded-lg p-5 flex flex-col lg:flex-row items-start gap-4 "
                >
                  <div
                    className={`cursor-pointer flex-shrink-0 h-4 w-4 rounded-full mt-1 ${
                      selectedOption === index
                        ? "border-4 border-primary"
                        : "border-2 border-[#E5E7EB]"
                    }`}
                  ></div>
                  <div>
                    <p className="text-base font-semibold text-[#1F2937]">
                      {option?.title}
                    </p>
                    <p className="text-[#6B7280] text-sm font-normal">
                      {option?.subtitle}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-full" onClick={() => setStepper(1)}>
            <OutLineBtn>Go Back</OutLineBtn>
          </div>
          <div className="w-full" onClick={handleContinue}>
            <PrimaryBtn>Continue</PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
