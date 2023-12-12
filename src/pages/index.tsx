import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { Preloader, SiteContainer, Block, Hero, SupplyChart } from '@components'
import { borgTokenData, get24HourChange, getOneMonthChange, getOneYearChange, getAllTimeChange, getChangePercentage } from '@lib'

const Home: NextPage = () => {
  const [ isLoading, setIsLoading ] = useState( true )
  const { chartData, tokenInfo } = borgTokenData()
  const [ currentData, setCurrentData ] = useState( '24h' )

  // For the two second preloader to get everything set
  // Has no functional purpose of loading anything - a bit of a faux loader to make sure the styles don't flicker

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  // For the data of the main line chart within the hero section of the site
  // This shows the overall data concentrated to 24 hours, 1 month, 1 year, and all time

  const borgIconUrl = tokenInfo?.metadata.image.small || ''
  const borgIconAlt = tokenInfo?.metadata.name || ''
  const currentPrice = tokenInfo?.metadata.market_data.current_price.usd || 0
  const changePercentage24hr = getChangePercentage( chartData, 'prices24h', get24HourChange )
  const changePercentage1m = getChangePercentage( chartData, 'prices1m', getOneMonthChange )
  const changePercentage1y = getChangePercentage( chartData, 'prices1y', getOneYearChange )
  const changePercentageAllTime = getChangePercentage( chartData, 'pricesAll', getAllTimeChange )

  // For the data of the donut chart - this shows the data and percentage makeup of the Borg token
  // This populates the numbers on the left of the container and the chart itself of the right

  const coinsStaked = 179102513
  const coinsYeild = 362065045
  const coinsBurned = 9901614.29
  const buybackPool = 13456
  const remainingSupply = tokenInfo ? tokenInfo.maxSupply - tokenInfo.circulatingSupply : 0
  const stakedPercentage = tokenInfo ? (coinsStaked / tokenInfo.circulatingSupply) * 100 : 0
  const yeildPercentage = tokenInfo ? (coinsYeild / tokenInfo.circulatingSupply) * 100 : 0

  return (

    <SiteContainer
      pageTitle="SwissBorg Tech Challange"
      content="Tyler Stober - SwissBorg Technical Challange"
    >
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
            currentData === '1m' ? changePercentage1m : 
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
