export const calculatePercentageChange = (oldPrice: number, newPrice: number) => {
  return ((newPrice - oldPrice) / oldPrice) * 100;
};

export const getOneYearChange = (prices1y: [number, number][], prices24h: [number, number][]) => {
  const oneYearAgoPrice = prices1y[0][1];
  const latestPrice = prices24h[prices24h.length - 1][1];

  return calculatePercentageChange(oneYearAgoPrice, latestPrice);
};

export const getAllTimeChange = (pricesAll: [number, number][]) => {
  const earliestPrice = pricesAll[0][1];
  const latestPrice = pricesAll[pricesAll.length - 1][1];

  return calculatePercentageChange(earliestPrice, latestPrice);
};
