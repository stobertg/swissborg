import React from 'react'
import { styled } from '@theme'
import { Heading, MarketChart } from '@components'

const HeroWrap = styled('div', {

})

const HeroContent = styled('div', {

})

const HeroTitle = styled('div', {
  position: 'relative',
  width: '100%'
})

const HeroChart = styled('div', {

})

interface HeroProps {
  title: string
  subTitle: string
}

export const Hero = ({ title, subTitle }:HeroProps) => {
  return(

    <HeroWrap>
      <HeroContent>
        <HeroTitle>
          <Heading bold align="center" size="l5" {...{ title }} />
          <Heading align="center" size="l3" title={ subTitle } />
        </HeroTitle>

        <HeroChart>
          <MarketChart />
        </HeroChart>
      </HeroContent>
    </HeroWrap>

  )
}
