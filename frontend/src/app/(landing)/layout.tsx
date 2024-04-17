'use client'

import KSnackbar from '@components/KSnackbar'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  const isLogin = window.location.pathname.includes('login')
  return (
    <div className="w-screen h-screen">
      {!isLogin && <Navbar />}
      <KSnackbar>{children}</KSnackbar>
    </div>
  )
}

export default PrintAssetsLayout
