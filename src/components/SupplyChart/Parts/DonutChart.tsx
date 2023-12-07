import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

interface DataItem {
  title: string;
  number: number;
}

interface ChartProps {
  data: DataItem[];
}

export const DonutChart = ({ data }: ChartProps) => {
  const chartData = {
    labels: data.map((item: DataItem) => item.title),
    datasets: [{
      label: 'Supply Data',
      data: data.map((item: DataItem) => item.number),
      backgroundColor: [
        'red',
        'blue',
        'green',
        'yellow',
        'purple'
      ],
      borderWidth: 1,
    }]
  };

  return <Doughnut data={chartData} />;
};

export default DonutChart;
