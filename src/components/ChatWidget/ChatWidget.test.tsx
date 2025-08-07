import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, vi, expect, beforeEach } from 'vitest'
import { ChatWidget } from '@/components/ChatWidget/ChatWidget'

const mockUseChatStatus = vi.fn()
const mockUseChatMessages = vi.fn()
const mockUseChatVisibility = vi.fn()

vi.mock('@/hooks/useChatStatus/useChatStatus', () => ({
  useChatStatus: () => mockUseChatStatus(),
}))

vi.mock('@/hooks/useChatMessages/useChatMessages', () => ({
  useChatMessages: () => mockUseChatMessages(),
}))

vi.mock('@/hooks/useChatVisibility/useChatVisibility', () => ({
  useChatVisibility: () => mockUseChatVisibility(),
}))

vi.mock('@/components/ui/FloatingButton/FloatingButton', () => ({
  FloatingButton: ({ isOpen, toggle }: any) => (
    <button onClick={toggle} aria-label="toggle-chat">
      {isOpen ? 'Close Chat' : 'Open Chat'}
    </button>
  ),
}))

vi.mock('@/components/ChatWidget/ChatWindow/ChatWindow', () => ({
  ChatWindow: ({ messages, onSendMessage, onClose }: any) => (
    <div>
      {messages.map((msg: string, i: number) => (
        <div key={i}>{msg}</div>
      ))}
      <button onClick={() => onSendMessage('hello')} aria-label="send">
        Send
      </button>
      <button onClick={onClose} aria-label="close-chat">
        Close
      </button>
    </div>
  ),
}))

describe('ChatWidget', () => {
  const sendMessage = vi.fn()
  const toggle = vi.fn()
  const close = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    mockUseChatStatus.mockReturnValue({
      status: 'online',
    })

    mockUseChatMessages.mockReturnValue({
      messages: ['Hello'],
      sendMessage,
    })

    mockUseChatVisibility.mockReturnValue({
      isOpen: false,
      toggle,
      close,
    })
  })

  it('renders the floating button', () => {
    render(<ChatWidget />)
    expect(screen.getByLabelText('toggle-chat')).toBeInTheDocument()
  })

  it('calls toggle when floating button is clicked', () => {
    render(<ChatWidget />)
    fireEvent.click(screen.getByLabelText('toggle-chat'))
    expect(toggle).toHaveBeenCalled()
  })

  it('renders ChatWindow when isOpen is true', () => {
    mockUseChatVisibility.mockReturnValueOnce({
      isOpen: true,
      toggle,
      close,
    })

    render(<ChatWidget />)
    expect(screen.getByLabelText('close-chat')).toBeInTheDocument()
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should send message when not in maintenance and input is valid', () => {
    mockUseChatVisibility.mockReturnValueOnce({
      isOpen: true,
      toggle,
      close,
    })

    render(<ChatWidget />)
    fireEvent.click(screen.getByLabelText('send'))
    expect(sendMessage).toHaveBeenCalledWith('hello')
  })
})
