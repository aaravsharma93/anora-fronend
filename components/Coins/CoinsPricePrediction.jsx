import React from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLine,
  VictoryGroup,
  VictoryCandlestick,
  Candle,
} from "victory";

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

const predictionDataA = [
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

const CustomCandle = (props) => {
  const {
    data,
    datum,
    index,
    padding,
    polar,
    origin,
    scale,
    style,
    candleHeight,
    x1,
    y1,
    y2,
    x2,
  } = props;

  const isPositive = datum.close > datum.open;

  return (
    <>
      <Candle
        {...props}
        style={{
          ...style,
          stroke: isPositive ? "#49B659" : "#901A1A",
          fill: `url(#grad${isPositive ? "Positive" : "Negative"})`,
        }}
      />
    </>
  );
};

const CoinsPricePRediction = ({ width }) => {
  return (
    <div>
      <svg style={{ position: "absolute" }}>
        <defs>
          <filter id="filter" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="0" dy="10" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="15" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
      </svg>
      <svg style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={`gradPositive`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: "#49B659",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: "#27F4A6",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
      </svg>
      <svg style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={`gradNegative`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: "#901A1A",
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: "#E80101",
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart
        domainPadding={{ x: 20, y: 20 }}
        theme={chartTheme}
        height={450}
        standalone={true}
        width={width}
        scale={{ x: "time" }}
      >
        <VictoryLine
          style={{
            data: {
              stroke: "#F69E21",
              strokeWidth: "5px",
              filter: "url(#filter)",
            },
          }}
          data={predictionData}
          x="month"
          interpolation="monotoneX"
          y="earnings"
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `$${x / 1000}k`}
          style={{
            grid: {
              stroke: "#687292",
            },
          }}
        />

        <VictoryGroup offset={20} colorScale={"qualitative"}>
          <VictoryBar
            style={{
              data: { fill: "#45484C4A", strokeWidth: "2px" },
            }}
            data={data}
            x="month"
            y="earnings"
          />
          <VictoryBar
            style={{
              data: { fill: "#2D30334A", strokeWidth: "2px" },
            }}
            data={data.map((dataItem) => ({
              ...dataItem,
              earnings: dataItem.earnings - 1000,
            }))}
            x="month"
            y="earnings"
          />
        </VictoryGroup>
        <VictoryGroup>
          <VictoryCandlestick
            wickStrokeWidth={1}
            candleWidth={12}
            candleColors={{ positive: "#49B659", negative: "#901A1A" }}
            data={predictionData.map((dataItem) => {
              const isPositive = Math.random() > 0.5;

              return {
                x: dataItem.month,
                open: isPositive
                  ? dataItem.earnings - 4000
                  : dataItem.earnings + 0,
                close: isPositive
                  ? dataItem.earnings + 0
                  : dataItem.earnings - 4000,
                high: dataItem.earnings + 3000,
                low: dataItem.earnings - 6000,
              };
            })}
            x="month"
            dataComponent={<CustomCandle />}
          />
          <VictoryCandlestick
            wickStrokeWidth={1}
            candleWidth={12}
            groupComponent={<g transform="translate(10,10)" />}
            candleColors={{ positive: "#49B659", negative: "#901A1A" }}
            data={predictionData.map((dataItem) => {
              const isPositive = Math.random() > 0.5;

              return {
                x: dataItem.month,
                open: isPositive
                  ? dataItem.earnings + 2000 - 4000
                  : dataItem.earnings + 2000 + 0,
                close: isPositive
                  ? dataItem.earnings + 2000 + 0
                  : dataItem.earnings + 2000 - 4000,
                high: dataItem.earnings + 2000 + 3000,
                low: dataItem.earnings + 2000 - 6000,
              };
            })}
            x="month"
            dataComponent={<CustomCandle />}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default CoinsPricePRediction;
