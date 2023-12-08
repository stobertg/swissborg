import React from 'react'
import { styled } from '@theme'
import { List, Heading, Icon } from '@components'
import { formatNumberWithCommas, formatToTwoDecimals } from '@lib'

// For the master container of the stat list
// This components holds all of the data

const StatWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '@tablet': { 
    border: '1px solid $border'
  }
})

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

const StatMain = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',

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
  stats: {
    title: string
    icon: string
    number: number
    percentage?: number
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Stats = ({ stats }:StatProps) => {
  return(

    <StatWrap>
      <List hasDividers>
        { stats.map(( stat, i ) => (

          <li key={`stat-${ i }`}>
            <Stat>
              <StatContent>
                <Icon icon={ stat.icon } />

                <StatMain>
                  <Heading 
                    size="l2" 
                    title={ stat.title } 
                  />

                  <StatNumber>
                    <Heading 
                      bold 
                      htag="4" 
                      size="l2" 
                      color="primary" 
                      title={ formatNumberWithCommas( stat.number ) } 
                    />

                    { stat.percentage && ( 
                      <Heading 
                        size="l1" 
                        color="primary" 
                        title={ <>&#40;<strong>{ formatToTwoDecimals( stat.percentage )}%</strong> of Circulating supply&#41;</> } 
                      />
                    )}
                  </StatNumber>
                </StatMain>
              </StatContent>
            </Stat>
          </li>

        ))}  
      </List>
    </StatWrap>

  )
}
