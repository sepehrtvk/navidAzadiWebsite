export const GET_CONFIG_URL = () => 'v1/organizations'

export enum OrganizationConfigKeys {
  COMMISSION = 'Commission',
  OTP = 'Otp',
  HIDDEN_BALANCE = 'HiddenBalance',
}

export interface OrganizationConfig {
  description: string | null
  id: number
  key: OrganizationConfigKeys
  type: string
  value: string
}

export interface ConfigDto {
  organization: {
    active: boolean
    configs: OrganizationConfig[]
    description: string | null
    id: number
    organizationCode: string
    title: string
  }
}
