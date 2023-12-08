import React, { useState, useEffect } from 'react'
import { styled } from '@theme'
import { ChartHeader, TimeButtons } from './Parts'
import { Options } from './DataConfig'
import { Line } from 'react-chartjs-2'
import { getBorgMarketSupply } from '../../pages/api/supply'
import { ChartOptions } from 'chart.js'
import 'chart.js/auto'

// For the master container of the main market chart in the hero section
// This contains the market data for the BORG coin vs USD with the ability to see the data for 24hrs, 1 month, 1 year, and all

const ChartWrap = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '90%',
  margin: '0 auto',
  borderRadius: '$r0',
  boxShadow: '0 10px 20px rgba( 0,0,0, 0.3 )',
  background: '$bgPrimary',
  overflow: 'hidden'
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
    fill: true,
    pointRadius: 0,
    tension: 0.5,
    backgroundColor: function(context:any) {
      const chart = context.chart;
      const { ctx, chartArea } = chart;

      if (!chartArea) {
          return null;
      }

      const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      gradient.addColorStop(1, 'rgba(1, 195, 141, 0.4)')
      gradient.addColorStop(0, 'rgba(1, 195, 141, 0)')

      return gradient;
    },
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

  return(

    <ChartWrap>
      <ChartContent>
        <ChartHeader />
        <ChartMain>
          { chartData && 
            <Line data={ chartDisplayData } options={ Options } /> 
          }
        </ChartMain>

        <TimeButtons 
          buttons={[
            { title: '24h', onClick: () => selectTimeFrame('24h')},
            { title: '1m', onClick: () => selectTimeFrame('1m')},
            { title: '1y', onClick: () => selectTimeFrame('1y')},
            { title: 'all', onClick: () => selectTimeFrame('all')}
          ]}
        />
      </ChartContent>
    </ChartWrap>

  )
}
