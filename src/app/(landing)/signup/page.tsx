'use client'

import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import staticTexts from '@constants/locale/fa'
import { KianLogoWithShadowSvg } from '@svgs/illustrations'
import { KButton, KInput } from 'src/kd-components'
import useApi from '@utils/api/useApi'
import { GET_LOGIN_URL } from '@constants/apis/loginManagment/login'

const { alvand_system, kian_customer_panel, signup, password, user_name, first_name, last_name } =
  staticTexts.signup

function LoginPage() {
  const { fetch: getLogin, loading: loginLoading } = useApi({ url: GET_LOGIN_URL, lazy: true })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: data => {
      getLogin({ queryParams: data })
    },
  })

  return (
    <div className="grow flex items-center justify-center">
      <div className="w-[564px] rounded-xl bg-background-surface py-10 flex flex-col items-center">
        <Image src="/images/Logo.png" width={185} height={185} alt="logo" />
        <div className="text-text text-h5">{alvand_system}</div>
        <div className="text-text text-medium15 mt-1">{kian_customer_panel}</div>
        <form className="mt-10 flex flex-col items-center w-full" onSubmit={formik.handleSubmit}>
          <div className="flex justify-center items-center w-full mb-4">
            <div className="ml-4">
              <KInput
                autoFocus
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  (formik.touched.firstName && !!formik.errors.firstName) || formik.submitCount > 0
                }
                label={first_name}
                width={200}
                direction="ltr"
              />
            </div>
            <KInput
              autoFocus
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              error={
                (formik.touched.lastName && !!formik.errors.lastName) || formik.submitCount > 0
              }
              label={last_name}
              width={200}
              direction="ltr"
            />
          </div>
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

          <KButton
            disabled={!formik.isValid && formik.touched.username && formik.touched.password}
            htmlType="submit"
            className="!mt-6"
            text={signup}
            width={400}
            loading={loginLoading}
          />
        </form>
      </div>
    </div>
  )
}

export default LoginPage
