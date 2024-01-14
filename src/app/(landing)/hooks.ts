import { useRouter, useSearchParams } from 'next/navigation'
import useApi from '@utils/api/useApi'
import { POST_LOGIN_URL } from '@constants/apis/user/login'
import { GET_VALIDATE_URL, ValidateDto } from '@constants/apis/user/validate'
import { INVESTOR_LOGIN_ROUTE, PISHKHAN_DISABLED_ROUTE } from '@constants/routes'
import { ConfigDto, GET_CONFIG_URL } from '@constants/apis/user/config'
import useOfficeStore from '@store/office'
import useConfigStore from '@store/config'

export const useLogin = (loginParams: string) => {
  const router = useRouter()

  const params = useSearchParams()
  const setOfficeCode = useOfficeStore(store => store.setOfficeCode)
  const setConfig = useConfigStore(store => store.setConfig)

  const {
    loading: configLoading,
    error: configError,
    fetch: configFetch,
  } = useApi<ConfigDto>({
    lazy: true,
    url: GET_CONFIG_URL(),
    onSuccess: data => {
      setConfig(data)
      router.push(INVESTOR_LOGIN_ROUTE)
    },
  })

  const {
    loading: validateLoading,
    error: validateError,
    fetch: validateFetch,
  } = useApi<ValidateDto>({
    lazy: true,
    url: GET_VALIDATE_URL,
    onSuccess: data => {
      if (data.validate === 1) {
        setOfficeCode(params.get('uk'))
        configFetch()
      }
    },
  })

  const {
    loading: loginLoading,
    error: loginError,
    fetch: loginFetch,
  } = useApi({
    url: POST_LOGIN_URL,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    payload: loginParams,
    onSuccess: validateFetch,
    onError(error) {
      if (error.status === 403 && error.data.reason === 'disabled') {
        router.push(PISHKHAN_DISABLED_ROUTE)
      }
    },
  })

  return {
    loading: loginLoading || validateLoading || configLoading,
    error: loginError || validateError || configError,
    loginFetch,
  }
}
