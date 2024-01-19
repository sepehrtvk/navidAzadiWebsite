'use client'

import KSnackbar from '@components/KSnackbar'
import { ReactNode } from 'react'

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex bg-primary-darkest p-6 justify-center items-center flex-col">
      <KSnackbar>{children}</KSnackbar>
    </div>
  )
}

export default PrintAssetsLayout
