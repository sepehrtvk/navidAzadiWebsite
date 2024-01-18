import { ElementType, MouseEventHandler, ReactNode } from 'react'

export type KButtonTypes = 'primary' | 'secondary' | 'error' | 'neutral' | 'primaryAlt'

export type KButtonStyle = 'filled' | 'stroke' | 'text'

export default interface KButtonProps {
  text?: string
  size?: 'large' | 'medium' | 'small'
  width?: number
  typography?:
    | 'regular11'
    | 'medium11'
    | 'regular13'
    | 'medium13'
    | 'bold13'
    | 'light15'
    | 'regular15'
    | 'medium15'
    | 'bold15'
    | 'light17'
    | 'regular17'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'buttonLarge'
    | 'buttonSmall'
    | 'inputLarge'
    | 'inputSmall'
  fullWidth?: boolean
  type?: KButtonTypes
  style?: KButtonStyle
  disabled?: boolean
  leftIcon?: (className: string) => ReactNode
  rightIcon?: (className: string) => ReactNode
  htmlType?: 'button' | 'reset' | 'submit'
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  LinkComponent?: ElementType<any>
  href?: string
}
