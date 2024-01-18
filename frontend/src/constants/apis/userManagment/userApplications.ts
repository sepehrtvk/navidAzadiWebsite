export const GET_USER_APPLICATIONS_URL = (nationalCode: string) =>
  `/v1/user-management/user-applications/${nationalCode}`

export interface UserApplicationsDto {
  levantId: string
  mobile: string
  kiani: boolean
}
