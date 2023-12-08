import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

// For the master container of the chart header
// This sits above the line chart and holds the token vs USD on the left side of the container

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  borderRadius: '$r0 $r0 0 0',
  borderBottom: '1px solid $borderAlt'
})

// For the container of all of the content within the master container
// This holds the coin comparison on the left of the container and sets the spacing within the container

const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginRight: 12 }
})

// For the container of the token icons on the left of the container
// This holds the icon for USD and the SwissBorg icon on the right, with the arrow icon in the middle

const TokenWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
})

// For the container of the token icons, holind the USD and SwissBorg tokens
// This has the USD fiat icon on the left of the container and the SwissBorg token icon on teh right

const Tokens = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 4 }
})

const Token = styled('div', {

})

// For the container of the right arrow in between the tokens
// This contains the arrow in a circled black container representing the vs to the USD

const Divider = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: 16,
  height: 16,
  borderRadius: '40%',
  background: '$black',
  zIndex: 10,
  img: { width: '50%' }
})

// For the container of the titles to the right of the token icons
// This contains the USD value on top and the percentage change on the bottom of the container

const TokenTitle = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 2 }
})

// -------------- Typescript declarations -------------- //

interface HeaderProps {

}

// ---------- This is the end of declarations ---------- //

export const ChartHeader = ({}:HeaderProps) => {
  return(

    <HeaderWrap>
      <HeaderContent>
        <TokenWrap>
          <Tokens>
            <Token><Icon size="l2" icon="fiat" /></Token>
            <Token><Icon size="l2" icon="fiat" /></Token>
          </Tokens>
          <Divider><Icon size="l1" icon="arrow-right" /></Divider>
        </TokenWrap>
        
        <TokenTitle>
          <Heading size="l1" title="USD 0.188" />
          <Heading size="l0" color="primary" title="+4.8% 24 Hours" />
        </TokenTitle>
      </HeaderContent>
    </HeaderWrap>

  )
}
