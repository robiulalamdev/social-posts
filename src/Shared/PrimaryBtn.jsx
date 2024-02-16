
const PrimaryBtn = ({ children, ...props }) => {
  return (
    <button {...props}  className="bg-primary py-3 px-8 rounded-3xl text-white text-base font-bold w-full transition duration-600 ease-in-out hover:bg-primary-dark ">
      {children} 
    </button>
  );
};

export default PrimaryBtn;
