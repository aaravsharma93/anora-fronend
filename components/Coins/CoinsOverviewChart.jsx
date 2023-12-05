import React from "react";
import PropTypes from "prop-types";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLine } from "victory";
import useSettings from "../../hooks/useSettings";

const data = [
  { date: "2020/9/1", earnings: 9000 },
  { date: "2020/9/15", earnings: 8900 },
  { date: "2020/10/1", earnings: 8700 },
  { date: "2020/10/15", earnings: 8800 },
  { date: "2020/11/1", earnings: 8900 },
  { date: "2020/11/15", earnings: 9100 },
  { date: "2020/12/1", earnings: 9800 },
  { date: "2020/12/15", earnings: 10000 },
  { date: "2021/1/1", earnings: 10500 },
  { date: "2021/1/15", earnings: 11000 },
  { date: "2021/2/1", earnings: 11300 },
  { date: "2021/2/15", earnings: 10800 },
  { date: "2021/3/1", earnings: 10000 },
  { date: "2021/3/15", earnings: 9100 },
  { date: "2021/4/1", earnings: 9100 },
  { date: "2021/4/15", earnings: 8500 },
  { date: "2021/5/1", earnings: 8500 },
  { date: "2021/5/115", earnings: 8700 },
  { date: "2021/6/1", earnings: 9000 },
  { date: "2021/6/15", earnings: 9100 },
  { date: "2021/7/1", earnings: 9200 },
  { date: "2021/7/15", earnings: 8900 },
  { date: "2021/8/1", earnings: 8800 },
  { date: "2021/8/15", earnings: 8700 },
  { date: "2021/9/1", earnings: 8600 },
  { date: "2021/9/15", earnings: 8500 },
  { date: "2021/10/1", earnings: 8000 },
  { date: "2021/10/15", earnings: 8000 },
  { date: "2021/11/1", earnings: 7800 },
];

const predictionData = [
  { date: "2020/9/1", earnings: 23000 },
  { date: "2020/9/15", earnings: 18000 },
  { date: "2020/10/1", earnings: 15000 },
  { date: "2020/10/15", earnings: 17000 },
  { date: "2020/11/1", earnings: 22000 },
  { date: "2020/11/15", earnings: 28000 },
  { date: "2020/12/1", earnings: 30000 },
  { date: "2020/12/15", earnings: 21000 },
  { date: "2021/1/1", earnings: 16000 },
  { date: "2021/1/15", earnings: 15000 },
  { date: "2021/2/1", earnings: 15500 },
  { date: "2021/2/15", earnings: 17000 },
  { date: "2021/3/1", earnings: 19000 },
  { date: "2021/3/15", earnings: 26000 },
  { date: "2021/4/1", earnings: 33000 },
  { date: "2021/4/15", earnings: 38000 },
  { date: "2021/5/1", earnings: 44000 },
  { date: "2021/5/115", earnings: 39000 },
  { date: "2021/6/1", earnings: 36000 },
  { date: "2021/6/15", earnings: 30000 },
  { date: "2021/7/1", earnings: 27000 },
  { date: "2021/7/15", earnings: 19000 },
  { date: "2021/8/1", earnings: 16000 },
  { date: "2021/8/15", earnings: 22000 },
  { date: "2021/9/1", earnings: 24000 },
  { date: "2021/9/15", earnings: 28000 },
  { date: "2021/10/1", earnings: 31000 },
  { date: "2021/10/15", earnings: 35000 },
  { date: "2021/11/1", earnings: 40000 },
];

const chartTheme = {
  axis: {
    style: {
      tickLabels: {
        fill: "white",
      },
    },
  },
};

const CoinsOverviewChart = ({ width }) => {
  const { themeMode } = useSettings();
  return (
    <div>
      <VictoryChart
        domainPadding={{ x: 20, y: 10 }}
        theme={chartTheme}
        height={300}
        standalone={true}
        width={width}
      >
        <svg style={{ position: "absolute" }}>
          <defs>
            <filter id="filter" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="10" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
        </svg>
        <VictoryLine
          style={{
            data: {
              stroke: "#49B659",
              strokeWidth: "5px",
              filter: "url(#filter)"
            },
          }}
          data={predictionData}
          x="month"
          interpolation="monotoneX"
          y="earnings"
        />
        <VictoryAxis
          tickFormat={(x) => null}
          style={{
            grid: {
              stroke: "transparent",
            },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default CoinsOverviewChart;
