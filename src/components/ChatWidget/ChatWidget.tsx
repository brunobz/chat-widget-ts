import React, { useState, useEffect, useRef } from 'react'
import { useChatStatus } from '@/hooks/useChatStatus/useChatStatus'
import { useChatMessages } from '@/hooks/useChatMessages/useChatMessages'
import { useChatVisibility } from '@/hooks/useChatVisibility/useChatVisibility'
import { FloatingButton } from '@/components/ui/FloatingButton/FloatingButton'
import { ChatWindow } from './ChatWindow/ChatWindow'

export const ChatWidget = () => {
  const { isOnline, isMaintenance } = useChatStatus()
  const { messages, sendMessage } = useChatMessages()
  const { isOpen, toggle, close } = useChatVisibility()

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        close()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  function handleSubmit(text: string) {
    if (!text.trim() || isMaintenance) return
    sendMessage(text)
  }

  return (
    <div /* className={styles.chatWidget} */>
      <FloatingButton isOpen={isOpen} toggle={toggle} />

      {isOpen && (
        <ChatWindow
          isMaintenance={isMaintenance}
          isOnline={isOnline}
          messages={messages}
          onClose={close}
          onSendMessage={handleSubmit}
        />
      )}
    </div>
  )
}
