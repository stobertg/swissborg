import { useState, useEffect } from 'react'
import { getBorgTokenData } from '../pages/api/coinGecko'

// -------------- Typescript declarations -------------- //

interface ChartData {
  prices24h: [ number, number ][]
  prices1m: [ number, number ][]
  prices1y: [ number, number ][]
  pricesAll: [ number, number ][]
}

interface TokenInfo {
  circulatingSupply: number
  maxSupply: number
  metadata: {
    name: string
    image: { small: string }
    market_data: {
      current_price: { usd: number }
      price_change_percentage_1h_in_currency: { usd: number }
      price_change_percentage_30d_in_currency: { usd: number }
    }
  }
}

// ---------- This is the end of declarations ---------- //

export const useChartData = (): { chartData: ChartData | null, tokenInfo: TokenInfo | null } => {
  const [ tokenInfo, setTokenInfo ] = useState<TokenInfo | null>( null )
  const [ chartData, setChartData ] = useState<ChartData | null>( null )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgTokenData();
        if ( data ) {
          setChartData({
            prices24h: data.prices24h,
            prices1m: data.prices1m,
            prices1y: data.prices1y,
            pricesAll: data.pricesAll
          });
          setTokenInfo({
            circulatingSupply: data.circulatingSupply,
            maxSupply: data.maxSupply,
            metadata: data.metadata
          });
        }
      } catch ( error ) {
        console.error( "Error fetching data:", error )
      }
    };

    fetchData()
  }, [])

  return { chartData, tokenInfo }
}
