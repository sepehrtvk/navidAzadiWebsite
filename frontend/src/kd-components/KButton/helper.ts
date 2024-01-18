import { KButtonStyle, KButtonTypes } from './type'

export const svgColor = (disabled: boolean, type: KButtonTypes, style: KButtonStyle) => {
  if (disabled) {
    return 'fill-disabled-text '
  }
  if (style === 'filled') {
    return 'fill-text-button'
  }
  switch (type) {
    case 'primary':
      return `fill-primary`

    case 'secondary':
      return `fill-secondary`

    case 'error':
      return `fill-error`

    case 'neutral':
      return `fill-text-light`

    case 'primaryAlt':
      return `fill-text-button`

    default:
      return ''
  }
}

export const styleToVariant = (style: KButtonStyle) => {
  switch (style) {
    case 'filled':
      return 'contained'

    case 'stroke':
      return 'outlined'

    case 'text':
      return 'text'

    default:
      return 'contained'
  }
}
