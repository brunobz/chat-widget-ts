import { useChatStatus } from '@/hooks/useChatStatus/useChatStatus'
import { useChatMessages } from '@/hooks/useChatMessages/useChatMessages'
import { useChatVisibility } from '@/hooks/useChatVisibility/useChatVisibility'
import { FloatingButton } from '@/components/ui/FloatingButton/FloatingButton'
import { ChatWindow } from './ChatWindow/ChatWindow'
export interface ChatWidgetProps {
  styles?: {
    colors?: {
      color?: string
      backgroundColor?: string
    }
    container?: React.CSSProperties
    icon?: React.ReactNode
  }
}

export const ChatWidget = ({ styles }: ChatWidgetProps) => {
  const { status } = useChatStatus()
  const { messages, sendMessage } = useChatMessages()
  const { isOpen, toggle, close } = useChatVisibility()

  return (
    <div style={styles?.container}>
      <FloatingButton
        icon={styles?.icon}
        isOpen={isOpen}
        toggle={toggle}
        style={{
          color: styles?.colors?.color,
          backgroundColor: styles?.colors?.backgroundColor,
        }}
      />

      {isOpen && (
        <ChatWindow
          customStyle={{
            color: styles?.colors?.color,
            backgroundColor: styles?.colors?.backgroundColor,
          }}
          status={status}
          messages={messages}
          onClose={close}
          onSendMessage={sendMessage}
        />
      )}
    </div>
  )
}
