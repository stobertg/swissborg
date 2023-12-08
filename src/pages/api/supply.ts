// import axios from 'axios';

// const BASE_URL = 'https://api.coingecko.com/api/v3';
// const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API;

// export const getBorgMarketSupply = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/coins/swissborg`, {
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`
//       }
//     });

//     const circulatingSupply = response.data.market_data.circulating_supply;
//     const maxSupply = response.data.market_data.max_supply;

//     return {
//       circulatingSupply,
//       maxSupply
//     };
//   } catch (error) {
//     console.error('Error fetching Swissborg details:', error);
//     throw error;
//   }
// };


import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API;

export const getBorgMarketSupply = async () => {
  try {
    // Fetch details including circulating and max supply
    const detailResponse = await axios.get(`${BASE_URL}/coins/swissborg`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    const circulatingSupply = detailResponse.data.market_data.circulating_supply;
    const maxSupply = detailResponse.data.market_data.max_supply;

    // Function to fetch market data for different time frames
    const fetchMarketData = async (days:any) => {
      const marketChartUrl = `${BASE_URL}/coins/swissborg/market_chart?vs_currency=usd&days=${days}`;
      const response = await axios.get(marketChartUrl, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      return response.data.prices; // Array of [timestamp, price]
    };

    // Fetch market data for different time frames
    const prices24h = await fetchMarketData('1');
    const prices1m = await fetchMarketData('30');
    const prices1y = await fetchMarketData('365');
    const pricesAll = await fetchMarketData('max'); 

    return {
      circulatingSupply,
      maxSupply,
      prices24h,
      prices1m,
      prices1y,
      pricesAll
    };
  } catch (error) {
    console.error('Error fetching Swissborg details and market data:', error);
    throw error;
  }
};

