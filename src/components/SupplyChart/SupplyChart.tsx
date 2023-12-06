import React from 'react'
import { styled } from '@theme'
import { Grid, Heading, Stats } from '@components'

const ChartWrap = styled('div', {

})

const ChartContent = styled('div', {

})

const ChartTitle = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface ChartProps {
  title: string
}

// ---------- This is the end of declarations ---------- //

export const SupplyChart = ({ title }:ChartProps) => {
  return(

    <ChartWrap>
      <ChartContent>
        <ChartTitle><Heading size="l4" {...{ title }} /></ChartTitle>
      </ChartContent>
    </ChartWrap>

  )
}
