import React, { useState } from 'react'
import { ChartWrap, ChartHeader, BorgChart, TimeButtons } from './Parts'
import { borgChartData } from '@lib'

// -------------- Typescript declarations -------------- //

interface ChartProps {
  marketTimeFrames: {
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const MarketChart = ({ marketTimeFrames }:ChartProps) => {
  const chartData = borgChartData()
  const [ currentData, setCurrentData ] = useState('24h')

  return(

    <ChartWrap>
      <ChartHeader />

      <BorgChart 
        chartData={ chartData } 
        currentData={ currentData }
      />

      <TimeButtons 
        currentData={ currentData } 
        setCurrentData={ setCurrentData }
        buttons={ marketTimeFrames }
      />
    </ChartWrap>

  )
}
