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
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  title: string
  subTitle: string
  borgTokenIcon: string
  borgTokenIconAlt: string
  chartData: any
  currentData: any
  setCurrentData: any
  chartTimeFrames: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({ 
    title, // Required - For the main title of the site
    subTitle, // Required - For the subtitle of the site, below the main title
    borgTokenIcon,
    borgTokenIconAlt,
    chartData,
    currentData,
    setCurrentData,
    chartTimeFrames
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
