import React from "react";
import { arc } from "d3-shape";

const SemiChart = () => {
  const strongSellArc = arc()
    .innerRadius(1)
    .outerRadius(0.95)
    .startAngle(-Math.PI / 2)
    .endAngle((-Math.PI * 3) / 10)
    .padAngle(0)
    .cornerRadius(2)();

  const sellArc = arc()
    .innerRadius(1)
    .outerRadius(0.95)
    .startAngle((-Math.PI * 3) / 10 + 0.05)
    .endAngle((-Math.PI * 1) / 10)
    .padAngle(0)
    .cornerRadius(2)();

  const neutralArc = arc()
    .innerRadius(1)
    .outerRadius(0.95)
    .startAngle((-Math.PI * 1) / 10 + 0.05)
    .endAngle((Math.PI * 1) / 10)
    .padAngle(0)
    .cornerRadius(2)();

  const buyArc = arc()
    .innerRadius(1)
    .outerRadius(0.95)
    .startAngle((Math.PI * 1) / 10 + 0.05)
    .endAngle((Math.PI * 3) / 10)
    .padAngle(0)
    .cornerRadius(2)();

  const strongBuy = arc()
    .innerRadius(1)
    .outerRadius(0.95)
    .startAngle(Math.PI * 3 / 10 + 0.05)
    .endAngle(Math.PI / 2)
    .padAngle(0)
    .cornerRadius(2)();

  return (
    <svg viewBox={[-1, -1, 2, 1].join(" ")}>
      <path d={strongSellArc} fill="#901A1A" />
      <path d={sellArc} fill="#E40202" />
      <path d={neutralArc} fill="#707C77" />
      <path d={buyArc} fill="#2DEFA2" />
      <path d={strongBuy} fill="#49B759" />
    </svg>
  );
};

export default SemiChart;
