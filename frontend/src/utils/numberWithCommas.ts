const numberWithCommas = (number?: number | string) => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return ''
}

export const removeCommas = (str: string): number => {
  return Number(str.replace(/,/g, ''))
}

export default numberWithCommas
