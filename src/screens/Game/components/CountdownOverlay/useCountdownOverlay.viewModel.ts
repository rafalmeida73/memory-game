import { useEffect, useState } from 'react'
import { CountdownOverlayProps } from '.'

export const useCountdownOverlayViewModel = ({
  countdownVisible: visible,
  onComplete,
}: CountdownOverlayProps) => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (visible) {
      setCount(3)

      let currentCount = 3

      const countdown = setInterval(() => {
        if (currentCount > 1) {
          currentCount--
          setCount(currentCount)
        } else {
          clearInterval(countdown)
          onComplete()
        }
      }, 1000)

      return () => clearInterval(countdown)
    }
  }, [setCount, visible, onComplete])

  return { count, visible }
}