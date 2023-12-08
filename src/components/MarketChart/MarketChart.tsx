import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@theme'
import { ChartHeader } from './Parts/Header'
import { Line } from 'react-chartjs-2'
import { getBorgMarketSupply } from '../../pages/api/supply'
import { ChartOptions } from 'chart.js'
import 'chart.js/auto'

const ChartWrap = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '90%',
  margin: '0 auto',
  borderRadius: '$r0',
  boxShadow: '0 10px 20px rgba( 0,0,0, 0.3 )'
})

const ChartContent = styled('div', {

})

const ChartMain = styled('div', {
  height: 300,
  background: '$black',
})

const TimeFrameButton = styled('button', {
  
})

interface ChartProps {

}

export const MarketChart = ({}:ChartProps) => {
  const [chartData, setChartData] = useState<any>(null);
  const [currentData, setCurrentData] = useState('24h');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgMarketSupply();
        if (data) {
          setChartData(data);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);

  const selectTimeFrame = (timeFrame:any) => {
    setCurrentData(timeFrame);
  };

  const createDataset = (dataPoints:any ) => ({
    label: `Price (${currentData})`,
    data: dataPoints?.map((p: [number, number]) => p[1]) || [],
    borderColor: 'rgb(1, 195, 141)',
    backgroundColor: 'rgba( 1, 195, 141, 0.5 )',
    fill: true,
    pointRadius: 0,
    tension: 0.5,
  })

  const currentDataset = () => {
    if (!chartData) return createDataset([]);

    switch (currentData) {
      case '24h':
        return createDataset(chartData.prices24h);
      case '1m':
        return createDataset(chartData.prices1m);
      case '1y':
        return createDataset(chartData.prices1y);
      case 'all':
        return createDataset(chartData.pricesAll);
      default:
        return createDataset(chartData.prices24h);
    }
  };

  const chartDisplayData = {
    labels: chartData ? chartData.prices24h.map((p: [number, number]) => new Date(p[0]).toLocaleDateString()) : [],
    datasets: [currentDataset()]
  };

  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    layout: {
      padding: { 
        top: 32
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 6, 
          autoSkip: true,
          align: 'inner',
          color: '#fff',
          padding: 10
        },
        afterBuildTicks: function(scale) {
          let ticks = scale.ticks
  
          if (ticks.length > 6) {
            const interval = Math.floor(ticks.length / 5)
            
            const selectedTicks = [
              ticks[0],
              ...Array.from({ length: 4 }, (_, i) => ticks[(i + 1) * interval]),
              ticks[ticks.length - 1]
            ]
  
            scale.ticks = selectedTicks
          }
        }
      },
      y: {
        position: 'right',
        border: {
          display: false
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          maxTicksLimit: 5, 
          mirror: true,
          align: 'center',
          color: '#fff',
          padding: 0
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  }

  return(

    <ChartWrap>
      <ChartContent>
        <ChartHeader />
        <ChartMain>
          {/* { chartData && <Line data={ chartData } options={ options } /> } */}
          { chartData && <Line data={ chartDisplayData } options={ options } /> }
        </ChartMain>
        <div>
          <TimeFrameButton onClick={() => selectTimeFrame('24h')}>24h</TimeFrameButton>
          <TimeFrameButton onClick={() => selectTimeFrame('1m')}>1m</TimeFrameButton>
          <TimeFrameButton onClick={() => selectTimeFrame('1y')}>1y</TimeFrameButton>
          <TimeFrameButton onClick={() => selectTimeFrame('24h')}>All</TimeFrameButton>
        </div>
      </ChartContent>
    </ChartWrap>

  )
}
