import React from 'react'
import { styled } from '@theme'
import { HeadTags } from '@components'

// For the master container of all of the content within the SwissBorg site

const SiteWrap = styled('div', {

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
