'use client'

import Lottie from 'lottie-react'
import { buttonLoading } from '@animations'
import staticTexts from '@constants/locale/fa'

const { receiving_data } = staticTexts.login

function Loading() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-h6 text-text-button">{receiving_data}</div>
      <Lottie animationData={buttonLoading} loop className="w-16 h-16" />
    </div>
  )
}

export default Loading
