import axios, { AxiosRequestConfig } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const API_KEY = process.env.COINGECKO_API_KEY
const BASE_URL = 'https://api.coingecko.com/api/v3'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const config: AxiosRequestConfig = {
      headers: API_KEY ? { 'Authorization': `Bearer ${API_KEY}` } : {}
    }

    const detailResponse = await axios.get(`${BASE_URL}/coins/swissborg`, config)
    const circulatingSupply = detailResponse.data.market_data.circulating_supply
    const maxSupply = detailResponse.data.market_data.max_supply

    const fetchMarketData = async (days: string) => {
      const marketChartUrl = `${BASE_URL}/coins/swissborg/market_chart?vs_currency=usd&days=${days}`
      const response = await axios.get(marketChartUrl, config)
      return response.data.prices
    };

    const prices24h = await fetchMarketData('1')
    const prices1m = await fetchMarketData('30')
    const prices1y = await fetchMarketData('365')
    const pricesAll = await fetchMarketData('max')

    const aggregatedData = {
      metadata: detailResponse.data,
      circulatingSupply,
      maxSupply,
      prices24h,
      prices1m,
      prices1y,
      pricesAll
    };

    res.status(200).json(aggregatedData)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from CoinGecko' })
  }
}
