import React from 'react'
import { Line } from 'react-chartjs-2'
import { Options } from './'

// -------------- Typescript declarations -------------- //

interface DataPoint {
  [key: number]: number
}

interface ChartData {
  prices24h: DataPoint[]
  prices1m: DataPoint[]
  prices1y: DataPoint[]
  pricesAll: DataPoint[]
}

interface NewChartComponentProps {
  chartData: ChartData | null
  currentData: string
}

// ---------- This is the end of declarations ---------- //

export const BorgChartData = ({ 
    chartData, 
    currentData 
  }: NewChartComponentProps) => {

  const createDataset = (dataPoints: DataPoint[]) => ({
    label: `Price (${currentData})`,
    data: dataPoints.map((p: DataPoint) => p[1]),
    borderColor: 'rgb(1, 195, 141)',
    fill: true,
    pointRadius: 0,
    tension: 0.5,
    backgroundColor: function(context: any) {
      const chart = context.chart
      const { ctx, chartArea } = chart

      if (!chartArea) {
        return null
      }

      const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
      gradient.addColorStop(1, 'rgba(1, 195, 141, 0.4)')
      gradient.addColorStop(0, 'rgba(1, 195, 141, 0)')

      return gradient;
    },
  });

  const currentDataset = () => {
    if ( !chartData ) return createDataset([])

    switch ( currentData ) {
      case '24h': return createDataset( chartData.prices24h )
      case '1m': return createDataset( chartData.prices1m )
      case '1y': return createDataset( chartData.prices1y )
      case 'all': return createDataset( chartData.pricesAll )
      default: return createDataset( chartData.prices24h )
    }
  };

  const chartDisplayData = {
    labels: chartData ? chartData.prices24h.map(( p: DataPoint ) => new Date(p[0]).toLocaleDateString()) : [],
    datasets: [ currentDataset() ]
  };

  return ( 
  
    <Line 
      data={ chartDisplayData } 
      options={ Options } 
    /> 
    
  )
}
