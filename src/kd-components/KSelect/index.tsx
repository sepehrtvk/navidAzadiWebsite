import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import cs from 'classnames'
import ThemeProvider from '../ThemeProvider'
import ChevronDownIcon from './chevronDown.svg'
import { KSelectProps, MultiSelectType, SingleSelectType } from './type'

const heightSizes = {
  small: 20,
  medium: 56,
  large: 64,
}

function KSelect({
  className,
  label,
  options = [],
  value,
  onChange,
  multiple,
  width,
  fullWidth,
  heightSize = 'medium',
  error,
  helperText,
  onBlur,
  helperIcon,
}: KSelectProps) {
  const handleChange = (event: SelectChangeEvent<MultiSelectType | SingleSelectType>) => {
    const { value: tempValue } = event.target
    if (multiple) onChange(tempValue as string[])
    else onChange(tempValue as string)
  }

  const getSelectedOptionText = (values: string[]) => {
    return options.filter(opt => values.includes(opt.value)).map(option => option.label)
  }

  const renderValue = (selected: string[]) => {
    const texts = getSelectedOptionText(selected)
    if (texts.length <= 2) return texts.join('، ')
    return `${texts[0]}،${texts[1]}،...`
  }

  return (
    <ThemeProvider>
      <FormControl className={className} fullWidth={fullWidth} sx={{ width }}>
        {label ? <InputLabel id={`select-label-${label}`}>{label}</InputLabel> : null}
        <Select
          sx={{ height: heightSizes[heightSize] }}
          id={`select-${label}`}
          labelId={`select-label-${label}`}
          label={label}
          multiple={multiple}
          value={value}
          onChange={handleChange}
          IconComponent={ChevronDownIcon}
          renderValue={multiple ? (renderValue as any) : undefined}
          error={error}
          onBlur={onBlur}
        >
          {multiple
            ? options.map(option => (
              <MenuItem disableGutters divider key={option.label} value={option.value}>
                <Checkbox checked={value ? value.includes(option.value) : undefined} />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))
            : options.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
        {helperText && (
          <div className="flex item-center mt-1">
            <div className="text-regular13">{helperText}</div>
            {helperIcon &&
              helperIcon(cs(['w-4 h-auto', { 'fill-text-dark': !error, 'fill-error': error }]))}
          </div>
        )}
      </FormControl>
    </ThemeProvider>
  )
}

export default KSelect
