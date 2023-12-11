import React from 'react'
import { styled } from '@theme'

// For the master container of the block component
// This is a foundational component used as a automated block that deals with things such as width and background color

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we account for background support of the block component
  // This is set to take up the full width of the site ( 100vw ) while the content width inside can be variabled

  variants: {
    bgColor: {
      darkGradient: {
        background: 'linear-gradient(90deg, rgba(25,30,41,1) 0%, rgba(54,64,83,1) 100%)',
        color: '$white'
      }
    }
  }
})

// For the container of the all of the content within the master container
// This is for the structure of the content and handle different width options for that content

const BlockContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '100px 0',
  '@tablet': { padding: '75px 0' },

  // Here we account for the different content widths supported
  // This is for the content that is needed to be smaller or larger, depending on the context

  variants: {
    width: {
      small: { maxWidth: 780, width: '90%' },
      medium: { maxWidth: 1180, width: '90%' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  width?: 'small' | 'medium'
  bgColor?: 'darkGradient'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Block = ({ 
    width, // Optional - For the width of the content
    bgColor, // Optional - For the background color of the block content, spanning 100vw
    children // Required - For the content within the block
  }:BlockProps) => {

  return(

    <BlockWrap {...{ bgColor }}>
      <BlockContent {...{ width }}>{ children }</BlockContent>
    </BlockWrap>

  )
}
