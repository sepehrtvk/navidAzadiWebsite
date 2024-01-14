'use client'

import { ReactNode } from 'react'
import { KianPlatformSvg } from '@svgs/illustrations'
import { HelpIcon } from '@svgs/icons'
import staticTexts from '@constants/locale/fa'

const { support, title1, title2, title3 } = staticTexts.footer

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex bg-primary-darkest p-6 justify-center items-center flex-col">
      {children}
    </div>
  )
}

export default PrintAssetsLayout
