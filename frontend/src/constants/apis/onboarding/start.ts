export const ONBOARDING_START = '/v1/user-management/onboarding/start'
export const ONBOARDING_SEND_SEJAM_OTP = '/v1/user-management/sjm/fetchDataFromSejam'
export const ONBOARDING_GET_SEJAM_OTP = (applicationId: string) =>
  `/v1/user-management/sjm/profiling-otp/${applicationId}`

export enum StartOnboardingError {
  NATIONAL_CODE_AND_MOBILE_PHONE_DOES_NOT_MATCH = 'NATIONAL_CODE_AND_MOBILE_PHONE_DOES_NOT_MATCH',
  SEJAM_SERVICE_ERROR = 'SEJAM_SERVICE_ERROR',
  START_SEJAM_PRODUCT = 'START_SEJAM_PRODUCT',
  PERSON_STATUS_IS_TRACE_CODE = 'PERSON_STATUS_IS_TRACE_CODE',
}

export enum StartOnboardingFor {
  PARENTS = 'PARENTS',
  CHILD = 'CHILD',
  MYSELF = 'MYSELF',
}

export type StageType = 'FETCHSEJAMDATA' | 'ESIGN'

interface ApplicationInfo {
  firstName: string | null
  lastName: string | null
  referrerCode: string | null
  subtitle: string | null
  partyType: string | null
  applicationID: string
  applicationStatus: string | null
  stagingState: string
  stagingDescription: string | null
  currentStage: StageType
  productGroupCode: string | null
  requestedProductGroup: string | null
  levantId: string | null
  rq: boolean | null
  rqDate: string | null
  userId: string | null
  authorizedUserId: string | null
  applicationInfoId: string | null
  productType: string | null
  applicationFinalStatus: string | null
  startOnboardingBy: string | null
  fullName: string | null
  products: Array<string>
}

export interface Stage {
  '@name': string
  stageType: string
  order: number
  title: string
  state: string
  isEnabled: boolean
  data: {
    attempt: number
    lock: boolean
    lastTryDate: string | null
    isFetch: boolean
    fetch: boolean
    documents?: Array<{
      files: Array<{
        fileID: string
        state: 'REJECTED' | 'ACCEPTED'
      }>
    }>
  }
}

export interface StartOnboardingDto {
  applicationInfo: ApplicationInfo
  errors: {
    description: string | null
    items: Array<any>
  }
  stages: Array<Stage>
  preCondition: {
    product: string
  }
}
