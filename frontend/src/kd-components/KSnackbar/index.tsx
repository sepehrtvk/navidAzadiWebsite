import { SnackbarProvider } from 'notistack'
import InfoIcon from './info.svg'
import WarnIcon from './warn.svg'
import KSnackbarProps from './type'

function KSnackbar({ children }: KSnackbarProps) {
  return (
    <SnackbarProvider
      className="!bg-[#242940]"
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      maxSnack={5}
      iconVariant={{
        info: <InfoIcon className="w-6 h-6 fill-info ml-3" />,
        error: <WarnIcon className="w-6 h-6 fill-error ml-3" />,
      }}
    >
      {children}
    </SnackbarProvider>
  )
}

export default KSnackbar
