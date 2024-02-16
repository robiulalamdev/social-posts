import Banner from "../Components/ConsultingUpsell/Banner";
import Header from "../Shared/Header";
import Packages from "../Components/ConsultingUpsell/Packages";
import Investment from "../Components/ConsultingUpsell/Investment";

const ConsultingUpsell = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full top-7 lg:top-16 z-10">
          <Header />
        </div>
        <Banner />
      </div>
      <Packages />
      <Investment />
    </>
  );
};

export default ConsultingUpsell;
