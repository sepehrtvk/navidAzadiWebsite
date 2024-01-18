'use client'

import { MouseEventHandler } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import cs from 'classnames'
import Lottie from 'lottie-react'
import ThemeProvider from '../ThemeProvider'
import LoadingLottie from './loading.json'
import KButtonProps from './type'
import { styleToVariant, svgColor } from './helper'

function KButton({
  text,
  size = 'large',
  width,
  typography = 'buttonLarge',
  fullWidth = false,
  type = 'primary',
  style = 'filled',
  disabled = false,
  leftIcon,
  rightIcon,
  htmlType,
  loading,
  onClick,
  className,
  LinkComponent,
  href,
}: KButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (!loading && onClick) {
      onClick(e)
    }
  }
  return (
    <ThemeProvider>
      <Button
        className={cs([className, 'flex !rounded-xl items-center justify-center gap-2'])}
        variant={styleToVariant(style)}
        fullWidth={fullWidth}
        size={size}
        sx={{
          width,
          paddingX: 1,
          paddingY: 0,
          boxShadow: 'none',
        }}
        color={type}
        startIcon={
          rightIcon && !loading ? rightIcon(cs(svgColor(disabled, type, style), 'w-6 h-6')) : null
        }
        endIcon={
          leftIcon && !loading ? leftIcon(cs(svgColor(disabled, type, style), 'w-6 h-6')) : null
        }
        type={htmlType}
        disabled={disabled}
        onClick={handleClick}
        LinkComponent={LinkComponent}
        href={href}
      >
        {loading ? (
          <Lottie loop animationData={LoadingLottie} className="w-8 h-8" />
        ) : (
          <Typography variant={typography}>{text}</Typography>
        )}
      </Button>
    </ThemeProvider>
  )
}

export default KButton
