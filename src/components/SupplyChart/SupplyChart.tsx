import React from 'react'
import { styled } from '@theme'
import { Grid, Heading, Stats } from '@components'
import { useTabletBreakpoint } from '@lib'
import { DonutChart } from './Parts/DonutChart'

// For the master container of the Chart section of the technical challange
// This component has the title on the top, the data points on the left and the chart that displays the data on the right

const ChartWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we automate the spacing between each of the content blocks in the master container
  // This is made to scale if there are any new additions to the component

  '> *:not(:last-child)': { 
    marginBottom: 72,
    '@tablet': { marginBottom: 32 } 
  }
})

// For the container of the main content showing the stats of the chart
// This contains the SwissBorg coin number data on the left and the donut chart showing those numbers on the right

const ChartContent = styled('div', {
  justifyContent: 'center',
  position: 'relative',
  width: '100%'
})

// For the container of the title on the top of the container
// This holds the h2 tag of the site with the title explaining the rundown of the data chart

const ChartTitle = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of the Chart on the right of the container
// This is a donut chart with chartjs representing the data values on the left of the container

const Chart = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

// For the master container of the stats on the left of the container
// We need this to be able to posiiton this center to the donut chart to the right

const StatWrap = styled('div', {
  position: 'relative',
  marginTop: 20
})

// -------------- Typescript declarations -------------- //

interface ChartProps {
  title: string
  chartData: any
  stats: {
    title: string
    icon: string
    number: number
    percentage?: number
  }[]
}

// ---------- This is the end of declarations ---------- //

export const SupplyChart = ({ 
    title, // Required - For the title of the section
    stats, // Required - For the stats on the chart (left side of container)
    chartData // Required - For the data of the donut chart, populated by the stats
  }:ChartProps) => {
  
  const isTablet = useTabletBreakpoint()

  return(

    <ChartWrap>
      <ChartTitle>
        <Heading 
          htag="2" 
          bold 
          size="l4" 
          align="center" 
          title={
            <>
              { isTablet && <>BORG Buyback performance </> }
              <>{ title }</>
            </>
          }
        />
      </ChartTitle>

      <ChartContent>
        <Grid 
          columns={ 2 }
          tabletColumns={ 1 } 
          columnGap="l3" 
        >
          <StatWrap><Stats {...{ stats }} /></StatWrap>
          <Chart><DonutChart data={ chartData } /></Chart>
        </Grid>
      </ChartContent>
    </ChartWrap>

  )
}
