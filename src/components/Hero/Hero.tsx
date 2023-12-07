import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const HeroWrap = styled('div', {

})

const HeroContent = styled('div', {

})

const HeroTitle = styled('div', {

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
          <Heading bold size="l5" {...{ title }} />
          <Heading bold size="l3" title={ subTitle } />
        </HeroTitle>

        <HeroChart></HeroChart>
      </HeroContent>
    </HeroWrap>

  )
}
