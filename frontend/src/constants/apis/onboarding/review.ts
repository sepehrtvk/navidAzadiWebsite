export const ONBOARDING_GET_SEJAM_INFO = (applicationId: string) =>
  `/v1/user-management/sjm/fetchDataFromSejam/preview/${applicationId}`
export const ONBOARDING_CONFIRM_SEJAM_INFO = (applicationId: string) =>
  `/v1/user-management/sjm/fetchDataFromSejam/confirm/${applicationId}`

export interface PrivatePerson {
  birthDate: string
  fatherName: string
  firstName: string
  lastName: string
  gender: 'Male' | 'Female'
  seriShChar: string
  seriSh: string
  serial: string
  shNumber: string
  placeOfIssue: string
  placeOfBirth: string
}
export interface Address {
  postalCode: string
  country: {
    id: number
    name: string
  }
  province: {
    id: number
    name: string
  }
  city: {
    id: number
    name: string
  }
  cityPrefix: string
  remnantAddress: string
  alley: string
  plaque: string
  tel: string
  mobile: number | null
  email: string
}

export type OnboardingAccountType =
  | 'SavingAccount'
  | 'CurrentAccount'
  | 'LongTermAccount'
  | 'ShortTermAccount'
export interface Accounts {
  accountNumber: string
  type: OnboardingAccountType
  sheba: string
  bank: {
    id: number
    name: string
  }
  branchCode: string
  branchName: string
  branchCity: {
    id: number
    name: string
  }
  isDefault: boolean
  typeTitle: string
}

export const onboardingAccountTypesInPersian: {
  [key in OnboardingAccountType]: string
} = {
  SavingAccount: 'قرض الحسنه',
  CurrentAccount: 'جاری',
  LongTermAccount: 'بلندمدت',
  ShortTermAccount: 'کوتاه مدت',
}

export interface AddAccountType extends Accounts {
  branchProvince: number
}

export interface SejamDataPreviewDto {
  privatePerson: PrivatePerson
  uniqueIdentifier: string
  mobile: number
  addresses: Array<Address>
  accounts: Array<Accounts>
}
