'use client'

import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom'
import ThemeProvider from '../ThemeProvider'
import KTooltipProps from './type'

function KTooltip({ children, content }: KTooltipProps) {
  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      arrow
      TransitionComponent={Zoom}
      PopperProps={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -10],
            },
          },
        ],
      }}
    />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: '1000px',
      backgroundColor: '#fff',
      border: '1px solid #14151a26',
      borderRadius: '8px',
    },
    [`& .${tooltipClasses.arrow}`]: {
      width: 30,
      height: 14,
      top: '-6px !important',
      '&:before': {
        border: '1px solid #14151a26',
        borderTopRightRadius: 4,
      },
      color: '#fff',
    },
  }))

  return (
    <ThemeProvider>
      <CustomTooltip title={content}>
        <span>{children}</span>
      </CustomTooltip>
    </ThemeProvider>
  )
}

export default KTooltip
