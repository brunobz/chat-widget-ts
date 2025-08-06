import { useState, useEffect } from 'react'

export function useChatStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [isMaintenance, setIsMaintenance] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOnline(true)
      setIsMaintenance(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return { isOnline, isMaintenance }
}
