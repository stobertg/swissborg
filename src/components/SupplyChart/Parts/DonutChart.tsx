import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { customLabel } from './CustomLabels'

// -------------- Typescript declarations -------------- //

interface DataItem {
  title: string;
  number: number;
}

interface ChartProps {
  data: DataItem[];
}

// ---------- This is the end of declarations ---------- //

export const DonutChart = ({ data }: ChartProps) => {
  const chartData = {
    labels: data.map((item: DataItem) => item.title),
    datasets: [{
      label: 'Supply Data',
      data: data.map((item: DataItem) => item.number),
      borderWidth: 2,
      backgroundColor: [
        'red',
        'blue',
        '$brandPrimary',
        'yellow',
        'purple'
      ],
      
    }]
  }

  const options = {
    animation: {
      duration: 0
    },
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      }
    }
  }

  return( 

    <Doughnut 
      data={ chartData } 
      options={ options } 
      // plugins={[ customLabel ]} 
      width={ 0.8 }
    />

  )
}
