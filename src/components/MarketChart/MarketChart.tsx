import React from 'react'
import { ChartWrap, ChartHeader, BorgChart, TimeButtons } from './Parts'

// -------------- Typescript declarations -------------- //

interface ChartProps {
  borgTokenIcon: string
  borgTokenIconAlt: string
  currentPrice: number
  percentageChange: number
  timeFrame: string
  chartData: any
  currentData: any
  setCurrentData: any
  chartTimeFrames: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const MarketChart = ({ 
    borgTokenIcon,
    borgTokenIconAlt,
    currentPrice,
    percentageChange,
    timeFrame,
    chartData, // Required - For the API call of the SwissBorg token data
    currentData, // Required - For the default chart value (24hr)
    setCurrentData, // Required - For the ability to change the chart value
    chartTimeFrames // Required - For the buttons to change the time frame
  }:ChartProps) => {

  return(

    <ChartWrap>
      <ChartHeader {...{ borgTokenIcon, borgTokenIconAlt, currentPrice, percentageChange, timeFrame }} />
      <BorgChart {...{ chartData, currentData }} />
      <TimeButtons buttons={ chartTimeFrames } {...{ currentData, setCurrentData }} />
    </ChartWrap>

  )
}
