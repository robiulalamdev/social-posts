
import Auth from "../../Shared/Auth";
import heroImg from "../../assets/banner-img.png";

const Banner = () => {
  return (
    <Auth>
      <section className="home_banner_section pt-[75px] md:pt-[104px] px-5">
        <div className="section_tag text-center pb-4">
          <p
            className="text-base md:text-lg font-semibold text-primary"
            data-aos="fade-up"
            data-aos-duration="1000">
            Revolutionize Your Property Tasks
          </p>
        </div>

        <div className="section_title text-center pb-3 md:pb-5">
          <h2
            className="text-2xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-duration="1500">
            Transform Your Real Estate Management <br />
            Experience with <span className="text-primary">RETracker</span>
          </h2>
        </div>

        <div className="secton-info text-center pb-7 md:pb-16">
          <p
            className="text-sm md:text-xl"
            data-aos="fade-up"
            data-aos-duration="2000">
            Your All-in-One Solution for Streamlined Real Estate Management.
            From Task Tracking to <br />
            Smart Analytics, We've Got You Covered.
          </p>
        </div>

        <div
          className="hero-img flex justify-center"
          data-aos="fade-up"
          data-aos-duration="2500">
          <img
            src={heroImg}
            className="max-w-twelveEighty w-full"
            alt="hero-img"
          />
        </div>
      </section>
    </Auth>
  );
};

export default Banner;
