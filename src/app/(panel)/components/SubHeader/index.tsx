'use client'

import { useRouter } from 'next/navigation'
import { KButton } from 'src/kd-components'
import staticTexts from '@constants/locale/fa'
import { FUNDS_ROUTE } from '@constants/routes'
import { ArrowRightIcon, PrintIcon } from '@svgs/icons'
import useStore from '@store/storeManagement/useStore'
import useInvestorStore from '@store/investor'
import SubHeaderProps from './type'

// const { kian_funds, print_assets } = staticTexts.header

function SubHeader({
  title,
  backButtonTitle = 'fff',
  backButtonRoute,
  onPrintAssetsClick,
  showBackButton = false,
  showPrintAssets = false,
  loading = false,
  children,
}: SubHeaderProps) {
  const router = useRouter()
  const investorProfile = useStore(useInvestorStore, store => store.profile)

  const handleBackClick = () => {
    router.push(backButtonRoute || FUNDS_ROUTE)
  }

  return (
    <div className="px-4 py-3 rounded-xl w-full bg-background-surface">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          {showBackButton && (
            <>
              <KButton
                text={backButtonTitle}
                className="!p-0"
                style="text"
                rightIcon={className => <ArrowRightIcon className={className} />}
                onClick={handleBackClick}
                size="small"
              />
              <div className="h-7 w-px bg-border-light" />
            </>
          )}
          <div className="text-h5 text-text">{title}</div>
        </div>
        <div className="flex items-center gap-4"></div>
      </div>

      {children ? (
        <div className="border-0 border-t border-solid border-border-mid mt-5">{children}</div>
      ) : null}
    </div>
  )
}

export default SubHeader
