export const POST_LOGIN_URL = '/users/login'

export interface LoginDto {
  phone: string
  token: string
  firstName: string
  lastName: string
  userId: string
}
