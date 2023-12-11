import React from 'react'
import { styled } from '@theme'
import BarLoader from "react-spinners/BarLoader"

// For the master container of the loading screen
// This takes up the full width and height of everypage, allowing for the animation to show before the content is loaded

const LoadingWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: '$siteBg',
  zIndex: 9999
})

// ---------- This is the end of declarations ---------- //

export const Preloader = () => {
  return(
    
    <LoadingWrap><BarLoader color="#01c38d" /></LoadingWrap>

  )
}
