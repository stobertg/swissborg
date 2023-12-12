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
  pageTitle: string
  content: string
  socialImage: string
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const SiteContainer = ({ 
    pageTitle, // Required - For the title of the page
    content, // Required - For the content explaing the page
    socialImage, // Required - For the image to be shared on social mediums
    children // Required - For the main content of the page
  }:SiteProps) => {

  return(

    <SiteWrap>
      <HeadTags {...{ socialImage, pageTitle, content }} />
      { children }
    </SiteWrap>

  )
}
