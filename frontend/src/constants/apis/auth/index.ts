export const POST_LOGIN_URL = '/users/login'

export interface LoginDto {
  username: string
  token: string
  refreshToken: string
  userRoles: string[]
}
