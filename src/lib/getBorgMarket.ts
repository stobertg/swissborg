import { useState, useEffect } from 'react'
import { getBorgMarketSupply } from '../pages/api/supply'

interface ChartData {
  prices24h: [number, number][]
  prices1m: [number, number][]
  prices1y: [number, number][]
  pricesAll: [number, number][]
}

export const useChartData = (): ChartData | null => {
  const [ chartData, setChartData ] = useState<ChartData | null>( null )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgMarketSupply()
        if ( data ) {
          setChartData( data as any )
        }
      } catch (error) {
        console.error( "Error fetching chart data:", error ) 
      }
    };

    fetchData()
  }, [])

  return chartData
}
