'use client'

import { ChangeEvent } from 'react'
import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import ThemeProvider from '../ThemeProvider'
import consts from './consts'
import KSwitchProps from './type'

const { active, inActive } = consts

const MaterialUISwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& .MuiSwitch-thumb:before': {
        content: `'${active}'`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    '&:before': {
      content: `'${inActive}'`,
    },
  },
}))

function KSwitch({ value, onChange, ...props }: KSwitchProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <ThemeProvider>
      <MaterialUISwitch
        {...props}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        checked={value}
      />
    </ThemeProvider>
  )
}

export default KSwitch
