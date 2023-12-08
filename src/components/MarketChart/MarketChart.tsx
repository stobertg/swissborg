import React, { useState } from 'react'
import { ChartWrap, ChartHeader, BorgChart, TimeButtons } from './Parts'
import { borgChartData } from '@lib'

// -------------- Typescript declarations -------------- //

interface ChartProps {

}

// ---------- This is the end of declarations ---------- //

export const MarketChart = ({}:ChartProps) => {
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
        buttons={[
          { title: '24h' },
          { title: '1m' },
          { title: '1y' },
          { title: 'all' }
        ]}
      />
    </ChartWrap>

  )
}
