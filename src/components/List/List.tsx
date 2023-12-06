import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const ListWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// -------------- Typescript declarations -------------- //

interface ListProps {
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const List = ({ children }:ListProps) => {
  return(

    <ListWrap>
      <ul>
        { children }
      </ul>
    </ListWrap>

  )
}
