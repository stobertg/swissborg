
export const formatNumberWithCommas = ( number:number ) => {
  return Math.floor( number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const formatToOneDecimal = ( number: number | string ) => {
  return parseFloat( number.toString()).toFixed( 2 )
}

export const formatToTwoDecimals = ( number: number | string ) => {
  return parseFloat( number.toString()).toFixed( 2 )
}

export const formatToThreeDecimals = ( number: number ) => {
  return parseFloat( number.toString()).toFixed( 3 )
}
