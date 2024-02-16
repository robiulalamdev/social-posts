const StepLines = ({ stepper }) => {

  return (
    <div className="flex gap-4 items-center mb-10">
      {[1, 2, 3, 4].map((item, idx) => (
        <p
          className={`w-24 h-2 rounded-2xl ${
            stepper >= item + 1 ? "bg-primary" : "bg-[#E7E5E4]"
          } `}
          key={idx}
        ></p>
      ))}
    </div>
  );
};

export default StepLines;
