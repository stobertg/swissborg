import React from 'react'
import { styled } from '@theme'

// For the master container of the list component
// This is a bare bones component that allow for general customization of foundational structure

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we set support for the line dividers
  // This will add a border to the bottom of each of the lis within the list

  variants: {
    hasDividers: {
      true: {
        'li': { borderBottom: '1px solid $gray' }
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  hasDividers?: boolean
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const List = ({ 
    hasDividers, // Optional - For the dividers on the bottom of the li's
    children // Required - For the content of the list
  }:ListProps) => {
  
  return(

    <ListWrap {...{ hasDividers }}>
      <ul>{ children }</ul>
    </ListWrap>

  )
}
