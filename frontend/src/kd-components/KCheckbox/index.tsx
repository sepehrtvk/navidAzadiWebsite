import { Checkbox } from '@mui/material'
import cs from 'classnames'
import ThemeProvider from '../ThemeProvider'
import KCheckboxProps from './type'

function KCheckbox({ checked, onChange, label, className }: KCheckboxProps) {
  return (
    <ThemeProvider>
      <div className={cs(className, 'flex items-center')}>
        <Checkbox checked={checked} onChange={e => onChange(e.target.checked)} />
        <div className="text-medium13 text-text">{label}</div>
      </div>
    </ThemeProvider>
  )
}

export default KCheckbox
