'use client'

import Image from 'next/image'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import staticTexts from '@constants/locale/fa'
import { KianLogoWithShadowSvg } from '@svgs/illustrations'
import { KButton, KInput } from 'src/kd-components'
import useApi from '@utils/api/useApi'
import { GET_LOGIN_URL, GET_SIGNUP_URL } from '@constants/apis/loginManagment/login'
import { useRouter } from 'next/navigation'
import { persianNumberConvertor } from '@components/helper'
import { enqueueSnackbar } from 'notistack'
import { ADMINPANEL_ROUTE, USERPANEL_ROUTE } from '@constants/routes'
import useProfileStore from '@store/profile'

const {
  alvand_system,
  login,
  kian_customer_panel,
  signup,
  password,
  user_name,
  first_name,
  last_name,
} = staticTexts.signup

function LoginPage() {
  const setProfile = useProfileStore(store => store.setProfile)

  const { fetch: getLogin, loading: loginLoading } = useApi({
    url: GET_SIGNUP_URL,
    lazy: true,
    method: 'post',
    onSuccess(data) {
      setProfile({ ...data.data.user, userId: data.data.user._id })
      if (data.data.user.role === 'admin') router.push(ADMINPANEL_ROUTE)
      else router.push(USERPANEL_ROUTE)
    },
    onError(error) {
      enqueueSnackbar(error.data.message, { variant: 'error' })
    },
  })
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      phone: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: data => {
      data.phone = persianNumberConvertor(data.phone)
      getLogin({ payload: data })
    },
  })

  return (
    <div className="grow flex items-center justify-center h-screen bg-primary-darkest">
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
                width={192}
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
              width={192}
            />
          </div>
          <KInput
            autoFocus
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={(formik.touched.phone && !!formik.errors.phone) || formik.submitCount > 0}
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

          <div className="flex flex-col items-center justify-between">
            <KButton
              disabled={!formik.isValid && formik.touched.phone && formik.touched.password}
              htmlType="submit"
              className="!mt-6"
              text={signup}
              width={400}
              loading={loginLoading}
            />

            <KButton
              type="primary"
              style="stroke"
              className="!mt-4"
              text={login}
              width={400}
              disabled={loginLoading}
              onClick={() => router.replace('/login')}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
