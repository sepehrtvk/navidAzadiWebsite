export const GET_USER_DETAILS_URL = 'v1/users/me'

export interface OfficeDetailType {
  legal_type: string
  legal_name: string
  legal_id: string
  province_id: string
  province_name: string
  city_id: string
  city_name: string
  zip_code: string
  tel_code: string
  ceo_fname: string
  ceo_lname: string
  ceo_ssn: string
  ceo_cell: string
  ceo_email: string
  code: string
  credit: string
  address: string
  latitude: string
  longitude: string
  tel: string
  fax: string
}

export interface UserDetailDto {
  office: OfficeDetailType
}
