'use client'

import { ChangeEventHandler, forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import cs from 'classnames'
import { Box } from '@mui/material'
import ThemeProvider from '../ThemeProvider'
import { numberRegex } from '../helper'
import KInputProps from './type'

const KInput = forwardRef<HTMLInputElement, KInputProps>(
  (
    {
      width,
      height = 56,
      helperIcon,
      helperText,
      rightIcon,
      leftIcon,
      direction = 'rtl',
      error,
      disabled,
      onChange,
      onClick,
      onChangeText,
      className,
      onlyDigits = false,
      autoComplete = 'on',
      ...props
    },
    ref,
  ) => {
    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
      const inputValue = e.target.value
      if (onlyDigits && !numberRegex.test(inputValue) && inputValue !== '') {
        return
      }

      if (onChange) onChange(e)
      if (onChangeText) onChangeText(e.target.value)
    }

    return (
      <ThemeProvider>
        <TextField
          {...props}
          className={cs([
            className,
            'rounded-xl',
            { 'bg-disabled-surface text-disabled-text': disabled },
          ])}
          sx={{
            width,
            height,
          }}
          onChange={handleChange}
          disabled={disabled}
          inputRef={ref}
          error={error}
          onClick={onClick}
          autoComplete={autoComplete}
          helperText={
            helperText && (
              <div className="flex item-center mt-1 gap-1 flex-row-reverse">
                <div className="text-regular13">{helperText}</div>
                {helperIcon &&
                  helperIcon(cs(['w-4 h-auto', { 'fill-text-dark': !error, 'fill-error': error }]))}
              </div>
            )
          }
          FormHelperTextProps={{
            style: { alignSelf: 'flex-start', margin: 0 },
            component: Box,
          }}
          InputProps={{
            inputProps: {
              style: { direction },
            },
            startAdornment:
              rightIcon &&
              rightIcon(
                cs([
                  'w-8 h-auto ml-1',
                  { 'fill-text-light': !disabled, 'fill-disabled-text': disabled },
                ]),
              ),
            endAdornment:
              leftIcon &&
              leftIcon(
                cs([
                  'w-8 h-auto mr-1',
                  { 'fill-text-light': !disabled, 'fill-disabled-text': disabled },
                ]),
              ),
          }}
        />
      </ThemeProvider>
    )
  },
)

export default KInput
