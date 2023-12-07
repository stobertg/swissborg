import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { customLabel } from './CustomLabels'

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
  }

  const options = {
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: true
      }
    }
  }

  return( 

    <Doughnut 
      data={ chartData } 
      options={ options } 
      plugins={[ customLabel ]} 
    />

  )
}
