
import { Link } from "react-router-dom";
import intregrationImg from "../../assets/integrations.png";
import SectionHeader from "./SectionHeader";

const Intregations = () => {
  return (
    <section className="intregrations py-7 md:py-32">
      <div className="container px-5">
        <SectionHeader
          sectionTag={"Integrations"}
          sectionTagColor={"text-primary"}
          sectionTitle={"Elevate Property Management Efficiency"}
          sectionTitleTwo={"with 50+ Integrations."}
          sectionTagColorTwo={"text-primary"}
          section_pb={"pb-8 md:pb-16"}
        />

        <div className="flex justify-center pb-7 md:pb-16">
          <img
            src={intregrationImg}
            alt="img"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
              </div>


        <p
          className="text-sm md:text-lg font-normal text-slate-black text-center mb-7 md:pb-12"
          data-aos="fade-up"
          data-aos-duration="1000">
          Experience a new level of productivity as RE Tracker seamlessly
          integrates with 50+ tools, <br /> enhancing your property management
          with unmatched efficiency and precision.
        </p>

        <div className="text-center">
          <Link className="py-3 px-16 border inline-block md:inline border-primary w-full text-center rounded-full text-base font-bold hover:bg-primary  text-primary hover:text-white transition-all duration-300">
            Try for free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intregations;
