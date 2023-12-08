import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

// For the container of the buttons on the bottom of the chart
// This allows the user to switch between the declared time frames

const ButtonWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

// For the styling of the individual buttons within the container
// These buttons span the full width of the button container

const Button = styled('button', {
  display: 'inline-flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '12px 0',
  textTransform: 'uppercase',
  transition: '$s1',

  '&:hover': { 
    background: '$gray'
  },

  variants: {
    active: { 
      true: { background: '$gray' }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  buttons: {
    title: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }[]
}

// ---------- This is the end of declarations ---------- //

export const TimeButtons = ({ buttons }:ButtonProps) => {
  return(

    <ButtonWrap>
      { buttons.map(( button, i ) => (

        <Button 
          key={`button-${ i }`} 
          onClick={ button.onClick }
        >
          <Heading size="l0" title={ button.title } />
        </Button>

      ))}
    </ButtonWrap>

  )
}
