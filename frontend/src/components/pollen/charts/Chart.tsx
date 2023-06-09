import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import useMediaQuery from "@mui/material/useMediaQuery";

import { BarChart, Bar, Cell } from "recharts";
import MobileView from "./MobileView";

interface ChartsData {
  date: string;
  value: number | undefined;
}

interface ChartProps {
  chartData: ChartsData[] | undefined;
}

const Chart = (props: ChartProps) => {
  const dataNotExisting = !props.chartData?.find((d) => d.value !== 0);
  const smallScreen = useMediaQuery("(max-width:700px)");

  const getPath = (x: any, y: any, width: any, height: any) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props: any) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  // LOAD IF DOSENT EXIST ANY DATA (POLLEN)
  if (dataNotExisting)
    return (
      <div className='no-pollen-message'>There were no pollen at this time</div>
    );

  // LOAD VERTICAL CHART FOR MOBILE SCREEN
  if (smallScreen) return <MobileView chartData={props.chartData} />;

  return (
    <>
      <ResponsiveContainer width='100%' height={400}>
        <AreaChart
          width={500}
          height={400}
          data={props.chartData}
          style={{ paddingTop: "40px" }}
        >
          <Area type='monotone' dataKey='value' />
          <XAxis dataKey='date' />
          <YAxis dataKey='value' />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          data={props.chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{ paddingTop: "60px" }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Bar
            dataKey='value'
            fill='#8884d8'
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {props.chartData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
