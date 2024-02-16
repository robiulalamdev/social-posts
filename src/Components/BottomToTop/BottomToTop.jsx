import  { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;

    if (scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` ${isVisible ? "fixed right-10 bottom-10" : ""}`}>
      <button
        onClick={scrollToTop}
        className="bg-primary w-[50px] h-[50px] rounded-full text-white flex items-center justify-center">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BottomToTop;
