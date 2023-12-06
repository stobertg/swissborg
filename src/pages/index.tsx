import React from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, SupplyChart } from '@components'

const Home: NextPage = () => {
  return (

    <SiteContainer>
      <Block width="medium" bgColor="darkGradient">
        <div>This is the content</div>
      </Block>

      <Block width="medium">
        <SupplyChart 
          title="Breakdown of BORG&apos;s circulating supply"
          stats={[
            { icon: 'token', title: 'Remaining circulating supply', number: 153134595 },
            { icon: 'diamond', title: 'BORG staked', number: 179102513, percentage: 25.43 },
            { icon: 'diamond', title: 'BORG in Yield', number: 362065045, percentage: 51.41 },
            { icon: 'fire', title: 'Circulating supply burned', number: 9901614.29 },
            { icon: 'buyback', title: 'BORG in buyback pool', number: 13456 },
          ]}
        />
      </Block>
    </SiteContainer>

  )
}

export default Home
