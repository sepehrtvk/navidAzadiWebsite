'use client'

import { KTable, KDialog, KDatePicker, KInput, KButton } from '@components'
import { SingleDateType } from '@components/KDatePicker/type'
import { OnlineVisitTimeDTO, POST_ONLINE_VISIT_TIME_URL } from '@constants/apis/onlineVisit'
import { AddIcon, CalendarIcon, CloseIcon } from '@svgs/icons'
import { numberWithCommas } from '@utils'
import useApi from '@utils/api/useApi'
import { epochToJalali } from '@utils/date'
import { enqueueSnackbar } from 'notistack'
import React, { useState } from 'react'

const TABLE_HEADERS = ['زمان - تاریخ', 'لینک گوگل میت']

function OnlineVisitPage() {
  const [open, setOpen] = useState(false)
  const [startDate, setStartDate] = useState<SingleDateType>(null)
  const [link, setLink] = useState<string>('')

  const {
    data: allVisits,
    loading: allVisitsLoading,
    fetch: getVisits,
  } = useApi<any>({
    url: POST_ONLINE_VISIT_TIME_URL,
    dataFormatter: data => {
      return data.data.onlineVisits.map(item => ({
        id: item._id,
        date: item.date ? new Date(item.date).toLocaleString('fa-IR') : '---',
        link: item.link ? item.link : '---',
      }))
    },
  })

  const { loading: addVisitTimeLoading, fetch: addVisitTime } = useApi<OnlineVisitTimeDTO>({
    url: POST_ONLINE_VISIT_TIME_URL,
    lazy: true,
    method: 'post',
    onSuccess: data => {
      enqueueSnackbar(data.status, { variant: 'error' })
      getVisits()
      // setIsModalVisible(false)
    },
    onError: error => {
      if (error.data.status) {
        enqueueSnackbar(error.data.status, { variant: 'error' })
      }
    },
  })

  if (allVisitsLoading || addVisitTimeLoading) return <p>loading...</p>
  // else if (!allVisits) return <p>no data</p>

  return (
    <div className="flex-1">
      <div className="text-h4 text-text mb-8">{'وقت های ویزیت آنلاین'}</div>
      <div className="flex items-center gap-2 py-4">
        <div className="text-bold13 text-text-dark">{'وقت جدید'}</div>
        <div className="">
          <KDatePicker
            type="datePicker"
            value={startDate}
            onChange={setStartDate}
            renderComponent={
              <KInput
                fullWidth
                label={'تاریخ و ساعت'}
                autoComplete="off"
                leftIcon={className => (
                  <>
                    {startDate ? (
                      <CloseIcon
                        className="w-4 h-4 !fill-text"
                        onClick={() => setStartDate(null)}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : null}
                    <CalendarIcon
                      className={`${className} !fill-text`}
                      style={{ pointerEvents: 'none' }}
                    />
                  </>
                )}
              />
            }
          />
        </div>

        <KInput
          label={'لینک گوگل میت'}
          onChangeText={text => {
            setLink(text)
          }}
          width={320}
        />

        <KButton
          disabled={!link || !startDate}
          text={'افزودن'}
          type="secondary"
          rightIcon={className => <AddIcon className={className} />}
          onClick={() => {
            if (startDate) {
              addVisitTime({ payload: { date: new Date(startDate), link } })
              setStartDate(null)
            }
          }}
        />
      </div>
      <KTable
        indexed
        hasPagination={false}
        className="mt-2"
        headers={TABLE_HEADERS}
        data={allVisits}
        getSelectedRow={(row: any) => {
          // updatePlan({ queryParams: { id: row.id, timeslot: '12month' } })
          console.log(row)
          setOpen(true)
        }}
      />
      <KDialog
        title={'selectedUser?.username'}
        open={open}
        handleClose={() => {
          setOpen(false)
        }}
      >
        <p>rrr</p>
      </KDialog>
    </div>
  )
}

export default OnlineVisitPage
