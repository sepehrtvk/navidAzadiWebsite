'use client'

import { KButton, KDialog, KInput, KStepper } from '@components'
import useRegisteredPlanStore from '@store/registeredPlan'
import useStore from '@store/storeManagement/useStore'
import { CheckIcon } from '@svgs/icons'
import { useRouter } from 'next/navigation'
import { enqueueSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'

const StepsOnline1 = ['تایید اطلاعات', 'اپلود عکس']
const StepsOnline2 = ['تایید اطلاعات', 'انتخاب زمان گوگل میت', 'اپلود عکس']
const StepsVisit = ['تایید اطلاعات', 'انتخاب زمان ویزیت']

type ProgramPageProps = {
  searchParams: {
    programId: string
  }
}

function ProgramPage({ searchParams }: ProgramPageProps) {
  const ProgramId = searchParams.programId
  const [activeStep, setActiveStep] = useState<number>(0)
  const [steps, setSteps] = useState<string[]>([])

  const [selectedFiles, setSelectedFiles] = useState([])
  const [previewUrls, setPreviewUrls] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const registeredPlan = useStore(useRegisteredPlanStore, store => store.registeredPlan)

  const router = useRouter()

  useEffect(() => {
    let stepsToShow: string[] = []
    if (registeredPlan?.type === 'online1') {
      stepsToShow = StepsOnline1
    } else if (registeredPlan?.type === 'online2') {
      stepsToShow = StepsOnline2
    } else if (registeredPlan?.type === 'visit') {
      stepsToShow = StepsVisit
    }

    setSteps(stepsToShow)
  }, [registeredPlan])

  const handleFileChange = event => {
    setSelectedFiles(event.target.files)

    // Create URLs for the selected files for preview
    const fileUrls = Array.from(event.target.files).map(file => URL.createObjectURL(file))

    // Update the state with the new preview URLs
    setPreviewUrls(fileUrls)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    const formData = new FormData()
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('photos', selectedFiles[i])
    }
    formData.append('programId', ProgramId)

    try {
      const response = await fetch('http://localhost:5500/upload', {
        method: 'POST',
        body: formData,
        // Note: When using fetch with FormData, do NOT set the Content-Type header.
      })
      if (response.ok) {
        enqueueSnackbar('Upload successful', { variant: 'success' })
        router.replace(`/userPanel`)
      } else {
        enqueueSnackbar('Upload failed', { variant: 'error' })
      }
    } catch (error) {
      console.error('Error:', error)
      enqueueSnackbar('error', { variant: 'error' })
    }
  }

  const renderStepOne = () => {
    return (
      <div>
        <span>
          شما در حال دریافت برنامه برای تاریخ --- هستید، جهت اپلود عکس به مرحله بعدی بروید
        </span>
        <div className="mt-4">
          <KButton
            text={'ادامه'}
            size="small"
            typography="buttonSmall"
            width={128}
            loading={false}
            onClick={() => {
              setActiveStep(1)
            }}
          />
        </div>
      </div>
    )
  }

  const renderStepTwo = () => {
    return (
      <div>
        <span>
          در این مرحله باید ۵ عکس از زوایای مختلف از بدن خود گرفته و آنرا در اینجا اپلود نمایید
        </span>
        <form onSubmit={handleSubmit}>
          <input type="file" multiple onChange={handleFileChange} />
          {/* <KInput label={''} type="file" onChange={handleFileChange} /> */}

          <div className="my-4">
            {previewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Preview"
                style={{ width: '100px', height: '100px' }}
              />
            ))}
          </div>
          <div className="mt-4">
            <KButton
              disabled={selectedFiles.length === 0}
              htmlType="submit"
              text={'اپلود'}
              size="small"
              typography="buttonSmall"
              width={128}
              loading={false}
            />
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface mt-4">
      <div className="flex justify-between items-center mb-4 pb-2 border-0 border-b border-solid border-b-border-light">
        <div className="flex gap-4 items-center">
          <div className="text-h5 text-text">{'برنامه'}</div>
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        <div className="w-[360px]">
          <KStepper steps={steps} activeStep={activeStep} />
        </div>
      </div>

      {activeStep === 0 && renderStepOne()}
      {activeStep === 1 && renderStepTwo()}

      <KDialog open={isModalVisible} withHeader={false}>
        <div className="flex flex-col items-center">
          <div className="text-h4 text-text mt-6">{'signPlan'}</div>

          <div className="flex w-1/2 gap-2">
            <KButton
              className="w-full"
              type="secondary"
              text={'confirm'}
              rightIcon={className => <CheckIcon className={className} />}
              onClick={() => {
                setIsModalVisible(false)
              }}
            />
          </div>
        </div>
      </KDialog>
    </div>
  )
}

export default ProgramPage
