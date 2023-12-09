import { useState, useEffect } from 'react'
import { getBorgMarketSupply } from '../pages/api/supply'

export const useTokenMetadata = () => {
  const [metadata, setMetadata] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgMarketSupply()
        if (data) {
          setMetadata(data as any)
        }
      } catch (error) {
        console.error("Error fetching token metadata:", error)
      }
    };

    fetchData()
  }, [])

  return metadata
}
