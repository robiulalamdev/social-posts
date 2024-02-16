const BannerList = () => {
  const lists = [
    {
      title: "Total hours spent",
      value: "437 Hrs 23 Min",
      percentage: "+ 36% ↑",
      color: "emerald-500",
    },
    {
      title: "Total Expense",
      value: "$12,426",
      percentage: "- 24%↓",
      color: "red-500",
    },
    {
      title: "Top category",
      value: "Repairs",
      percentage: "193 Hrs 53 Min",
      color: "slate-500",
    },
    {
      title: "Most active month",
      value: " December",
      percentage: "72 Hrs 9 Min",
      color: "slate-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid cols-2 lg:grid-cols-4 gap-8 mb-8">
      {lists.map((data, index) => (
        <div className="rounded-xl p-5 border " key={index}>
          <p className="text-xs font-medium text-slate-500 mb-2">
            {data.title}
          </p>
          <div className="flex items-end justify-between">
            <p className="text-slate-950 text-2xl font-medium">{data.value}</p>
            <p className={`text-${data.color} text-sm font-medium`}>
              {data.percentage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerList;
