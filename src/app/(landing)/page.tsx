'use client'

import { useSearchParams } from 'next/navigation'
import { KianLogoSvg, KianLogoTextSvg } from '@svgs/illustrations'
import Loading from './components/loading'
import Error from './components/error'
import { useLogin } from './hooks'

function LoginPage() {
  const params = useSearchParams()

  const { loading, error, loginFetch } = useLogin(params.toString())

  return (
    <div className="grow flex flex-col justify-center items-center gap-[72px]">
      <h3>salam</h3>
      {loading && <Loading />}
      {error && !loading && <Error onRetry={loginFetch} />}
    </div>
  )
}

export default LoginPage
