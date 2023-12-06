import React from 'react'
import { styled } from '@theme'

// For the master container of the heading component, which accounts for all of the titles within the site
// This allows for the structre of the heading, as well as account for font sizes, h tags, colors, and boldness

const HeadingWrap = styled('div', {
  position: 'relative',
  width: '100%',
  strong: '$sansSerifBold',

  // For the variants of the heading, which is able to change the size of the text and the color
  // By default, the font size is 1rem( 16px ) so we can use these to address smaller or larger font sizes

  variants: {
    size: {
      'l0': { fontSize: '$s0', lineHeight: 1.2 }, // 14px
      'l1': { fontSize: '$s1', lineHeight: 1.15 }, // 18px
      'l2': { fontSize: '$s2', lineHeight: 1.15, '@mobile': { fontSize: '$s1' }}, // 22px > 18px
      'l3': { fontSize: '$s3', lineHeight: 1.25, '@mobile': { fontSize: '$s2' }}, // 28px > 22px
      'l4': { fontSize: '$s6', lineHeight: 1.15, '@mobile': { fontSize: '$s4' }}, // 48px > 32px
      'l5': { fontSize: '$s7', lineHeight: 1.05, '@mobile': { fontSize: '$s5' }}  // 80px > 40px
    },

    // For the different colors of the heading - if needed can change to SwissBorg's brand color, such as the numbers
    // By default the color is black, or inherited by the parent container 

    color: {
      primary: { color: '$textSecondary' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  title: string
  htag?: '1' | '2' | '3' | '4'
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5'
  color?: 'primary'
  bold?: boolean
}

// --------------- Heading declarations --------------- //

const HEADING_ELEMENTS = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4'
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    title, // Required - For the heading title, which is what the component is used for
    htag, // Optional - For the htag support for SEO purposes
    size, // Optional - For the different font sizes of the heading
    color, // Optional - For support of brand colors within the heading
    bold // Optional - For the heading to be in bold font
  }:HeadingProps) => {

  const HTag = htag ? HEADING_ELEMENTS[ htag ] : HeadingWrap;

  return(

    <HTag>
      <HeadingWrap {...{ size, color }}>
        { bold ? ( <strong>{ title }</strong> ) : <>{ title }</> }
      </HeadingWrap>
    </HTag>

  )
}
