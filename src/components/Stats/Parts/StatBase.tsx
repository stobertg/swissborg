import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { formatNumberWithCommas, formatToTwoDecimals } from '@lib'

// For the master container of the stat list
// This components holds all of the data

const Stat = styled('div', {
  position: 'relative',
  width: '100%'
})

// For the container of all of the content within the master container
// This holds the title on the left and the number on the right of the container

const StatContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '12px 0',
  '> *:not(:last-child)': { marginRight: 12 }
})

// This holds all of the text content within the stats container
// We set this up so that on tablet, the icon can be aligned by itself on the left of the container

const StatMain = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

  // Here we set the rerendering on tablet breakpoints - This will contain the icon on the left and the text to the right
  // We reverse the orientation here - number on top, title below section below

  '@tablet': {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    '*': { textAlign: 'left' },
    '> *:not(:last-child)': { marginTop: 4 }
  }
})

// For the container of the number(s) on the right side of the contianer
// This always has the associated number but can be accompanied by a percentage description below

const StatNumber = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'nowrap',
  position: 'relative',
  textAlign: 'right'
})

// -------------- Typescript declarations -------------- //

interface StatProps {
  icon: string
  title: string
  statNumber: number
  statPercentage?: number
}

// ---------- This is the end of declarations ---------- //

export const StatBase = ({
    icon, 
    title,
    statNumber,
    statPercentage 
  }:StatProps) => {
  
  return(

    <Stat>
      <StatContent>
        <Icon {...{ icon }} />

        <StatMain>
          <Heading size="l2" {...{ title }} />

          <StatNumber>
            <Heading 
              bold 
              htag="4" 
              size="l2" 
              color="primary" 
              title={ formatNumberWithCommas( statNumber )} 
            />

            { statPercentage && ( 
              <Heading 
                size="l1" 
                color="primary" 
                title={ <>&#40;<strong>{ formatToTwoDecimals( statPercentage )}&#37;</strong> of Circulating supply&#41;</> } 
              />
            )}
          </StatNumber>
        </StatMain>
      </StatContent>
    </Stat>

  )
}
