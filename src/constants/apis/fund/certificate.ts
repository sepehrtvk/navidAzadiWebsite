export const FUND_CERTIFICATE = (dsCode: string) => `/v1/funds/${dsCode}/investment-evidence`

export type FundsCertificateDto = {
  address: string
  baseUnitValue: string
  baseUnitValueLetter: string
  birthDate: string
  birthLocation: string
  city: string
  companyCode: string
  conditionsTitle: string
  fatherName: string
  firstName: string
  fundCode: string
  fundDisclaimerUrl: string
  fundLogoUrl: string
  fundSignUrl: string
  fundStampUrl: string
  fundTitle: string
  fundUnitPrice: 1018162
  fundUnitsLetter: string
  fundUnitsNumber: string
  issueLocation: string
  lastName: string
  licenceDate: string | null
  licenceNumber: string | null
  nationalCode: string
  notice: string
  postalCode: string
  province: string
  totalBaseAmount: string
}
