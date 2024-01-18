export const addCommissionToAmount = (amount: number, percent: number): number =>
  Math.floor(amount + amount * (percent / 100))

export interface UnitAfterCommissionProps {
  amount: number
  buyCommission: number
  buyMaxCommission: number
  unitBuyAmount: number
}

export const calcMaxCommission = (amount: number, percent: number, max: number): number => {
  const newAmount = amount * (percent / 100)
  if (newAmount > max && max > 0) {
    return max
  }
  return amount - amount * (percent / 100)
}

export const getUnitAfterCommission = ({
  amount,
  buyCommission,
  buyMaxCommission,
  unitBuyAmount,
}: UnitAfterCommissionProps) => {
  console.log({ amount })
  if (amount) {
    return Math.floor(calcMaxCommission(amount, buyCommission, buyMaxCommission) / unitBuyAmount)
  }
  return 0
}
