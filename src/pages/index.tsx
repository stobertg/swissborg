import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, SupplyChart } from '@components'
import { getBorgMarketSupply } from './api/supply'
import { borgChartData } from '@lib'

const Home: NextPage = () => {
  const [ supplyInfo, setSupplyInfo ] = useState({ 
    circulatingSupply: 0, 
    maxSupply: 0,
    metadata: {
      image: { small: '' },
      name: '',
      market_data: { 
        current_price: { usd: 0 },
        price_change_percentage_1h_in_currency: { usd: 0 }
      }
    }
  })
  const chartData = borgChartData()
  const [ currentData, setCurrentData ] = useState('24h')
  const borgIconUrl = supplyInfo.metadata.image.small
  const borgIconAlt = supplyInfo.metadata.name
  const currentPrice = supplyInfo.metadata.market_data.current_price.usd
  const changePercentage24hr = supplyInfo.metadata.market_data.price_change_percentage_1h_in_currency.usd
  console.log( changePercentage24hr )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgMarketSupply();
        console.log( data )
        setSupplyInfo(data as any);
      } catch (error) {
        console.error('Error fetching supply data:', error);
      }
    };

    fetchData();
  }, [])

  let remainingSupply = supplyInfo.maxSupply - supplyInfo.circulatingSupply
  let coinsStaked = 179102513
  let stakedPercentage = ( 179102513 / supplyInfo.circulatingSupply ) * 100
  let coinsYeild = 362065045
  let yeildPercentage = ( 362065045 / supplyInfo.circulatingSupply ) * 100
  let coinsBurned = 9901614.29
  let buybackPool = 13456

  return (

    <SiteContainer>
      <Block width="medium" bgColor="darkGradient">
        <Hero 
          title="BORG Token Metrics"
          subTitle="Deep-dive into the statistics of BORG and the mechanics of the full SwissBorg Ecosystem."
          borgTokenIcon={ borgIconUrl }
          borgTokenIconAlt={ borgIconAlt }
          chartData={ chartData }
          currentPrice={ currentPrice }
          percentageChange={ changePercentage24hr }
          timeFrame="24 Hours"
          currentData={ currentData }
          setCurrentData={ setCurrentData }
          chartTimeFrames={[
            { title: '24h' },
            { title: '1m' },
            { title: '1y' },
            { title: 'all' }
          ]}
        />
      </Block>

      <Block width="medium">
        <SupplyChart 
          title="Breakdown of BORG&apos;s circulating supply"
          chartData={[
            { title: 'Remaining circulating supply', number: remainingSupply },
            { title: 'BORG staked', number: coinsStaked },
            { title: 'BORG in Yield', number: coinsYeild },
            { title: 'Circulating supply burned', number: coinsBurned },
            { title: 'BORG in buyback pool', number: buybackPool }
          ]}
          stats={[
            { icon: 'token', title: 'Remaining circulating supply', number: remainingSupply },
            { icon: 'diamond', title: 'BORG staked', number: coinsStaked, percentage: stakedPercentage },
            { icon: 'diamond', title: 'BORG in Yield', number: coinsYeild, percentage: yeildPercentage },
            { icon: 'fire', title: 'Circulating supply burned', number: coinsBurned },
            { icon: 'buyback', title: 'BORG in buyback pool', number: buybackPool },
          ]}
        />
      </Block>
    </SiteContainer>

  )
}

export default Home
