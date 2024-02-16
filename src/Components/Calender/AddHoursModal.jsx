import timer from "../../assets/timer.png";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const AddHoursModal = ({ setOpen }) => {
  const { setShowEventModal } = useContext(GlobalContext);

  const handleClick = () => {
    setOpen(false);
    setShowEventModal(true);
  };
  return (
    <div className="h-screen w-full  fixed z-50 left-0 top-0 flex justify-center items-center hour_spent ">
      <div className="bg-white rounded-3xl p-6 border max-w-[400px] w-full h-[316px] overflow-y-scroll no-scrollbar">
        <div className="flex justify-between items-start mb-6">
          <div></div>
          <button className="icon w-10 h-10">
            {" "}
            <img src={timer} alt="" />
          </button>
          <button onClick={() => setOpen(false)} className="text-black">
            <RxCross2 />
          </button>
        </div>
        <p className="text-3xl font-bold mb-2 text-center text-slate-950">
          Add Hours Spent
        </p>
        <p className="text-slate-500 text-base font-normal mb-6 text-center">
          Start with adding hours spent on your property by clicking the button.
        </p>
        <button
          style={{ borderRadius: "9999px" }}
          className="icon flex items-center gap-[10px] px-4 py-3  w-full "
          onClick={handleClick}
        >
          <FaPlus />
          Add Hours
        </button>
        <div className="text-primary text-center mt-4">
          <button onClick={() => setOpen(false)}>Do it later</button>
        </div>
      </div>
    </div>
  );
};

export default AddHoursModal;
