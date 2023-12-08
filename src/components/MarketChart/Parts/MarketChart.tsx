import React from 'react'
import { styled } from '@theme'
import { BorgChartData } from '../Data'

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
    chartData,
    currentData
  }:ChartProps) => {

  return(

    <ChartWrap>
      { chartData && ( 
        <BorgChartData {...{ chartData, currentData }} /> 
      )}
    </ChartWrap>

  )
}
