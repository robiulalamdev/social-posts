import note from "../../assets/Notepad.png";
import call from "../../assets/call.png";
import list from "../../assets/list.png";
import mark from "../../assets/mark2.png";

const Investment = () => {
  const details = [
    {
      pic: note,
      title: "Pre-Call Preparation",
      list: [
        "Information from the listing agent",
        "A brief market study",
        "Fill out the unit mix section of the facility model",
      ],
    },
    {
      pic: call,
      title: "One Hour Call",
      list: [
        "Underwriting Process Walk-Through: Estimating Costs, Projecting Revenue, Determining Facility Value",
        "Q&A Session",
        "Additional time is availability: $500 per 1/2 hour",
      ],
    },
    {
      pic: list,
      title: "Eligibility and Risks",
      list: [
        "This consulting is for folks with at least $500k net worth",
        "Who plan to purchase a $500k+ self-storage facility",
        "Buying any real estate asset is risky and you must do additional research beyond our call.",
      ],
    },
  ];
  return (
    <div className="bg-slate-50 py-24 px-5 lg:px-0">
      <div className="max-w-[1536px] m-auto">
        <div className="text-5xl font-semibold text-center mb-12">
          <p className="text-slate-950 mb-3">Unlock the Potential of</p>
          <p className="text-primary">Self-Storage Investment</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {details.map((data, index) => (
            <div key={index} className="rounded-3xl bg-white p-2">
              <div className="border rounded-3xl p-8 h-full">
                <button className="icon h-16 w-16 mb-8">
                  <img src={data.pic} alt="" />
                </button>
                <p className="text-2xl font-bold mb-4">{data.title}</p>
                <div className="flex flex-col gap-[10px]">
                  {data.list.map((idx) => (
                    <div className="flex items-start gap-[10px]" key={idx}>
                      <img className="flex-shrink-0" src={mark} alt="" />
                      <p className="text-sm font-medium">{idx}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investment;
