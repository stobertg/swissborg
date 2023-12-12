import React from 'react'
import { ChartWrap, ChartHeader, BorgChart, TimeButtons } from './Parts'

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

interface ChartProps {
  borgTokenIcon: string
  borgTokenIconAlt: string
  currentPrice: number
  percentageChange: number
  timeFrame: string
  chartData: ChartData | null
  currentData: string
  setCurrentData: ( timeFrame: string ) => void
  chartTimeFrames: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const MarketChart = ({ 
    borgTokenIcon, // Required - For the SwissBorg Logo / Token Logo
    borgTokenIconAlt, // Required - For a11y reader and seo of the token icon
    currentPrice, // Required - For the current price vs USD
    percentageChange, // Required - For the current percentage change vs USD
    timeFrame, // Required - For the time time frame of the percentage change
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
