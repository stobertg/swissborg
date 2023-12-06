import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%',

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
    hasDividers,
    children 
  }:ListProps) => {
  
  return(

    <ListWrap {...{ hasDividers }}>
      <ul>
        { children }
      </ul>
    </ListWrap>

  )
}
