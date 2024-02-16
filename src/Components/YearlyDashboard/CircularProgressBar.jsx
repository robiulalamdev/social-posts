import { useState } from "react";

const CircularProgressBar = ({
  customColor,
  customstroke,
  percentage,
  sqSize,
  strokeWidth,
}) => {
  const [getPercentage, setGetPercentage] = useState(percentage);
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * getPercentage) / 100;

  const gradientId = `progressGradient-${getPercentage}`;


  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="circle-background"
        stroke={customstroke}
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
          stroke: `url(#${gradientId})`,
        }}
      />
      <text
        className="circle-text"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
      >
        {`${getPercentage}%`}
      </text>
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="0%" stopColor={customColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircularProgressBar;
