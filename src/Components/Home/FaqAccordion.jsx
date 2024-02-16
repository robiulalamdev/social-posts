import  {  useState } from 'react'
import minus from "../../assets/accordion-minus.png";
import plus from "../../assets/accordion-plus.png";

const FaqAccordion = ({ index, ques, ans }) => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <div className="faq">
      <div className="container">
        <div className={"bg-btnGroup rounded-2xl mb-6"}>
          <div onClick={() => setIsOpen(index === isOpen ? null : index)} className={ index === isOpen ? "flex border-b border-darkTwo justify-between cursor-pointer p-5" : "flex justify-between border-0 cursor-pointer p-5"
            }>
            <p className="text-base text-white font-semibold ">{ques}</p>

            <span className="flex-shrink-0">
              <img
                className="transition-all duration-300"
                src={isOpen === index ? minus : plus}
                alt="icon"
              />
            </span>
          </div>

          {isOpen === index && (
            <p className="text-white text-sm font-normal p-5 ">{ans}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
