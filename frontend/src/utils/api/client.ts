import axios from 'axios'
import { SESSION_EXPIRED_ROUTE } from '@constants/routes'
import useInvestorStore from '@store/investor'
import useAggregatedStore from '@store/aggregated'

export const client = axios.create({
  baseURL: 'https://navidazadi.me/api/v1',
  timeoutErrorMessage: 'TIMEOUT_ERROR',
  timeout: 60000,
})

client.interceptors.request.use(
  function (config) {
    const tempConfig = config
    // tempConfig.headers['external-levant-id'] = useInvestorStore.getState().profile.levantId
    return tempConfig
  },
  function (error) {
    return Promise.reject(error)
  },
)

client.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      // useInvestorStore.getState().clearProfile()
      // useAggregatedStore.getState().clearAggregatedData()
      window.location.replace(SESSION_EXPIRED_ROUTE)
    } else {
      return Promise.reject(error)
    }
    return null
  },
)

export type ApiResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface ApiConfig {
  baseURL?: string
  responseType?: ApiResponseType
  headers: any
}

export interface RequestProps {
  url: string
  payload?: any
  config?: ApiConfig
}

export const getRequest = async ({ url, config }: RequestProps) => {
  return client.get(url, config)
}

export const postRequest = async ({ url, config, payload }: RequestProps) => {
  return client.post(url, payload, config)
}

export const putRequest = async ({ url, config, payload }: RequestProps) => {
  return client.put(url, payload, config)
}

export const patchRequest = async ({ url, config, payload }: RequestProps) => {
  return client.patch(url, payload, config)
}

export const deleteRequest = async ({ url, config }: RequestProps) => {
  return client.delete(url, config)
}

const api = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  patch: patchRequest,
  delete: deleteRequest,
}

export default api
