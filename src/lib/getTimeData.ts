export const calculatePercentageChange = ( oldPrice: number, newPrice: number ) => {
  return (( newPrice - oldPrice ) / oldPrice ) * 100
}

// Get the percentage data for the 24 hour change vs USD

export const get24HourChange = ( prices24h: [ number, number ][] ) => {
  if ( prices24h.length < 2 ) return 0

  const firstPrice = prices24h[ 0 ][ 1 ]
  const lastPrice = prices24h[ prices24h.length - 1 ][ 1 ]

  return calculatePercentageChange( firstPrice, lastPrice )
}

// Get the percentage data for the 1 month change vs USD

export const getOneMonthChange = ( prices1m: [ number, number ][] ) => {
  if ( prices1m.length < 2 ) return 0

  const priceOneMonthAgo = prices1m[ 0 ][ 1 ]
  const currentPrice = prices1m[ prices1m.length - 1 ][ 1 ]

  return calculatePercentageChange( priceOneMonthAgo, currentPrice )
}

// Get the percentage data for the 1 year change vs USD

export const getOneYearChange = ( prices1y: [ number, number ][] ) => {
  const oneYearAgoPrice = prices1y[ 0 ][ 1 ]
  const latestPrice = prices1y[ prices1y.length - 1 ][ 1 ]

  return calculatePercentageChange( oneYearAgoPrice, latestPrice )
}

// Get the percentage data for the all time change vs USD

export const getAllTimeChange = ( pricesAll: [ number, number ][] ) => {
  const earliestPrice = pricesAll[ 0 ][ 1 ]
  const latestPrice = pricesAll[ pricesAll.length - 1 ][ 1 ]

  return calculatePercentageChange( earliestPrice, latestPrice )
}

// For finding the change percentage for the different time frames

type ChartData = {
  prices24h?: [number, number][];
  prices1m?: [number, number][];
  prices1y?: [number, number][];
  pricesAll?: [number, number][];
};

// Update the getChangePercentage function
export const getChangePercentage = (
  data: ChartData | null,
  timeframe: keyof ChartData,
  changeFunction: (prices: [number, number][]) => number
): number => {
  return data && data[timeframe] ? changeFunction(data[timeframe]!) : 0;
};