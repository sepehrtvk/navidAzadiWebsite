import { useEffect, useState } from 'react'

export const numberRegex = /^[\u06F0-\u06F9,0-9]+$/

export const persianNumberConvertor = (number?: number | string) => {
  if (!number) {
    return ''
  }
  return number.toString().replace(/[۰-۹]/g, d => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
}

export const timeToCounter = (initialSeconds: number) => {
  const minutes = Math.floor(initialSeconds / 60)
  const seconds = initialSeconds - minutes * 60
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export const useTimer = (seconds: number | undefined) => {
  const [counter, setCounter] = useState<number>(seconds || 0)

  useEffect(() => {
    if (seconds) setCounter(seconds)
  }, [seconds])

  useEffect(() => {
    if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000)
  }, [counter])

  return {
    remainingSeconds: counter,
    setSeconds: setCounter,
  }
}
