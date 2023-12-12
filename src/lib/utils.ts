
// We use this function to format currency numbers i.e. 3000000 = 3,000,000 

export const formatNumberWithCommas = ( number:number ) => {
  return Math.floor( number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// We use this function to limit values to one decimal i.e. 3.14159 = 3.1

export const formatToOneDecimal = ( number: number | string ) => {
  return parseFloat( number.toString()).toFixed( 2 )
}

// We use this function to limit values to two decimals i.e. 3.14159 = 3.14

export const formatToTwoDecimals = ( number: number | string ) => {
  return parseFloat( number.toString()).toFixed( 2 )
}

// We use this function to limit values to two decimals i.e. 3.14159 = 3.141

export const formatToThreeDecimals = ( number: number ) => {
  return parseFloat( number.toString()).toFixed( 3 )
}
