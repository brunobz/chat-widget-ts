import { useEffect, useRef } from 'react'
import { useChatStatus } from '@/hooks/useChatStatus/useChatStatus'
import { useChatMessages } from '@/hooks/useChatMessages/useChatMessages'
import { useChatVisibility } from '@/hooks/useChatVisibility/useChatVisibility'
import { FloatingButton } from '@/components/ui/FloatingButton/FloatingButton'
import { ChatWindow } from './ChatWindow/ChatWindow'
export interface ChatWidgetProps {
  backgroundColor?: string
  color?: string
  containerStyle?: React.CSSProperties
  icon?: React.ReactNode
}

export const ChatWidget = ({
  backgroundColor,
  color,
  containerStyle,
  icon,
}: ChatWidgetProps) => {
  const { isOnline, isMaintenance } = useChatStatus()
  const { messages, sendMessage } = useChatMessages()
  const { isOpen, toggle, close } = useChatVisibility()

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

  return (
    <div style={containerStyle}>
      <FloatingButton
        icon={icon}
        isOpen={isOpen}
        toggle={toggle}
        style={{ color, backgroundColor }}
      />

      {isOpen && (
        <ChatWindow
          customStyle={{ backgroundColor, color }}
          isMaintenance={isMaintenance}
          isOnline={isOnline}
          messages={messages}
          onClose={close}
          onSendMessage={sendMessage}
        />
      )}
    </div>
  )
}
