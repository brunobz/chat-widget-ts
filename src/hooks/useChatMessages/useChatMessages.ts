import { useState } from 'react'

type ChatMessage = {
  id: string
  sender: 'user' | 'bot'
  content: string
}

export function useChatMessages() {
  const [messages, setMessages] = useState<ChatMessage[]>([])

  function sendMessage(message: string) {
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
