import axios from 'axios'

const BASE_URL = 'https://api.coingecko.com/api/v3'
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API

export const getBorgMarketData = async () => {
  try {
    const response = await axios.get(`${ BASE_URL }/coins/swissborg/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: '1',
      },
      headers: {
        'Authorization': `Bearer ${ API_KEY }`
      }
    })

    return response.data;
  } catch (error) {
    console.error('Error fetching Ethereum market data:', error)
    throw error;
  }
};
