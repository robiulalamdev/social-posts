const OutLineBtn = ({ children,...props }) => {
  return (
    <button {...props}  className="text-primary font-bold text-base border border-primary rounded-full w-full py-3 px-8">
      {children}
    </button>
  );
};

export default OutLineBtn;
  