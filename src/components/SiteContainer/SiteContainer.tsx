import React from 'react'
import { styled } from '@theme'
import { HeadTags } from '@components'

// For the master container of all of the content within the SwissBorg site
// This contains the master parent, as well and the headtags within the <head> part of the HTML

const SiteWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface SiteProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const SiteContainer = ({ children }:SiteProps) => {
  return(

    <SiteWrap>
      <HeadTags />
      { children }
    </SiteWrap>

  )
}
