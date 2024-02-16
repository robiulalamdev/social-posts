import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "../Components/Home/Banner";
import Faq from "../Components/Home/Faq";
import GetStartdToday from "../Components/Home/GetStartdToday";
import HowItsWorks from "../Components/Home/HowItsWorks";
import Intregations from "../Components/Home/Intregations";
import PowerFeatures from "../Components/Home/PowerFeatures";
import Pricing from "../Components/Home/Pricing";
import Testimonal from "../Components/Home/Testimonal";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Banner />
      <HowItsWorks />
      <PowerFeatures />
      <Testimonal />
      <Pricing />
      <Faq />
      <Intregations />
      <GetStartdToday />
    </>
  );
};

export default Home;
