import React from 'react'
import { styled } from '@theme'

// For the master container of the main market chart in the hero section
// This contains the market data for the BORG coin vs USD with the ability to see the data for 24hrs, 1 month, 1 year, and all

const ChartContain = styled('div', {
  position: 'relative',
  maxWidth: 900,
  width: '90%',
  margin: '0 auto',
  borderRadius: '$r0',
  boxShadow: '0 10px 20px rgba( 0,0,0, 0.3 )',
  background: '$bgPrimary',
  overflow: 'hidden'
})

// For the container of all of the content of the chart, within the master container
// This holds the coin metrics on the top, chart in the middle, and the buttons on the bottom

const ChartContent = styled('div', {
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface WrapProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const ChartWrap = ({ children }:WrapProps) => {
  return(

    <ChartContain>
      <ChartContent>{ children }</ChartContent>
    </ChartContain>

  )
}
