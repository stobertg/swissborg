import React from 'react'
import { styled } from '@theme'
import { List } from '@components'
import { StatBase } from './Parts'

// For the master container of the stat list
// This components holds all of the data

const StatWrap = styled('div', {
  position: 'relative',
  width: '100%'
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
            <StatBase 
              icon={ stat.icon }
              title={ stat.title }
              statNumber={ stat.number }
              statPercentage={ stat.percentage }
            />
          </li>

        ))}  
      </List>
    </StatWrap>

  )
}
