import { Popover } from '@mui/material'
import KPopoverProps from './type'

function KPopover({ children, anchorEl, setAnchorEl }: KPopoverProps) {
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      PaperProps={{
        style: {
          backgroundColor: 'transparent',
          boxShadow: '0 3px 5px 0px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          borderRadius: 8,
        },
      }}
    >
      <div className="bg-background-surface rounded-xl border border-solid border-[#D9D9D9]">
        {children}
      </div>
    </Popover>
  )
}

export default KPopover
