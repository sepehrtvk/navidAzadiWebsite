'use client'

import { Step, StepLabel, Stepper, StepConnector } from '@mui/material'
import { styled } from '@mui/material/styles'
import { stepConnectorClasses } from '@mui/material/StepConnector'
import { StepIconProps } from '@mui/material/StepIcon'
import { stepLabelClasses } from '@mui/material/StepLabel'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'
import ThemeProvider from '../ThemeProvider'
import CheckIcon from './check.svg'
import KStepperProps from './type'

const config = resolveConfig(tailwindConfig)
const tailwindTheme: any = config.theme

function KStepIcon(props: StepIconProps) {
  const { active, completed } = props

  return (
    <div>
      {completed && (
        <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
          <CheckIcon className="w-4 h-4 fill-text-button" />
        </div>
      )}
      {active && (
        <div className="w-6 h-6 rounded-full border-2 border-success border-solid bg-background-surface shadow-[0_0_0_6px_#D2FCE3]" />
      )}
      {!active && !completed && (
        <div className="w-6 h-6 rounded-full border-2 border-neutral-20 border-solid" />
      )}
    </div>
  )
}

function KStepper({ steps, activeStep }: KStepperProps) {
  const KConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 12px)',
      right: 'calc(50% + 12px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: tailwindTheme.colors.success.DEFAULT,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: tailwindTheme.colors.success.DEFAULT,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: tailwindTheme.colors.border.mid,
      borderTopWidth: 2,
    },
  }))

  const KStepLabel = styled(StepLabel)(() => ({
    [`& .${stepLabelClasses.label}`]: {
      [`&.${stepLabelClasses.active}`]: {
        color: tailwindTheme.colors.text.DEFAULT,
      },
      color: tailwindTheme.colors.text.middle,
    },
  }))

  return (
    <ThemeProvider>
      <div className="w-full bg-background-tint1 px-8 pt-6 pb-4 rounded-3xl">
        <Stepper activeStep={activeStep} alternativeLabel connector={<KConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <KStepLabel StepIconComponent={KStepIcon}>
                <div className="text-medium13">{label}</div>
              </KStepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </ThemeProvider>
  )
}

export default KStepper
