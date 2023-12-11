import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Options } from './'

// -------------- Typescript declarations -------------- //

interface DataPoint {
  [ key: number ]: number
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

  const createDataset = ( dataPoints: DataPoint[] ) => ({
    label: `Price (${ currentData })`,
    data: dataPoints.map(( p: DataPoint ) => p[ 1 ]),
    borderColor: 'rgb( 1, 195, 141 )',
    fill: true,
    pointRadius: 0,
    tension: 0.5,
    borderWidth: 2,
    backgroundColor: function( context: any ) {
      const chart = context.chart
      const { ctx, chartArea } = chart

      if ( !chartArea ) {
        return null
      }

      const gradient = ctx.createLinearGradient( 0, chartArea.bottom, 0, chartArea.top )
      gradient.addColorStop( 1, 'rgba( 1, 195, 141, 0.4 )' )
      gradient.addColorStop( 0, 'rgba( 1, 195, 141, 0 )' )

      return gradient
    },
  })

  const currentDataset = () => {
    if ( !chartData ) return createDataset([])

    switch ( currentData ) {
      case '24h': return createDataset( chartData.prices24h )
      case '1m': return createDataset( chartData.prices1m )
      case '1y': return createDataset( chartData.prices1y )
      case 'all': return createDataset( chartData.pricesAll )
      default: return createDataset( chartData.prices24h )
    }
  }

  // For the 24 hour chart to take in time stamps only - not date stamps 

  const formatDateAsTimestamp = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return hours + ':' + minutes;
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  const formatDateEuropean = (date: Date, dataRange: string) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    if (isMobile && (dataRange === '1y' || dataRange === '1m')) {
      return `${day}/${month}`;
    } else if (dataRange === 'all') {
      return year;
    } else {
      return `${day}/${month}/${year}`
    }
  };
   
   

  const chartDisplayData = {
    labels: chartData 
      ? (currentData === '24h'
        ? chartData.prices24h.map((p: DataPoint) => formatDateAsTimestamp(new Date(p[0])))
        : currentData === '1m'
          ? chartData.prices1m.map((p: DataPoint) => formatDateEuropean(new Date(p[0]), '1m'))
          : currentData === '1y'
            ? chartData.prices1y.map((p: DataPoint) => formatDateEuropean(new Date(p[0]), '1y'))
            : chartData.pricesAll.map((p: DataPoint) => formatDateEuropean(new Date(p[0]), 'all'))
      )
      : [],
    datasets: [ currentDataset() ]
  };
  
  

  return ( 
  
    <Line 
      data={ chartDisplayData } 
      options={ Options } 
    /> 
    
  )
}
