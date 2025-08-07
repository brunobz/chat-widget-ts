import { useState } from 'react'

export const useChatVisibility = (defaultOpen = false) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = () => {
    setIsOpen((prev) => !prev)
  }

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return { isOpen, toggle, open, close }
}
