import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import successfull from "../../assets/successfull.png";

const Successfull = ({ setSuccessfullOpen }) => {
  return (
    <div className="h-screen w-full  fixed z-50 left-0 top-0 flex justify-center items-end lg:items-center hour_spent ">
      <div className="bg-white rounded-3xl p-6 border max-w-[400px] w-full h-[316px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-between items-start mb-6">
          <button>
            {" "}
            <img src={successfull} alt="" />
          </button>
          <button
            onClick={() => setSuccessfullOpen(false)}
            className="text-slate-400 text-xl"
          >
            <RxCross2 />
          </button>
        </div>
        <p className="text-xl font-bold mb-2  text-slate-950">
          Hours Added Successfully!
        </p>
        <p className="text-slate-500 text-base font-normal mb-6 ">
          Your recent property-related hours spent activity has been saved.
        </p>
        <Link to="/">
          <PrimaryBtn>Back to home</PrimaryBtn>
        </Link>
      </div>
    </div>
  );
};

export default Successfull;
