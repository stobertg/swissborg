import React from 'react'
import { styled } from '@theme'
import { BorgChartData } from '../Data'

// For the master container of the main market chart in the hero section
// This contains the actual data - with the line chart and the data to populate it

const ChartWrap = styled('div', {
  height: 300,
  background: '$black',
})

// -------------- Typescript declarations -------------- //

interface ChartProps {
  chartData: any
  currentData: any
}

// ---------- This is the end of declarations ---------- //

export const BorgChart = ({
    chartData, // Required - For the data of the chart
    currentData // Required - For the current data of the chart
  }:ChartProps) => {

  return(

    <ChartWrap>
      { chartData && ( 
        <BorgChartData {...{ chartData, currentData }} /> 
      )}
    </ChartWrap>

  )
}
