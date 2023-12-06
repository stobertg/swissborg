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
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  icon: string
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({ icon }: IconProps ) => {
  
  return(

    <IconWrap>
      <img src={`/global/icons/individual/${ icon }.svg`} alt={ `${ icon } icon` } />
    </IconWrap>
    
  )
}
