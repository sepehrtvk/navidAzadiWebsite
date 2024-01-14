import staticTexts from '@constants/locale/fa'
import { HelpIcon } from '@svgs/icons'
import { KianPlatformSvg } from '@svgs/illustrations'

const { support, title1, title2, title3 } = staticTexts.footer

function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center mt-14">
      <div className="flex gap-4 items-center">
        <div className="text-medium15 text-text-light">
          {title1} <span className="text-primary">{title2}</span> {title3}
        </div>
        <KianPlatformSvg className="w-[156px]" />
      </div>
      <div className="flex items-center gap-1">
        <HelpIcon className="fill-primary-darker w-6 h-6" />
        <div className="text-bold13 text-primary-darker">{support}</div>
      </div>
    </div>
  )
}

export default Footer
