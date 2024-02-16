import Aos from "aos";
import  { useEffect } from "react";

const PowerFeaturesCard = ({
  cardTitle,
  cardContent,
  cardImg,
  dataAos,
  dataDuration,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-[320px] md:max-w-[405px]">
      <div className="card_img mb-8">
        <img className="w-full" src={cardImg} alt="card-img" />
      </div>
      <div className="card_content">
        <h2
          className="text-xl text-slate-black font-medium mb-3"
          data-aos={dataAos}
          data-aos-duration={dataDuration}>
          {cardTitle}
        </h2>
        <p
          className="text-sm font-normal text-slate-black"
          data-aos={dataAos}
          data-aos-duration={dataDuration}>
          {cardContent}
        </p>
      </div>
    </div>
  );
};

export default PowerFeaturesCard;
