import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { BorgLineChart } from './'

// For the master container of the main market chart in the hero section
// This contains the actual data - with the line chart and the data to populate it

const ChartWrap = styled('div', {
  height: 300,
  background: '$black',
})

// For the container of the fallback image that will be in place is the chart is not loading
// This should only mean that the user has lost internet connection and the API is not being called

const ChartFallback = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%'
})

// For the container of all of the content in the center of the master container
// This has the empty icon illustration on the left of the container and the text on the right

const FallbackContent = styled('figure', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: 550,
  width: '90%',
  margin: '0 auto',
  '> *:not(:last-child)': { marginRight: 20 },

  // For the container of the text on the right of the master container
  // This sets the spacing for the text for all breakpoints

  figcaption: { 
    width: '80%', 
    '> *:not(:last-child)': { marginBottom: 4 }
  },

  // On tablet we change the orientation to column format and center the text
  // We also remove the right spacing since it is within a column now

  '@tablet': { 
    flexDirection: 'column',
    textAlign: 'center',
    '> *:not(:last-child)': { marginRight: 0 },
  }
})

// For the container of the image on the left of the container
// This sets the width of the image within the container

const FallbackImage = styled('div', {
  position: 'relative',
  minWidth: 240,
  width: 240,
  '@tablet': { minWidth: 140, width: 140 }
})

// -------------- Typescript declarations -------------- //

interface ChartProps {
  chartData: any
  currentData: any
}

// ---------- This is the end of declarations ---------- //

export const BorgChart = ({
    chartData, // Required - For the data of the chart
    currentData // Required - For the current data of the chart
  }:ChartProps) => {

  return(

    <ChartWrap>
      { chartData ? ( 

        <BorgLineChart {...{ chartData, currentData }} /> 

      ) : (

        <ChartFallback>
          <FallbackContent>
            <FallbackImage>
              <img src="/fallback/chart-empty.svg" alt="SwissBorg Chart Empty illustration" />
            </FallbackImage>

            <figcaption>
              <Heading bold size="l3" title="Waiting for API" />
              <Heading size="l1" title="Waiting for CoinGecko api. If not loading, too many calls have been made on the 'free tier' and will need to wait a min to reload." />
            </figcaption>
          </FallbackContent>
        </ChartFallback>

      )}
    </ChartWrap>

  )
}
