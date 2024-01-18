function upto2Decimal(num: number) {
  if (num > 0) return Math.floor(num * 100) / 100
  return Math.ceil(num * 100) / 100
}

export default upto2Decimal
