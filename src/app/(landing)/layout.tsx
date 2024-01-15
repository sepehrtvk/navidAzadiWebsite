import { ReactNode } from 'react'

function PrintAssetsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen flex bg-primary-darkest p-6 justify-center items-center flex-col">
      {children}
    </div>
  )
}

export default PrintAssetsLayout
