import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { KButton } from '@components'
import { AddIcon } from '@svgs/icons'
import Logo from '../../../../assets/images/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <nav className="bg-background p-4 sticky top-0 z-50 border-0 border-b-2 border-solid border-text-light">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-16">
          <Link href="/" className="text-text flex items-center" style={{ textDecoration: 'none' }}>
            <Image src={Logo} alt={'aa'} width={64} height={64} className="pl-4" />
            <div className="flex flex-col border-0 border-r-2 pr-4 border-solid border-text-light">
              <span className="text-bold15 mb-2">نوید آزادی</span>
              <span className="text-medium13">مربی بدنسازی و فیتنس</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/about"
              className="text-text hover:text-primary ml-4"
              style={{ textDecoration: 'none' }}
            >
              برنامه
            </Link>
            <Link
              href="/about"
              className="text-text hover:text-primary"
              style={{ textDecoration: 'none' }}
            >
              درباره من
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <KButton
            text={'ورود'}
            type="secondary"
            rightIcon={className => <AddIcon className={className} />}
            onClick={() => {
              router.push('/login')
            }}
            size="small"
            typography="buttonSmall"
          />
        </div>
        <div className="md:hidden ">
          <KButton
            type="secondary"
            text="منو"
            onClick={() => setIsOpen(!isOpen)}
            size="small"
            typography="buttonSmall"
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-secondary-light p-4">
          <Link href="/about" className="block hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="block hover:text-gray-300">
            Services
          </Link>
          <Link href="/contact" className="block hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
