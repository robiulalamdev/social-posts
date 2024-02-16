import ChartHeader from "../../Shared/ChartHeader";
import CircularProgressBar from "./CircularProgressBar";
import GraphLegend from "./GraphLegend";

const TaskCompletion = () => {
  return (
    <div className="border flex flex-col justify-between border-slate-200 rounded-xl p-6">
      <ChartHeader title="Task Completion Rate" />

      <div className="flex flex-wrap  justify-center items-center gap-8">
        <div>
          <CircularProgressBar
            strokeWidth={10}
            sqSize={140}
            percentage={75}
            customColor="#10B981"
            customstroke="#ECFDF5"
          />
        </div>
        <div>
          <CircularProgressBar
            strokeWidth={10}
            sqSize={140}
            percentage={90}
            customColor="#3B82F6"
            customstroke="#EFF6FF"
          />
        </div>
        <div>
          <CircularProgressBar
            strokeWidth={10}
            sqSize={140}
            percentage={94}
            customColor="#F59E0B"
            customstroke="#FFFBEB"
          />
        </div>
        <div>
          <CircularProgressBar
            strokeWidth={10}
            sqSize={140}
            percentage={99}
            customColor="#6366F1"
            customstroke="#EEF2FF"
          />
        </div>
      </div>
      <GraphLegend />
    </div>
  );
};

export default TaskCompletion;
