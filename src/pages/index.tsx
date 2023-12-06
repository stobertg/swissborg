import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block } from '@components'

const Home: NextPage = () => {
  return (

    <SiteContainer>
      <Block bgColor="darkGradient">
        <div>This is the content</div>
      </Block>
    </SiteContainer>

  )
}

export default Home
