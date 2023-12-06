import React from 'react'
import { styled } from '@theme'
import { Grid, Heading, Stats } from '@components'

const ChartWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '> *:not(:last-child)': { marginBottom: 72 }
})

const ChartContent = styled('div', {
  justifyContent: 'center',
  position: 'relative',
  width: '100%'
})

const ChartTitle = styled('div', {

})

const Chart = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

const ChartMain = styled('div', {
  position: 'relative',
  width: 428,
  height: 428,
  border: '70px solid $brandPrimary',
  borderRadius: '50%'
})

// -------------- Typescript declarations -------------- //

interface ChartProps {
  title: string
  stats: {
    title: string
    icon: string
    number: number
    numberDescp?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const SupplyChart = ({ 
    title, 
    stats 
  }:ChartProps) => {

  return(

    <ChartWrap>
      <ChartTitle><Heading bold size="l4" align="center" {...{ title }} /></ChartTitle>
      <ChartContent>
        <Grid columns={ 2 } columnGap="l3" verticalAlignment="center">
          <Stats {...{ stats }} />
          <Chart><ChartMain /></Chart>
        </Grid>
      </ChartContent>
    </ChartWrap>

  )
}
