import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$darkGray',
  borderRadius: '$r0 $r0 0 0',
  borderBottom: '1px solid $gray'
})

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

const TokenWrap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
})

const Tokens = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  '> *:not(:last-child)': { marginRight: 4 }
})

const Token = styled('div', {

})

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

const TokenTitle = styled('div', {
  position: 'relative',
  '> *:not(:last-child)': { marginBottom: 2 }
})

interface HeaderProps {

}

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
