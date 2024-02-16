import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Testimonal.css";
import {
  default as facebook,
  default as instagram,
} from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import autohrImg1 from "../../assets/user1.png";
import autohrImg2 from "../../assets/user2.png";
import autohrImg3 from "../../assets/user3.png";
import autohrImg4 from "../../assets/user4.png";
import autohrImg5 from "../../assets/user5.png";
import autohrImg6 from "../../assets/user6.png";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const Testimonal = () => {
  const testimonal = [
    {
      cardTitle: "Seamless interface",
      cardDes:
        "RE Tracker has revolutionized how I manage my properties. The seamless interface and intuitive features make day-to-day tasks a breeze. Highly recommend!",
      autohrImg: autohrImg1,
      authorName: "Fig Nelson",
      authorSocialId: "@fignel_sooon",
      socialLink: "#",
      socialIcon: twitter,
      dataAos: "fade-up",
      dataDuration: "1000",
    },
    {
      cardTitle: "Powerful analytics",
      cardDes:
        "Effortlessly collaborating with my team on property tasks has never been easier. RE Tracker's user-friendly design and powerful analytics are game-changers!",
      autohrImg: autohrImg2,
      authorName: "Sadie Berlin",
      authorSocialId: "@sadiieberlin00",
      socialLink: "#",
      socialIcon: instagram,
      dataAos: "fade-up",
      dataDuration: "1000",
    },
    {
      cardTitle: "Customizable categories",
      cardDes:
        "I've tried several property management tools, and RE Tracker stands out. The customizable categories and insightful reports provide unmatched flexibility for my diverse real estate portfolio.",
      autohrImg: autohrImg3,
      authorName: "Amaya Locosta",
      authorSocialId: "@amaylocosta",
      socialLink: "#",
      socialIcon: facebook,
      dataAos: "fade-up",
      dataDuration: "1000",
    },
    {
      cardTitle: "Indispensable tool",
      cardDes:
        "RE Tracker simplifies my property management routine. From logging hours to tracking expenses, it's become an indispensable tool in my real estate journey.",
      autohrImg: autohrImg4,
      authorName: "Sadie Berlin",
      authorSocialId: "@sadiieberlin00",
      socialLink: "#",
      socialIcon: instagram,
      dataAos: "fade-up",
      dataDuration: "1000",
    },
    {
      cardTitle: "Collaborative features",
      cardDes:
        "The collaborative features of RE Tracker have transformed how my team and I work together. It's a must-have for anyone serious about efficient property management.",
      autohrImg: autohrImg5,
      authorName: "Fig Nelson",
      authorSocialId: "@fignel_sooon",
      socialLink: "#",
      socialIcon: twitter,
      dataAos: "fade-up",
      dataDuration: "1000",
    },
    {
      cardTitle: "Aligns with my needs",
      cardDes:
        "I've finally found a property management tool that aligns with my needs. RE Tracker's flexibility and robust support make it an essential part of my real estate strategy.",
      autohrImg: autohrImg6,
      authorName: "Sadie Berlin",
      authorSocialId: "@sadiieberlin00",
      socialLink: "#",
      socialIcon: instagram,
      dataAos: "fade-up",
      dataDuration: "1000",
    },
  ];

  return (
    <div className="testimonial py-7 md:py-24 testimonal_bg">
      <div className="container px-5">
        <SectionHeader
          sectionTag={"Testimonials"}
          sectionTagColor={"text-white"}
          sectionTagColorTwo={"text-white"}
          sectionTitle={"See what our"}
          sectionTitleTwo={"customers are saying"}
          section_pb={"pb-7 md:pb-16"}
        />

        <div className="flex justify-center pb-7 md:pb-16">
          <div className="grid grid-cols-12 md:gap-8 gap-4">
            {testimonal.map((data, index) => (
              <React.Fragment key={index}>
                <TestimonialCard
                  cardTitle={data.cardTitle}
                  cardDes={data.cardDes}
                  autohrImg={data.autohrImg}
                  authorName={data.authorName}
                  authorSocialId={data.authorSocialId}
                  socialLink={data.socialLink}
                  socialIcon={data.socialIcon}
                  dataAos={data.dataAos}
                  dataDuration={data.dataDuration}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="testi_btn text-center">
          <button className="bg-slate-black border border-slate-black text-white hover:bg-white hover:text-slate-950 py-3 px-16 rounded-full transition-all ease-in-out duration-300">
            <Link to={"/signup"} className="text-base font-bold">
              Try for free
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
