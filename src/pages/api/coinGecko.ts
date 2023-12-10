// import axios from 'axios';

// const BASE_URL = 'https://api.coingecko.com/api/v3';
// const API_KEY = process.env.NEXT_PUBLIC_COINGECKO_API;

// export const getTokenDetails = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/coins/swissborg`, {
//       headers: {
//         'Authorization': `Bearer ${API_KEY}`
//       }
//     });

//     // Return the complete data object
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching Swissborg details:', error);
//     throw error;
//   }
// };