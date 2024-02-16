import  { useState } from "react";
import { Link } from "react-router-dom";
import MarkIcon2 from "../../assets/mark2.png";
import PricingCard from "./PricingCard";
import SectionHeader from "./SectionHeader";

const Pricing = () => {
  const [subTime, setSubTime] = useState("monthly");

  const handleSubtime = (option) => {
    setSubTime(option);
  };

  return (
    <section id="pricing" className="pricing py-7 md:py-32 bg-drakWhite overflow-x-hidden">
      <div className="container px-5">
        <SectionHeader
          sectionTag={"Pricing"}
          sectionTagColor={"text-primary"}
          sectionTitle={"Pricing built to suit all"}
          sectionTitleTwo={"types of business"}
          sectionTagColorTwo={"text-primary"}
          section_pb={"pb-8"}
        />

        <div className="subcription_type flex justify-center mb-10">
          <div className="btn_wrapper border border-slate-200 flex p-2 rounded-full w-full lg:w-[20%]">
            <button
              className={`py-2 px-4 w-full rounded-full ${
                subTime === "monthly"
                  ? "bg-lightPrimary text-primary font-bold"
                  : "text-base font-bold"
              }`}
              onClick={() => handleSubtime("monthly")}>
              Monthly
            </button>

            <button
              className={`py-2 px-4 w-full rounded-full ${
                subTime === "yearly"
                  ? "bg-lightPrimary text-primary font-bold"
                  : "text-base font-bold"
              }`}
              onClick={() => handleSubtime("yearly")}>
              Yearly
            </button>
          </div>
        </div>
        {subTime === "monthly" && (
          <>
            <div className="flex justify-center md:pb-16">
              <div className="grid grid-cols-12 md:flex md:gap-8 items-center">
                <div className="col-span-12 md:col-span-4">
                  <PricingCard
                    planType={"Basic Plan"}
                    planDetails={
                      "Unlock the power of data analytics and gain actionable insights."
                    }
                    subType={"Free"}
                    featuresOne={"Property Management Essentials"}
                    featuresTwo={"Up to 5 Properties"}
                    featuresThree={"Task Logging and Calendar View"}
                    featuresFour={"Basic Analytics"}
                    featuresFive={"Email Support"}
                    subBtn={"Try for free"}
                    dataAos={"fade-right"}
                    dataDuration={"500"}
                  />
                </div>

                <div className="col-span-12 md:col-span-4">
                  <div className="pricing-card max-w-[405px] h-full mb-5 md:mb-0">
                    <div className="h-full flex flex-col justify-between bg-white p-2 rounded-2xl">
                      <div className="card_content bg-white rounded-2xl border-2 border-primary">
                        <h2 className="py-4 text-center bg-primary text-white text-xs rounded-t-xl">
                          Recommended
                        </h2>
                        <div className="pricing_card_type border-b p-8">
                          <div className="card_title">
                            <div className="packages_name">
                              <div className="discount-plan flex items-center justify-between pb-2">
                                <h2 className="text-xl font-bold text-slate-black">
                                  Pro Plan
                                </h2>
                                <p className="bg-green-100 text-green-500 font-medium text-sm py-1 px-2 rounded-full">
                                  Save up to 15%
                                </p>
                              </div>
                              <p className="text-base font-normal text-slate-black">
                                Unlock the power of data analytics and gain
                                actionable insights.
                              </p>
                            </div>
                          </div>

                          <div className="sub_type py-8">
                            <h2 className="text-4xl font-semibold text-slate-black">
                              $19.99
                              <small className="text-base font-normal text-secondary">
                                / Month
                              </small>
                            </h2>
                          </div>

                          <Link className="py-3 border border-primary w-full block text-center rounded-full text-base font-bold hover:bg-white hover:text-primary bg-primary text-white transition-all duration-300">
                            Start with Pro
                          </Link>
                        </div>

                        <div className="pricing_card_features p-8">
                          <ul>
                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Comprehensive Property Management
                            </li>

                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Up to 15 Properties
                            </li>

                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Full Analytics Dashboard
                            </li>

                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Collaboration with up to 2 Coworkers
                            </li>

                            <li className="flex items-center gap-2 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Priority Email Support
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <PricingCard
                    planType={"Premium Plan"}
                    planDetails={
                      "Unlock the power of data analytics and gain actionable insights."
                    }
                    subType={"$29.99"}
                    subBtn={"Get Premium"}
                    sub_time={"/ Month"}
                    featuresOne={"Advanced Property Management Suite"}
                    featuresTwo={"Unlimited Properties"}
                    featuresThree={"Enhanced Task Logging, Calendar View"}
                    featuresFour={
                      "Robust Collaboration with Unlimited Coworkers"
                    }
                    featuresFive={"Priority Email and Phone Support"}
                    dataAos={"fade-left"}
                    dataDuration={"500"}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {subTime === "yearly" && (
          <>
            <div className="flex justify-center md:pb-16">
              <div className="grid grid-cols-12 md:flex md:gap-8 items-center">
                <div className="col-span-12 md:col-span-4">
                  <PricingCard
                    planType={"Basic Plan"}
                    planDetails={
                      "Unlock the power of data analytics and gain actionable insights."
                    }
                    subType={"Free"}
                    featuresOne={"Property Management Essentials"}
                    featuresTwo={"Up to 5 Properties"}
                    featuresThree={"Task Logging and Calendar View"}
                    featuresFour={"Basic Analytics"}
                    featuresFive={"Email Support"}
                    subBtn={"Try for free"}
                    dataAos={"fade-right"}
                    dataDuration={"500"}
                  />
                </div>

                <div className="col-span-12 md:col-span-4">
                  <div className="pricing-card max-w-[405px] h-full mb-5 md:mb-0">
                    <div className="h-full flex flex-col justify-between bg-white p-2 rounded-2xl">
                      <div className="card_content bg-white rounded-2xl border-2 border-primary">
                        <h2 className="py-4 text-center bg-primary text-white text-xs rounded-t-xl">
                          Recommended
                        </h2>
                        <div className="pricing_card_type border-b p-8">
                          <div className="card_title">
                            <div className="packages_name">
                              <div className="discount-plan flex items-center justify-between pb-2">
                                <h2 className="text-xl font-bold text-slate-black">
                                  Pro Plan
                                </h2>
                                <p className="bg-green-100 text-green-500 font-medium text-sm py-1 px-2 rounded-full">
                                  Save up to 15%
                                </p>
                              </div>
                              <p className="text-base font-normal text-slate-black">
                                Unlock the power of data analytics and gain
                                actionable insights.
                              </p>
                            </div>
                          </div>

                          <div className="sub_type py-8">
                            <h2 className="text-4xl font-semibold text-slate-black">
                              $230
                              <small className="text-base font-normal text-secondary">
                                / Year
                              </small>
                            </h2>
                          </div>

                          <Link className="py-3 border border-primary w-full block text-center rounded-full text-base font-bold hover:bg-white hover:text-primary bg-primary text-white transition-all duration-300">
                            Start with Pro
                          </Link>
                        </div>

                        <div className="pricing_card_features p-8">
                          <ul>
                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Comprehensive Property Management
                            </li>

                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Up to 15 Properties
                            </li>

                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Full Analytics Dashboard
                            </li>

                            <li className="flex items-center gap-2 mb-4 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Collaboration with up to 2 Coworkers
                            </li>

                            <li className="flex items-center gap-2 text-sm font-normal text-slate-black">
                              <span className="flex-shrink-0">
                                <img src={MarkIcon2} alt="mark-icon" />
                              </span>
                              Priority Email Support
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <PricingCard
                    planType={"Premium Plan"}
                    planDetails={
                      "Unlock the power of data analytics and gain actionable insights."
                    }
                    subType={"$350"}
                    subBtn={"Get Premium"}
                    sub_time={"/ Year"}
                    featuresOne={"Advanced Property Management Suite"}
                    featuresTwo={"Unlimited Properties"}
                    featuresThree={"Enhanced Task Logging, Calendar View"}
                    featuresFour={
                      "Robust Collaboration with Unlimited Coworkers"
                    }
                    featuresFive={"Priority Email and Phone Support"}
                    dataAos={"fade-left"}
                    dataDuration={"500"}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Pricing;
