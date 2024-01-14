'use client'

import { Dialog } from '@mui/material'
import CloseIcon from './close.svg'
import KDialogProps from './type'

function KDialog({ open, handleClose, title, children, withHeader = true }: KDialogProps) {
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className="w-[600px] p-6 pb-10">
        {withHeader && (
          <div className="flex justify-between pb-4 border-0 border-b border-solid border-b-border-light">
            <div className="text-h6 text-text">{title}</div>
            <CloseIcon className="w-6 h-6 fill-text-middle" onClick={handleClose} />
          </div>
        )}
        <div>{children}</div>
      </div>
    </Dialog>
  )
}

export default KDialog
