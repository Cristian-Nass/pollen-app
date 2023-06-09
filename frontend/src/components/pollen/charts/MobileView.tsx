import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
  Legend,
} from "recharts";

import { Bar } from "recharts";

interface ChartsData {
  date: string;
  value: number | undefined;
}

interface ChartProps {
  chartData: ChartsData[] | undefined;
}

const MobileView = (props: ChartProps) => {
  return (
    <ResponsiveContainer width='94%' height='100%'>
      <ComposedChart
        layout='vertical'
        width={500}
        height={400}
        data={props.chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        style={{ padding: "20px 10px 10px 10px" }}
      >
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis type='number' />
        <YAxis dataKey='date' type='category' scale='band' />
        <Tooltip />
        <Legend />
        <Bar dataKey='value' barSize={20} fill='#413ea0' />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default MobileView;
