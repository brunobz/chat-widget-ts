import { useState } from 'react'

export function useChatVisibility(defaultOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  function toggle() {
    setIsOpen((prev) => !prev)
  }

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return { isOpen, toggle, open, close }
}
