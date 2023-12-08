import { useState, useEffect } from 'react';
import { getBorgMarketSupply } from '../pages/api/supply';

interface ChartData {
  // Define the structure of the chart data here
}

export const BorgMarketData = () => {
  // Specify the types for your state
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBorgMarketSupply();
        setChartData(data);
      } catch (error: any) {
        console.error("Error fetching chart data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { chartData, error };
};

// If you're exporting a hook, it should be named useChartData
export const useChartData = BorgMarketData;  // or you might want to refactor the function name itself
