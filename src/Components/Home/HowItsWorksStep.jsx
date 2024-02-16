import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import markIcon from "../../assets/mark.png";

const HowItsWorksStep = ({
  stepNumber,
  createAccount,
  cardDes,
  featuresOne,
  featuresTwo,
  featuresThree,
  featuresFour,
  featuresFive,
  cardImg,
  btnName,
  btnLink,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="howitworks-card p-2 bg-white rounded-2xl mb-7 md:card_wrapper">
        <div className="border rounded-2xl p-4 md:card_border">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="card_info pb-8">
                    <div className="card_tag pb-2">
                      <p
                        className="text-sm font-semibold text-primary"
                        data-aos="fade-up"
                        data-aos-duration="500"
                      >
                        {stepNumber}
                      </p>
                    </div>

                    <div className="card_title pb-1">
                      <h2
                        className="text-2xl md:text-4xl font-semibold text-clr_black"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        {createAccount}
                      </h2>
                    </div>

                    <div className="card_des">
                      <p
                        className="text-sm md:text-base font-normal text-clr_black"
                        data-aos="fade-up"
                        data-aos-duration="700"
                      >
                        {cardDes}
                      </p>
                    </div>
                  </div>

                  <div className="card_features">
                    <ul className="pb-4 md:pb-0">
                      <li
                        className="flex items-start gap-4 text-sm font-medium text-clr_black pb-4"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        <span className="flex-shrink-0 pt-1">
                          <img src={markIcon} alt="mark-icon" />
                        </span>
                        {featuresOne}
                      </li>

                      <li
                        className="flex items-start gap-4 text-sm font-medium text-clr_black pb-4"
                        data-aos="fade-up"
                        data-aos-duration="900"
                      >
                        <span className="flex-shrink-0 pt-1">
                          <img src={markIcon} alt="mark-icon" />
                        </span>
                        {featuresTwo}
                      </li>

                      <li
                        className="flex items-start gap-4 text-sm font-medium text-clr_black pb-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        <span className="flex-shrink-0 pt-1">
                          <img src={markIcon} alt="mark-icon" />
                        </span>
                        {featuresThree}
                      </li>

                      <li
                        className="flex items-start gap-4 text-sm font-medium text-clr_black pb-4"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                      >
                        <span className="flex-shrink-0 pt-1">
                          <img src={markIcon} alt="mark-icon" />
                        </span>
                        {featuresFour}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card_btn">
                  <Link
                    to={`${btnLink}`}
                    className="border inline-block w-full md:inline text-center border-primary py-3 px-16 rounded-full text-base font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {btnName}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 flex justify-end items-center">
              <div
                className="card_img"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <img className="" src={cardImg} alt="card-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorksStep;
