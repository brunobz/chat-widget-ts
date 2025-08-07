import { useEffect, useState } from 'react'

export type ChatMessage = {
  id: string
  sender: 'user' | 'bot'
  content: string
}

const CHAT_STORAGE_KEY = 'chat_widget_messages'

export const useChatMessages = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ChatMessage[]
        setMessages(parsed)
      } catch (err) {
        console.warn('Erro ao fazer parse do localStorage', err)
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages, isLoaded])

  const sendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      content: message,
    }

    setMessages((prev) => [...prev, newMessage])

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: 'bot',
          content: 'This is a mock response.',
        },
      ])
    }, 1000)
  }

  return { messages, sendMessage }
}
