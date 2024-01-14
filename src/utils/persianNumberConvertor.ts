const persianNumberConvertor = (number?: number | string) => {
  if (!number) {
    return ''
  }
  return number.toString().replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
}

export default persianNumberConvertor
