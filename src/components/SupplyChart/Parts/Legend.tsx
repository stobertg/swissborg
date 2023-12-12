import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the container of the legend on the bottom of the container
// This contains the colors and the titles of the data in the donut chart above

const DonutLegend = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'relative',
  '> *': { margin: '0 20px 12px 0' },
  '@tablet': { flexDirection: 'column' }
})

// For the container of the individual lengend items in the container
// This holds the color on the left and the title on the right of the container

const LegendItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 8 },
  '> *:last-child': { marginTop: 5 }
})

// For the container of the color on the left of the container, next to the title
// This has a few things here, such as the gradient itself but also an inner and outer shadow

const Color = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 20,
  width: 20,
  height: 20,
  borderRadius: '50%',
  boxShadow: 'inset 2px 0px 2px rgba( 0,0,0, 0.2 )',

  // For the box shadow on the outside of the container
  // This you can see on the left of the color, a bit subtle but like the box shadow on the chart

  '&:after': { 
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxShadow: '-2px 0px 2px rgba( 0,0,0, 0.2 )'
  }
})

// -------------- Typescript declarations -------------- //

interface LegendItemStyle {
  start: string
  end: string
}

interface LegendProps {
  data: {
    style: LegendItemStyle
    title: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Legend = ({ data }:LegendProps) => {
  return(

    <DonutLegend>
      {data.map(( item, i ) => (
        <LegendItem key={`legend-item-${ i }`}>
          <Color style={{ background: `linear-gradient(${ item.style.start }, ${ item.style.end })` }} />
          <Heading title={ item.title } />
        </LegendItem>
      ))}
    </DonutLegend>

  )
}
