import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import ChartHeader from "../../Shared/ChartHeader";
import GraphLegend from "./GraphLegend";

const ExpenseGraph = () => {
  const data = [
    {
      name: "Jan",
      Repairs: 300,
      Management: 200,
      Analysis: 300,
      Consultation: 100,
    },
    {
      name: "Feb",
      Repairs: 200,
      Management: 28,
      Analysis: 26,
      Consultation: 25,
    },
    {
      name: "Mar",
      Repairs: 100,
      Management: 300,
      Analysis: 20,
      Consultation: 400,
    },
    {
      name: "Apr",
      Repairs: 200,
      Management: 400,
      Analysis: 100,
      Consultation: 200,
    },
    {
      name: "May",
      Repairs: 300,
      Management: 50,
      Analysis: 20,
      Consultation: 300,
    },
    {
      name: "Jun",
      Repairs: 400,
      Management: 100,
      Analysis: 500,
      Consultation: 200,
    },
    {
      name: "Jul",
      Repairs: 100,
      Management: 50,
      Analysis: 300,
      Consultation: 100,
    },
    {
      name: "Aug",
      Repairs: 50,
      Management: 20,
      Analysis: 300,
      Consultation: 50,
    },
    {
      name: "Sep",
      Repairs: 200,
      Management: 200,
      Analysis: 100,
      Consultation: 300,
    },
    {
      name: "Oct",
      Repairs: 300,
      Management: 200,
      Analysis: 400,
      Consultation: 100,
    },
    {
      name: "Nov",
      Repairs: 400,
      Management: 500,
      Analysis: 300,
      Consultation: 200,
    },
    {
      name: "Dec",
      Repairs: 500,
      Management: 200,
      Analysis: 200,
      Consultation: 100,
    },
  ];
  const formatYAxisTick = (value) => `$${value}`;
  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <ChartHeader title="Expense Graph" />

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
            />
            {/* <Tooltip /> */}
            <Bar dataKey="Consultation" stackId="a" fill="#6366F1" />
            <Bar dataKey="Analysis" stackId="a" fill="#F59E0B" />
            <Bar dataKey="Management" stackId="a" fill="#3B82F6" />
            <Bar dataKey="Repairs" stackId="a" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <GraphLegend />
    </div>
  );
};

export default ExpenseGraph;
