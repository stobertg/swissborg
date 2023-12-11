import React, { useRef, useMemo, useEffect } from 'react'
import { styled } from '@theme'
import { Legend } from './Legend'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js'
import 'chart.js/auto'

// For the master container of the donut container on the left side of the supply chart
// This holds the visual represtation wihtin the donut chart and the legend below the chart

const DonutWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 32 }
})

// For the master container of the donut chart, which shows the data of the current token supply points
// For this we need because we need to account for the drop shadow begind the chart - which isn't a default in chartjs

const DonutMain = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 428,
  height: 428,
  canvas: { posiiton: 'relative', zIndex: 10 },

  // For the shared styling of the outside and inside shadow
  // The outside shadow you can see to the left of the outer rim while the inset shadow in within the circle on the right

  '&:before, &:after': { 
    content: '',
    position: 'absolute',
    width: 'calc( 100% - 150px )',
    height: 'calc( 100% - 150px )',
    border: '75px solid rgba( 0,0,0,0 )',
    borderRadius: '50%',
    zIndex: 0,
  },

  // For the inner shadow you can see on the right of the chart

  '&:before': {
    boxShadow: 'inset -2px 0px 5px rgba( 0,0,0, 0.3 )'
  },

  // For the outer shadow you can see on the left of the chart

  '&:after': {
    boxShadow: '-2px 0px 5px rgba( 0,0,0, 0.3 )',
  },

  // On tablet breakpoint, we will adjust the width and height of the donut chart to be smaller
  // This is so the chart is within the site container on mobile devices

  '@tablet': {
    width: 320,
    height: 320,

    // Since we are adjusting the width and height, we also need to adjust the inner and outer shadows
    // This will make it hug the same width and height of the donut chart

    '&:before, &:after': { 
      width: 'calc( 100% - 112px )',
      height: 'calc( 100% - 112px )',
      border: '56px solid rgba( 0,0,0,0 )'
    }
  }
})

// -------------- Typescript declarations -------------- //

interface DataItem {
  title: string;
  number: number;
}

interface ChartProps {
  data: DataItem[];
}

// ---------- This is the end of declarations ---------- //

export const DonutChart = ({ data }: ChartProps) => {
  const chartRef = useRef<ChartJS<'doughnut', number[], string>>( null )
  const getDefaultGradientColor = () => ({ start: 'rgba(0, 0, 0, 0.1)', end: 'rgba(0, 0, 0, 0.1)' })

  // For the main chart data populating hte donut chart

  const chartData = {
    labels: data.map( item => item.title ),
    datasets: [{
      label: 'Supply Data',
      data: data.map( item => item.number ),
      borderWidth: 0,
      backgroundColor: data.map(() => 'rgba(0, 0, 0, 0.1)')
    }]
  }

  // For the options of the donut chart
  // Here we are just getting rid of a lot of the default attributes and sizing the chart

  const options = {
    animation: { duration: 0 },
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    },
    cutout: '65%'
  }

  // For the gradient colors of the data blocks within the chart data
  // This is for the radial gradient where the lighter is color is on the outer rim and the darker in the inner

  const gradientColors = useMemo(() => [
    { start: 'rgba(173, 149, 255, 1)', end: 'rgba(120, 105, 255, 1)' }, // Purple
    { start: 'rgba(122, 188, 255, 1)', end: 'rgba(45, 149, 255, 1)' }, // Blue
    { start: 'rgba(204, 243, 232, 1)', end: 'rgba(204, 243, 232, 1)' }, // Green solid
    { start: 'rgba(19, 229, 191, 1)', end: 'rgba(1, 195, 141, 1)' }, // Green tint
    { start: 'rgba(54, 64, 83, 1)', end: 'rgba(25, 30, 41, 1)' }, // Black
  ], [])

  // Now that we have all of the gradient colors above, here we map it on the data points within the chart
  // As radial gradients which will allow for the lighter color on the outside and the darker on the inner

  useEffect(() => {
    const chart = chartRef.current
  
    if (chart) {
      const ctx = chart.ctx
      const chartArea = chart.chartArea
      const centerX = ( chartArea.left + chartArea.right ) / 2
      const centerY = ( chartArea.top + chartArea.bottom ) / 2
      const maxRadius = Math.min( chartArea.right - chartArea.left, chartArea.bottom - chartArea.top ) / 2
      const outerRadius = maxRadius;
      const cutoutValue = options.cutout || '50%'
      const cutoutPercentage = parseInt( cutoutValue, 10 ) / 100
      const innerRadius = outerRadius * cutoutPercentage
  
      if ( !chartArea ) return
  
      const gradients = data.map((_, i) => {
        let gradient = ctx.createRadialGradient( centerX, centerY, innerRadius, centerX, centerY, outerRadius )
        gradient.addColorStop( 0, gradientColors[ i ].end )
        gradient.addColorStop( 1, gradientColors[ i ].start )
        return gradient
      })

      chart.data.datasets[ 0 ].backgroundColor = gradients
      chart.update()
    }
  }, [ data, options.cutout, gradientColors ])

  // For the legend info on the bottom of the container
  // Here we needed to a custom legend consiering the color of the circles

  const legendData = data.map((item, index) => {
    const gradientColor = gradientColors[index] || getDefaultGradientColor()
    return {
      title: item.title,
      style: {
        start: gradientColor.start,
        end: gradientColor.end
      }
    }
  })
  
  return( 
  
  <DonutWrap>
    <DonutMain><Doughnut ref={ chartRef } data={ chartData } options={ options } /></DonutMain>
    <Legend data={ legendData } />
  </DonutWrap>

  )
}
