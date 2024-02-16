
import ChartHeader from "../../Shared/ChartHeader";

const Category = () => {
  const list = [
    {
      title: "Repairs",
      time: "210 Hrs 23 Min",
      color: "emerald-500",
      percentage: "83",
    },
    {
      title: "Management",
      time: "140 Hrs 37 Min",
      color: "blue-500",
      percentage: "63",
    },
    {
      title: "Analysis",
      time: "70 Hrs 34 Min",
      color: "[#F59E0B]",
      percentage: "35",
    },
    {
      title: "Consultation",
      time: "60 Hrs 26 Min",
      color: "indigo-500",
      percentage: "20",
    },
  ];
  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <ChartHeader title="Hours Spent/Category" />

      <div className="flex flex-col gap-8">
        {list.map((data, index) => (
          <div key={index}>
            <div className="flex items-center justify-between text-sm font-normal text-slate-950 mb-3">
              <p>{data.title}</p>
              <p>{data.time}</p>
            </div>
            <div className="w-full rounded-lg bg-gray-100 h-2">
              <div
                style={{ width: `${data.percentage}%` }}
                className={`bg-${data.color} h-2 rounded-lg`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
