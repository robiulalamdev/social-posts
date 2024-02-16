import PrimaryBtn from "../../Shared/PrimaryBtn";
import mark from "../../assets/mark2.png";

const Packages = () => {
  return (
    <div className="max-w-[1536px] mx-auto my-24 p-5 lg:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {["A", "B"].map((data, index) => (
          <div
            className="border border-[#DBDBDB] rounded-2xl p-10 shadow"
            key={index}
          >
            <p className="text-primary text-base font-bold mb-2">
              Package {data}
            </p>
            <p className="text-2xl font-medium mb-8">Package Title</p>
            <p className="text-5xl font-bold mb-8">$299</p>
            <PrimaryBtn>Get Started Today</PrimaryBtn>
            <div className="flex flex-col gap-4 mt-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-start gap-[10px]">
                  <img className="flex-shrink-0" src={mark} alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Sem sagittis lorem
                    ac eros suspendisse accumsan sodales. Lorem ipsum dolor sit
                    amet consectetur.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
