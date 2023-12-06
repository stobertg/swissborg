import React from 'react'
import { styled } from '@theme'
import { List, Heading, Icon } from '@components'

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
  position: 'relative',
  width: '100%',
  padding: '12px 0'
})

// For the container of the title area on the left of the container
// This contains the icon on the left and the title to the right of the icon

const StatTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 12 }
})

// For the container of the number(s) on the right side of the contianer
// This always has the associated number but can be accompanied by a percentage description below

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
            <StatContent>
              <StatTitle>
                <Icon icon={ stat.icon } />
                <Heading size="l3" title={ stat.title } />
              </StatTitle>

              <StatNumber>
                <Heading htag="4" bold color="primary" title={ stat.number } />
                { stat.numberDescp && ( <Heading color="primary" title={ stat.numberDescp } /> )}
              </StatNumber>
            </StatContent>
          </Stat>
        </li>

      ))}  
    </List>

  )
}
