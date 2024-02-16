

const GraphLegend = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
        <span className="bg-emerald-500 w-2 h-2 rounded-full block"></span>
        Repairs
      </p>
      <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
        {" "}
        <span className="bg-blue-500 w-2 h-2 rounded-full block"></span>
        Management
      </p>
      <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
        {" "}
        <span className="bg-[#F59E0B] w-2 h-2 rounded-full block"></span>
        Analysis
      </p>
      <p className="flex items-center gap-2 text-sm font-medium text-slate-950">
        {" "}
        <span className="bg-indigo-500 w-2 h-2 rounded-full block"></span>
        Consultation
      </p>
    </div>
  );
};

export default GraphLegend;
