import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Options } from '../Options/Options'
import { useTabletBreakpoint } from '@lib'

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

export const BorgLineChart = ({ 
    chartData, // Required - For the data of the chart
    currentData // Required - For the data of the chart
  }: NewChartComponentProps) => {

   // Here we need to make some changes on mobile for the x axis ticks for readability
   // We remove two ticks for mobile breakpoints and remove 'yyyy' for years and 'dd/mm' for all time 

  const isTablet = useTabletBreakpoint()

  // For the general styling of the line chart, which uses chart js
  // This sets the data points, color of the line, the gradient green color attached to the line, ect.

  const createDataset = ( dataPoints: DataPoint[] ) => ({
    label: `Price (${ currentData })`,
    data: dataPoints.map(( p: DataPoint ) => p[ 1 ]),
    fill: true,
    tension: 0.5,
    pointRadius: 0,
    borderColor: 'rgb( 1, 195, 141 )',
    borderWidth: 2,
    backgroundColor: function( context: any ) {
      const chart = context.chart
      const { ctx, chartArea } = chart
      if ( !chartArea ) { return null }
      const gradient = ctx.createLinearGradient( 0, chartArea.bottom, 0, chartArea.top )
      gradient.addColorStop( 1, 'rgba( 1, 195, 141, 0.4 )' )
      gradient.addColorStop( 0, 'rgba( 1, 195, 141, 0 )' )
      return gradient
    },
  })

  // Here we set the data we want to render on the chart
  // Here we have 24 hr by default and data for 24hrs, 1 Month, 1 Year, and All Time

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
  // This will render the x axis as hour stamps such as 00:00 - 24:00

  const formatDateAsTimestamp = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return hours + ':' + minutes;
  }

  // By default the chart js data is set to American format 'mm/dd/yyyy'
  // Here we customize the date to follow European date standards and customize it to 'dd/mm/yyyy'

  const formatDateEuropean = (date: Date, dataRange: string) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    if (isTablet && (dataRange === '1y' || dataRange === '1m')) {
      return `${day}/${month}`;
    } else if (dataRange === 'all') {
      return year;
    } else {
      return `${day}/${month}/${year}`
    }
  }

  // Based on out formatDateEuropean and the tablet edits, we set the label change in the folling const
  // This will adjust the x axis ticks to render how we need them to
   
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
  }

  // --------- End of the function declarations ---------- //
  
  return ( 
  
    <Line 
      data={ chartDisplayData } 
      options={ Options }
    /> 
    
  )
}
