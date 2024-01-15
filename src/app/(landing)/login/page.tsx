'use client'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import staticTexts from '@constants/locale/fa'
import { KianLogoWithShadowSvg } from '@svgs/illustrations'
import { KButton, KInput } from 'src/kd-components'
import useApi from '@utils/api/useApi'
import { GET_LOGIN_URL } from '@constants/apis/loginManagment/login'

const { alvand_system, kian_customer_panel, forgot_password, login, password, user_name } =
  staticTexts.login

function LoginPage() {
  const { fetch: getLogin, loading: loginLoading } = useApi({ url: GET_LOGIN_URL, lazy: true })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: data => {
      getLogin({ queryParams: data })
    },
  })

  const handleForgotPassword = () => {
    console.log('Forgot Password')
  }
  return (
    <div className="grow flex items-center justify-center">
      <div className="w-[564px] rounded-xl bg-background-surface py-10 flex flex-col items-center">
        <KianLogoWithShadowSvg className="w-[100px] h-[130px]" />
        <div className="text-text text-h5">{alvand_system}</div>
        <div className="text-text text-medium15 mt-1">{kian_customer_panel}</div>
        <form className="mt-10 flex flex-col items-center w-full" onSubmit={formik.handleSubmit}>
          <KInput
            autoFocus
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={(formik.touched.username && !!formik.errors.username) || formik.submitCount > 0}
            // helperText={formik.touched.username && formik.errors.username}
            label={user_name}
            width={400}
            direction="ltr"
          />
          <KInput
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={(formik.touched.password && !!formik.errors.password) || formik.submitCount > 0}
            // helperText={formik.touched.password && formik.errors.password}
            className="!mt-4"
            label={password}
            width={400}
            type="password"
            direction="ltr"
          />
          <div className="mt-4 flex justify-end w-[400px]">
            <div
              role="presentation"
              onClick={handleForgotPassword}
              className="text-text-middle text-medium11 text-left cursor-pointer"
            >
              {forgot_password}
            </div>
          </div>
          <KButton
            disabled={!formik.isValid && formik.touched.username && formik.touched.password}
            htmlType="submit"
            className="!mt-6"
            text={login}
            width={400}
            loading={loginLoading}
          />
        </form>
      </div>
    </div>
  )
}

export default LoginPage