import React from 'react'
import { styled } from '@theme'

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const BlockContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',

  variants: {
    width: {
      small: { maxWidth: 780, width: '90%' },
      medium: { maxWidth: 1180, width: '90%' },
      large: {}
    },

    bgColor: {
      darkGradient: {
        background: 'linear-gradient(90deg, rgba(25,30,41,1) 0%, rgba(54,64,83,1) 100%)'
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  width?: 'small' | 'medium' | 'large'
  bgColor?: 'darkGradient'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Block = ({ 
    width,
    bgColor,
    children 
  }:BlockProps) => {

  return(

    <BlockWrap>
      <BlockContent {...{ width, bgColor }}>{ children }</BlockContent>
    </BlockWrap>

  )
}
