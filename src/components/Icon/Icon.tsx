import React from 'react'
import { styled } from '@theme'

// For the master container of the icons
// Icons are used in various parts of the size, such as buttons, steps, static, ect

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 48,
  height: 48,
  pointerEvents: 'none',
  overflow: 'hidden',

  // For the size of the svg to sit in the center of the container
  // This also changes the color to inheit the parent color 

  svg: {
    position: 'absolute',
    width: '108%',
    fill: 'CurrentColor'
  },

  // For the support of the different sizes of the icon - by default, the icon has a width of 48 
  // We add support for instances where the icons need to be smaller or larger than the default

  variants: {
    size: {
      l0: { width: 16, height: 16 },
      l1: { width: 24, height: 24 },
      l2: { width: 32, height: 32 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  icon: string
  size?: 'l0' | 'l1' | 'l2'
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({ 
    icon, // Required - For the icon in the component
    size // Optional - For the size of the icon
  }: IconProps ) => {
  
  return(

    <IconWrap {...{ size }}>
      <img 
        src={`/global/icons/individual/${ icon }.svg`} 
        alt={ `${ icon } icon` } 
      />
    </IconWrap>
    
  )
}
