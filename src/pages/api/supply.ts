import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API;

export const getBorgMarketSupply = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/swissborg`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    const circulatingSupply = response.data.market_data.circulating_supply;
    const maxSupply = response.data.market_data.max_supply;

    return {
      circulatingSupply,
      maxSupply
    };
  } catch (error) {
    console.error('Error fetching Swissborg details:', error);
    throw error;
  }
};
