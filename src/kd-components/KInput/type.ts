import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react'

export default interface KInputProps {
  width?: number
  height?: number
  helperText?: ReactNode
  rightIcon?: (className: string) => ReactNode
  leftIcon?: (className: string) => ReactNode
  helperIcon?: (className: string) => ReactNode
  error?: boolean
  disabled?: boolean
  label: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onChangeText?: (value: string) => void
  type?: HTMLInputTypeAttribute
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  fullWidth?: boolean
  direction?: 'rtl' | 'ltr'
  placeholder?: string
  id?: string
  name?: string
  className?: string
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  autoFocus?: boolean
  onlyDigits?: boolean
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  autoComplete?: 'on' | 'off'
}
