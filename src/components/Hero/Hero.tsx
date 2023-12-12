import React from 'react'
import { styled } from '@theme'
import { Heading, MarketChart } from '@components'

// For the master container of the hero component
// This is on the top of the site, with the title, subtitle, and the chart on the bottom of the container

const HeroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content wihtin the master container
// This holds the title and subtitle on the top and the chart on the bottom of the container

const HeroContent = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 50 }
})

// For the container of the titles on the top of the container 
// This holds the main title on the top and the subtitle below

const HeroTitle = styled('div', {
  position: 'relative',
  width: '100%',
  '@tablet': {
    '> *:not(:last-child)': { marginBottom: 20 }
  }
})

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

interface HeroProps {
  title: string
  subTitle: string
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

export const Hero = ({ 
    title, // Required - For the main title of the site
    subTitle, // Required - For the subtitle of the site, below the main title
    borgTokenIcon, // Required - For the SwissBorg Logo / Token Logo
    borgTokenIconAlt, // Required - For a11y reader and seo of the token icon
    currentPrice, // Required - For the current price vs USD
    percentageChange, // Required - For the current percentage change vs USD
    timeFrame, // Required - For the time time frame of the percentage change
    chartData, // Required - For the API call of the SwissBorg token data
    currentData, // Required - For the default chart value (24hr)
    setCurrentData, // Required - For the ability to change the chart value
    chartTimeFrames // Required - For the buttons to change the time frame
  }:HeroProps) => {

  return(

    <HeroWrap>
      <HeroContent>
        <HeroTitle>
          <Heading bold htag="1" align="center" size="l5" {...{ title }} />
          <Heading htag="2" align="center" size="l3" title={ subTitle } />
        </HeroTitle>

        <MarketChart {...{ 
            borgTokenIcon, 
            borgTokenIconAlt,
            currentPrice,
            percentageChange,
            timeFrame,
            chartTimeFrames, 
            chartData, 
            currentData, 
            setCurrentData 
          }} 
        />
      </HeroContent>
    </HeroWrap>

  )
}
