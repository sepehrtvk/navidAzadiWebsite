import { useEffect, useState } from 'react'

const useTimer = (seconds: number | undefined) => {
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

export default useTimer
