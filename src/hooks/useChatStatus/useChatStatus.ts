import { useEffect, useState } from 'react'

export type TChatStatus = 'online' | 'offline' | 'maintenance'

export function useChatStatus(defaultStatus: TChatStatus = 'online') {
  const [status, setStatus] = useState<TChatStatus>(() => {
    const stored = localStorage.getItem('chat-status') as TChatStatus | null
    return stored ?? defaultStatus
  })

  useEffect(() => {
    localStorage.setItem('chat-status', status)
    setStatus(status)
  }, [status])

  return { status }
}
