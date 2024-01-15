'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { KSnackbar } from 'src/kd-components'
import Footer from './components/Footer'
import Header from './components/Header'
import SubHeader from './components/SubHeader'

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  return (
    <div className="flex flex-col items-center min-h-screen pb-6 bg-background">
      <Header />
      <div className="flex flex-col w-1/2 mt-4">
        {/* <SubHeader title={'تست'} showBackButton /> */}
      </div>
      <div className="flex flex-grow w-[1144px] flex-col items-center ">
        <KSnackbar>{children}</KSnackbar>
      </div>
      <Footer />
    </div>
  )
}

export default PrintAssetsLayout
