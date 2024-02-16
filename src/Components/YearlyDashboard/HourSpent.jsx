import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartHeader from "../../Shared/ChartHeader";
import GraphLegend from "./GraphLegend";

const HourSpent = () => {
  const data = [
    {
      name: "Jan",
      Repairs: 300,
      Management: 200,
      Analysis: 70,
      Consultation: 50,
    },
    {
      name: "Feb",
      Repairs: 200,
      Management: 100,
      Analysis: 50,
      Consultation: 25,
    },
    {
      name: "Mar",
      Repairs: 200,
      Management: 140,
      Analysis: 80,
      Consultation: 40,
    },
    {
      name: "Apr",
      Repairs: 200,
      Management: 100,
      Analysis: 50,
      Consultation: 20,
    },
    {
      name: "May",
      Repairs: 300,
      Management: 140,
      Analysis: 70,
      Consultation: 30,
    },
    {
      name: "Jun",
      Repairs: 300,
      Management: 100,
      Analysis: 50,
      Consultation: 20,
    },
    {
      name: "Jul",
      Repairs: 280,
      Management: 180,
      Analysis: 140,
      Consultation: 100,
    },
    {
      name: "Aug",
      Repairs: 240,
      Management: 140,
      Analysis: 70,
      Consultation: 50,
    },
    {
      name: "Sep",
      Repairs: 300,
      Management: 200,
      Analysis: 70,
      Consultation: 30,
    },
    {
      name: "Oct",
      Repairs: 300,
      Management: 200,
      Analysis: 120,
      Consultation: 100,
    },
    {
      name: "Nov",
      Repairs: 140,
      Management: 80,
      Analysis: 40,
      Consultation: 20,
    },
    {
      name: "Dec",
      Repairs: 310,
      Management: 80,
      Analysis: 50,
      Consultation: 10,
    },
  ];
  const formatYAxisTick = (value) => `${value} Hrs`;

  const [activeDataKey, setActiveDataKey] = React.useState(null);

  const handleMouseOver = (dataKey) => {
    setActiveDataKey(dataKey);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const activePayload = payload.find(
        (item) => item.dataKey === activeDataKey
      );
      if (activePayload) {
        return (
          <div className="custom-tooltip bg-white p-2 border rounded-lg shadow-lg">
            <p className="label">{`${label} 2021`}</p>
            <p className="intro">{`${activePayload.name}: ${activePayload.value} Hrs`}</p>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div className="border border-slate-200 rounded-xl p-6">
      <ChartHeader title="Hours Spent" />

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="" />
            <XAxis
              dataKey="name"
              tickLine={false}
              tick={{ fontSize: 12, textAnchor: "right" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={formatYAxisTick}
              label={{
                position: "insideLeft",
                angle: -90,
                dy: -10,
                style: { textAnchor: "middle", fontSize: 12, lineHeight: 1 },
              }}
            />

            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="Repairs"
              strokeWidth={2}
              stroke="#10B981"
              fill="#ECFDF5"
              stackId="1"
              onMouseOver={() => handleMouseOver("Repairs")}
            />
            <Area
              type="monotone"
              dataKey="Management"
              strokeWidth={2}
              stroke="#3B82F6"
              fill="#EFF6FF"
              stackId="2"
              onMouseOver={() => handleMouseOver("Management")}
            />
            <Area
              type="monotone"
              dataKey="Analysis"
              strokeWidth={2}
              stroke="#F59E0B"
              fill="#FFFBEB"
              stackId="3"
              onMouseOver={() => handleMouseOver("Analysis")}
            />
            <Area
              type="monotone"
              dataKey="Consultation"
              strokeWidth={2}
              stroke="#6366F1"
              fill="#EEF2FF"
              stackId="4"
              onMouseOver={() => handleMouseOver("Consultation")}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <GraphLegend />
    </div>
  );
};

export default HourSpent;
