import { FocusEventHandler, ReactNode } from 'react'

export type KSelectOptionsType = {
  label: string
  value: string
}[]

export type SingleSelectType = string | undefined
export type MultiSelectType = string[] | undefined

export default interface KSelectDefaultProps {
  width?: number
  heightSize?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  className?: string
  label?: string
  options?: KSelectOptionsType
  error?: boolean
  helperText?: string
  helperIcon?: (className: string) => ReactNode
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export interface SingleSelectProps {
  multiple: false
  value: SingleSelectType
  onChange: (value: SingleSelectType) => void
}
export interface MultiSingleSelectProps {
  multiple: true
  value: MultiSelectType
  onChange: (value: MultiSelectType) => void
}

export type KSelectProps = KSelectDefaultProps & (SingleSelectProps | MultiSingleSelectProps)
