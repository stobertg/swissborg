import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { formatToOneDecimal, formatToThreeDecimals } from '@lib'

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

const TokenHex = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 29,
  height: 32,
  maskImage: 'url(/assets/hex.svg)',
  maskRepeat: 'no-repeat',

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
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
  borderRadius: '50%',
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
  borgTokenIcon: string
  borgTokenIconAlt: string
  currentPrice: number
  percentageChange: number
  timeFrame: string
} 

// ---------- This is the end of declarations ---------- //

export const ChartHeader = ({ 
    borgTokenIcon, 
    borgTokenIconAlt,
    currentPrice,
    percentageChange,
    timeFrame
  }:HeaderProps) => {

  let percentageChangeColor = percentageChange < 0 ? 'negative' : 'primary';

  return(

    <HeaderWrap>
      <HeaderContent>
        <TokenWrap>
          <Tokens>
            <Icon size="l2" icon="fiat" />
            <TokenHex><img src={ borgTokenIcon } alt={ borgTokenIconAlt } /></TokenHex>
          </Tokens>
          <Divider><Icon size="l1" icon="arrow-right" /></Divider>
        </TokenWrap>
        
        <TokenTitle>
          <Heading 
            size="l1" 
            title={ currentPrice !== undefined ? 'USD' + ' ' + formatToThreeDecimals( currentPrice ) : 'N/A' } 
          />

          <Heading 
            size="l0" 
            color={ percentageChangeColor }
            title={ formatToOneDecimal( percentageChange ) + `% ${ timeFrame } ` }
          />
        </TokenTitle>
      </HeaderContent>
    </HeaderWrap>

  )
}
