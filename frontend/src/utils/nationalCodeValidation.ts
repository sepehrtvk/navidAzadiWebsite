function validateNationalCode(code?: string): boolean {
  let input = code
  if (input) {
    const L = input.length

    if (L < 8 || parseInt(input, 10) === 0) return false
    input = `0000${input}`.substr(L + 4 - 10)
    if (parseInt(input.substr(3, 6), 10) === 0) return false
    const c = parseInt(input.substr(9, 1), 10)
    let s = 0
    for (let i = 0; i < 9; i += 1) s += parseInt(input.substr(i, 1), 10) * (10 - i)
    s %= 11
    return (s < 2 && c === s) || (s >= 2 && c === 11 - s)
  }
  return false
}

export default validateNationalCode
