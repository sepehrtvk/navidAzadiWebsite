'use client'

import KSnackbar from '@components/KSnackbar'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <KSnackbar>{children}</KSnackbar>
    </div>
  )
}

export default PrintAssetsLayout
