import React from 'react'
import { styled } from '@theme'
import { List, Heading, Icon } from '@components'

const Stat = styled('div', {

})

const StatTitle = styled('div', {

})

const StatNumber = styled('div', {

})

// -------------- Typescript declarations -------------- //

interface StatProps {
  stats: {
    title: string
    icon: string
    number: number
    numberDescp?: string
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Stats = ({ stats }:StatProps) => {
  return(

    <List>
      { stats.map(( stat, i ) => (

        <li key={`stat-${ i }`}>
          <Stat>
            <StatTitle>
              <Icon icon={ stat.icon } />
              <Heading title={ stat.title } />
            </StatTitle>

            <StatNumber>
              <Heading bold color="primary" title={ stat.number } />
              { stat.numberDescp && ( <Heading color="primary" title={ stat.numberDescp } /> )}
            </StatNumber>
          </Stat>
        </li>

      ))}  
    </List>

  )
}
