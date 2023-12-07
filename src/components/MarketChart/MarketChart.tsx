import React, { useState, useEffect } from 'react'
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

interface ChartProps {

}

export const MarketChart = ({}:ChartProps) => {
  const [chartData, setChartData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgMarketSupply()
        if (data && data.prices) {
          setChartData({
            labels: data.prices.map((p: [number, number]) => new Date(p[0]).toLocaleDateString()),
            datasets: [
              {
                label: 'Swissborg Price (USD)',
                data: data.prices.map((p: [number, number]) => p[1]),
                borderColor: 'rgb(1, 195, 141)',
                fill: false,
                pointRadius: 0,
                tension: 0.5
              },
            ],
          })       
        }
      } catch (error) {
        console.error("Error fetching chart data:", error)
      }
    }

    fetchData()
  }, [])

  const options: ChartOptions<'line'> = {
    maintainAspectRatio: false,
    layout: {
      padding: { 
        top: 32,
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
          color: '#fff'
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
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          maxTicksLimit: 5, 
          align: 'center',
          color: '#fff'
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
          { chartData && <Line data={ chartData } options={ options } /> }
        </ChartMain>
      </ChartContent>
    </ChartWrap>

  )
}
