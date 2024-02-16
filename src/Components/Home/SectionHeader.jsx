import Aos from "aos";
import  { useEffect } from "react";

const SectionHeader = ({
  sectionTag,
  sectionTitle,
  sectionTitleTwo,
  section_pb,
  sectionTagColor,
  sectionTagColorTwo,
  sectionTitleColor,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={`section-header ${section_pb}`}>
      <div className="section_tag text-center pb-3">
        <p className={`text-lg font-semibold ${sectionTagColor}`}>
          {sectionTag}
        </p>
      </div>

      <div className="section_title text-center">
        <h2
          className={`text-2xl md:text-6xl font-semibold leading-8 md:leading-[76px] ${sectionTitleColor}`}>
          {sectionTitle} <br />
          <span className={`${sectionTagColorTwo}`}>{sectionTitleTwo}</span>
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
