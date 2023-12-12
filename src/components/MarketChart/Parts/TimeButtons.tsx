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
  '&:hover': { background: '$buttonHover' },

  // Here we support the color change if the button is currently active in the tab-like structure
  // This will set the background to the hover color and change the text color to the primary brand color

  variants: {
    active: { 
      true: { 
        background: '$buttonHover',
        color: '$textSecondary'
      }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface ButtonsProps {
  currentData: string
  setCurrentData: ( timeFrame: string ) => void
  buttons: { title: string }[]
}

// ---------- This is the end of declarations ---------- //

export const TimeButtons = ({ 
    currentData, // Required - For the data populated in the chart
    setCurrentData, // Required - For the ability to change the data within the chart
    buttons // Required - For the buttons containing the time frames a user can choose for the chart data
  }: ButtonsProps) => {

  return (
    <ButtonWrap>
      { buttons.map(( button, i ) => (

        <Button
          key={`button-${ i }`}
          onClick={ () => setCurrentData( button.title ) }
          active={ currentData === button.title }
        >
          <Heading size="l0" title={ button.title } />
        </Button>

      ))}
    </ButtonWrap>
  )
}