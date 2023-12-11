import React, { useState } from 'react'
import type { NextPage } from 'next'
import { SiteContainer, Block, Hero, SupplyChart } from '@components'
import { borgTokenData, getOneYearChange, getAllTimeChange } from '@lib'

const Home: NextPage = () => {
  const { chartData, supplyInfo } = borgTokenData()
  const [ currentData, setCurrentData ] = useState( '24h' )

  const borgIconUrl = supplyInfo?.metadata.image.small || ''
  const borgIconAlt = supplyInfo?.metadata.name || ''
  let currentPrice = supplyInfo?.metadata.market_data.current_price.usd || 0
  let changePercentage24hr = supplyInfo?.metadata.market_data.price_change_percentage_1h_in_currency.usd || 0
  let changePercentage30d = supplyInfo?.metadata.market_data.price_change_percentage_30d_in_currency.usd || 0
  let changePercentage1y = chartData && chartData.prices1y ? getOneYearChange( chartData.prices1y, chartData.prices24h ) : 0
  let changePercentageAllTime = chartData && chartData.pricesAll ? getAllTimeChange( chartData.pricesAll ) : 0

  let remainingSupply = supplyInfo ? supplyInfo.maxSupply - supplyInfo.circulatingSupply : 0
  let coinsStaked = 179102513
  let stakedPercentage = supplyInfo ? (coinsStaked / supplyInfo.circulatingSupply) * 100 : 0
  let coinsYeild = 362065045
  let yeildPercentage = supplyInfo ? (coinsYeild / supplyInfo.circulatingSupply) * 100 : 0
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
          percentageChange={ 
            currentData === '24h' ? changePercentage24hr : 
            currentData === '1m' ? changePercentage30d : 
            currentData === '1y' ? changePercentage1y : 
            changePercentageAllTime
          }
          timeFrame={ 
            currentData === '24h' ? '24 Hours' :
            currentData === '1m' ? '1 Month' :
            currentData === '1y' ? '1 Year' : 
            'All time' 
          }
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
            { icon: 'buyback', title: 'BORG in buyback pool', number: buybackPool }
          ]}
        />
      </Block>
    </SiteContainer>

  )
}

export default Home
