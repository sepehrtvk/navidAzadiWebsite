'use client'

import KSnackbar from '@components/KSnackbar'
import { ReactNode } from 'react'

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <KSnackbar>{children}</KSnackbar>
    </div>
  )
}

export default PrintAssetsLayout
