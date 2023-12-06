import React from 'react'
import { styled } from '@theme'

// For the master container of the icons
// Icons are used in various parts of the size, such as buttons, steps, static, ect

const IconWrap = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 30,
  pointerEvents: 'none',
  overflow: 'hidden',

  // For the size of the svg to sit in the center of the container
  // This also changes the color to inheit the parent color 

  svg: {
    position: 'absolute',
    width: '108%',
    fill: 'CurrentColor'
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  color?: 'primary'
  icon?: string
  iconAlt?: string
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({
    color,
    icon
  }: IconProps ) => {
  
  return(

    <IconWrap {...{ color }}>
      <svg>
        <use 
          xlinkHref={ `/global/icons/icons.svg#${ icon }` }
          xlinkTitle={ icon } 
        />
      </svg>
    </IconWrap>
    
  )
}
