'use client'

import { ChangeEvent, ChangeEventHandler, ClipboardEventHandler, useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import cs from 'classnames'
import { persianNumberConvertor, numberRegex } from '../../helper'
import Props from './type'

function OtpInput({ onComplete, disabled = false, error = false }: Props) {
  const [value, setValue] = useState<string>()

  const handleChange = (input: string) => {
    setValue(persianNumberConvertor(input))
  }

  const handleInputChange = (
    onChange: ChangeEventHandler<HTMLInputElement>,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (numberRegex.test(e.target.value) || e.target.value === '') {
      onChange(e)
    }
  }
  const handlePaste: ClipboardEventHandler<HTMLInputElement> = e => {
    e.preventDefault()
    const copiedText = e.clipboardData.getData('Text')
    if (numberRegex.test(copiedText)) {
      setValue(copiedText)
    }
  }

  useEffect(() => {
    if (value && value.length === 5) {
      onComplete(value)
    }
  }, [value])

  return (
    <div dir="ltr">
      <OTPInput
        value={value}
        onChange={handleChange}
        numInputs={5}
        shouldAutoFocus
        inputType="text"
        renderInput={props => (
          <input
            {...props}
            disabled={disabled}
            onChange={e => handleInputChange(props.onChange, e)}
            onPaste={handlePaste}
            style={{
              fontFamily: 'IRANSansX',
              fontFeatureSettings: "'ss04'",
              ...props.style,
            }}
            className={cs([
              '!w-14 h-14 select-none flex items-center justify-center border-border-darkest border focus-visible:outline-primary rounded-xl text-h2 text-text',
              {
                'border-error focus-visible:outline-error-dark': error && !disabled,
                'text-disabled-text bg-disabled-surface': disabled,
              },
            ])}
          />
        )}
        renderSeparator={() => <div className="mx-2" />}
      />
    </div>
  )
}

export default OtpInput
