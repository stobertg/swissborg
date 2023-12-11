import React, { useRef, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js'
import 'chart.js/auto'

// -------------- Typescript declarations -------------- //

interface DataItem {
  title: string;
  number: number;
}

interface ChartProps {
  data: DataItem[];
}

interface GradientColor {
  start: string;
  end: string;
}

// ---------- This is the end of declarations ---------- //

export const DonutChart = ({ data }: ChartProps) => {
  const chartRef = useRef<ChartJS<'doughnut', number[], string>>(null);
  const chartData = {
    labels: data.map(item => item.title),
    datasets: [{
      label: 'Supply Data',
      data: data.map(item => item.number),
      borderWidth: 0,
      backgroundColor: data.map(() => 'rgba(0, 0, 0, 0.1)'), // Default colors
    }]
  };

  const options = {
    animation: {
      duration: 0
    },
    layout: {
      padding: {
        top: 100,
        right: 100,
        bottom: 100,
        left: 100
      }
    },
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      },
      
    },
    cutout: '70%',
  }

  useEffect(() => {
    const chart = chartRef.current;
  
    if (chart) {
      const ctx = chart.ctx
      const chartArea = chart.chartArea
      const centerX = (chartArea.left + chartArea.right) / 2
      const centerY = ( chartArea.top + chartArea.bottom ) / 2
      const maxRadius = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top) / 2
      const outerRadius = maxRadius;
      const cutoutValue = options.cutout || '50%'
      const cutoutPercentage = parseInt(cutoutValue, 10) / 100
      const innerRadius = outerRadius * cutoutPercentage
  
      if (!chartArea) return;

      const gradientColors: GradientColor[] = [
        { start: 'rgba(173, 149, 255, 1)', end: 'rgba(120, 105, 255, 1)' }, // Purple
        { start: 'rgba(122, 188, 255, 1)', end: 'rgba(45, 149, 255, 1)' }, // Blue
        { start: 'rgba(204, 243, 232, 1)', end: 'rgba(204, 243, 232, 1)' }, // Green solid
        { start: 'rgba(19, 229, 191, 1)', end: 'rgba(1, 195, 141, 1)' }, // Green tint
        { start: 'rgba(54, 64, 83, 1)', end: 'rgba(25, 30, 41, 1)' }, // Black
      ]
  
      const gradients = data.map((_, i) => {
        let gradient = ctx.createRadialGradient(centerX, centerY, innerRadius, centerX, centerY, outerRadius)
        gradient.addColorStop(0, gradientColors[ i ].end)
        gradient.addColorStop(1, gradientColors[ i ].start )
        return gradient
      })

      chart.data.datasets[0].backgroundColor = gradients;
      chart.update();
    }
  }, [data, options.cutout])

  return( 

    <Doughnut 
      ref={chartRef}
      data={ chartData } 
      options={ options } 
      width={ 0.8 }
    />

  )
}
