'use client'

import KDialog from '@components/KDialog'
import KTable from '@components/KTable'
import { GET_PLANS_URL } from '@constants/apis/adminPanel'
import { POST_NEWPLAN_URL } from '@constants/apis/newPlan'
import useApi from '@utils/api/useApi'
import { epochToJalali } from '@utils/date'
import numberWithCommas from '@utils/numberWithCommas'
import { enqueueSnackbar } from 'notistack'
import React from 'react'

const TABLE_HEADERS = [
  'نام',
  'نام خانوادگی',
  'موبایل',
  'نوع',
  'تاریخ ثبت نام',
  'تاریخ شروع',
  'تاریخ پایان',
  'قیمت',
  'وضعیت',
]

function PlansPage() {
  const {
    data: allPlans,
    loading: allPlansLoading,
    fetch: getPlans,
  } = useApi<any>({
    url: GET_PLANS_URL,
    dataFormatter: data => {
      return data.data.allPlans.map(item => ({
        id: item._id,
        firstName: item.user[0].firstName,
        lastName: item.user[0].lastName,
        phone: item.user[0].phone,
        type: item.timeslot == '12month' ? 'یک‌ساله' : 'شش‌ماهه',
        createdAt: epochToJalali(new Date(item.createdAt).getTime()),
        startDate: item.startDate ? epochToJalali(new Date(item.startDate).getTime()) : '---',
        endDate: item.endDate ? epochToJalali(new Date(item.endDate).getTime()) : '---',
        price: numberWithCommas(item.price),
        status: item.active ? 'فعال' : 'غیرفعال',
      }))
    },
  })

  const { loading: updatePlanLoading, fetch: updatePlan } = useApi<any>({
    url: POST_NEWPLAN_URL,
    lazy: true,
    method: 'patch',
    onSuccess: data => {
      enqueueSnackbar(data.status, { variant: 'error' })
      getPlans()
      // setIsModalVisible(false)
    },
    onError: error => {
      if (error.data.status) {
        enqueueSnackbar(error.data.status, { variant: 'error' })
      }
    },
  })

  if (allPlansLoading || !allPlans) return <p>loading...</p>

  return (
    <div className="flex-1">
      <div className="text-h4 text-text mb-8">{'لیست پکیج های ثبت شده'}</div>

      <KTable
        indexed
        hasPagination={false}
        className="mt-2"
        headers={TABLE_HEADERS}
        data={allPlans}
        getSelectedRow={(row: any) => {
          updatePlan({ queryParams: { id: row.id, timeslot: '12month' } })
        }}
      />
      <KDialog title={'selectedUser?.username'} open={false} handleClose={() => {}}>
        <p>rrr</p>
      </KDialog>
    </div>
  )
}

export default PlansPage
