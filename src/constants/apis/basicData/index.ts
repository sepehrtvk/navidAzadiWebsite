export const GET_BASIC_DATA_URL = 'v1/basic-data'

export interface BankDataType {
  cardToCard: boolean
  design: {
    primaryColor: string
    secondaryColor: string
    textColor: string
    backgroundColor: string
  }
  id: string
  iin: string[]
  iinLenght: number
  logo: string
  logoV2: string
  minTransaction: number
  name: string
  regex: string
}

export interface stagingDescriptionItemType {
  stagingState: string
  stagingTitle: string
}

export interface BasicDataDto {
  values: {
    accountLogUrl: string
    activationUrl: string
    authorize_uri: string
    banks: BankDataType[]
    changePasswordUrl: string
    disabledFeatures: string[]
    neshanLogoutUrl: string
    newStagingDescriptionForHome: string
    postalCodeRegex: string
    stagingDescription: stagingDescriptionItemType[]
    token_uri: string
  }
  version: number
}
