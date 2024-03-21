'use client'

import { PROGRAM_BY_ID_URL } from '@constants/apis/program'
import { getQueryParams } from '@utils'
import useApi from '@utils/api/useApi'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import React, { useState } from 'react'

export interface ProgramDetailsPageProps {
  params: {
    programId: string
  }
}

function ProgramDetailsPage({ params }: ProgramDetailsPageProps) {
  const router = useRouter()
  const [file, setFile] = useState()

  const {
    data: program,
    loading: programLoading,
    fetch: getProgram,
  } = useApi<any>({
    url: PROGRAM_BY_ID_URL + getQueryParams({ programId: params.programId }),
    dataFormatter: data => {
      return data.data.programs[0]
    },
  })

  const handleFileChange = event => {
    const selectedFile = event.target.files[0]
    if (selectedFile.type !== 'application/pdf') {
      // alert('Only PDF files are allowed!')
      return
    }
    setFile(selectedFile)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!file) {
      return
    }

    const formData = new FormData()
    formData.append('pdf', file)

    formData.append('programId', program._id)

    try {
      const response = await fetch('http://localhost:5500/uploadpdf', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        console.log('sucess')
        router.replace('/adminPanel')
        // alert('File uploaded successfully')
      } else {
        console.log(response)
        // alert('Upload failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (programLoading || !program) return <p>loading...</p>

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{'تحویل برنامه'}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <span className="text-bold15">نوع: </span>
          <span className="text-medium15 text-text-dark">{program.registeredPlanId.type}</span>
        </div>
        <div className="flex items-center">
          <span className="text-bold15">زمان: </span>
          <span className="text-medium15 text-text-dark">
            {program.registeredPlanId.timeslot == '6month' ? 'شش‌ماهه' : 'یکساله'}
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-bold15">نام: </span>
          <span className="text-medium15 text-text-dark">
            <span>{program.registeredPlanId.userId.firstName}</span>
            <span className="mr-1">{program.registeredPlanId.userId.lastName}</span>
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-bold15">موبایل: </span>
          <span className="text-medium15 text-text-dark">
            {program.registeredPlanId.userId.phone}
          </span>
        </div>
      </div>

      <div className="text-h5 text-text my-4">{'عکس ها'} :‌</div>

      <div className="grid grid-cols-2 gap-4">
        {program.photoListPath.map((item, index) => {
          return (
            <div className="flex flex-col justify-between items-center border-solid border-border-light rounded-xl p-4">
              <div className="flex flex-col items-center">
                <h4 className="pb-2 border-0 border-b border-solid border-b-border-light">
                  عکس {index + 1}
                </h4>
                <img src={'http://localhost:5500/' + item} className="w-[260px]" />
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-h5 text-text my-4">{'ارسال برنامه'} :‌</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="application/pdf" onChange={handleFileChange} />
          <button type="submit">Upload PDF</button>
        </form>
      </div>
    </div>
  )
}

export default ProgramDetailsPage
