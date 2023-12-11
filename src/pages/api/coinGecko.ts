import axios from 'axios'

export const getBorgTokenData = async () => {
  try {

    const response = await axios.get('/api/coinGeckoProxy', {
      params: { days: '365' }
    })

    return response.data
  } catch (error) {
    console.error('Error fetching data via proxy:', error)
    throw error
  }
};
