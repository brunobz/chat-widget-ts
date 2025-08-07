import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ChatWindow } from './ChatWindow'

const mockUseChatVisibility = vi.fn()

vi.mock('@/hooks/useChatVisibility/useChatVisibility', () => ({
  useChatVisibility: () => mockUseChatVisibility(),
}))

describe('ChatWindow', () => {
  it('renders chat window', () => {
    render(
      <ChatWindow
        customStyle={{}}
        status="offline"
        messages={[]}
        onClose={vi.fn()}
        onSendMessage={vi.fn()}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows service unavailable message, when isMaintenance is true', () => {
    render(
      <ChatWindow
        customStyle={{}}
        status="maintenance"
        messages={[]}
        onClose={vi.fn()}
        onSendMessage={vi.fn()}
      />
    )

    expect(
      screen.getByText('Sorry! Service in maintenance mode.')
    ).toBeInTheDocument()
  })

  it('pressing Escape closes the chat', () => {
    const onClose = vi.fn()

    mockUseChatVisibility.mockReturnValueOnce({
      isOpen: true,
      toggle: vi.fn(),
      close: vi.fn(),
    })

    render(
      <ChatWindow
        customStyle={{}}
        status="online"
        messages={[]}
        onClose={onClose}
        onSendMessage={vi.fn()}
      />
    )

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })

    expect(onClose).toHaveBeenCalled()
  })
})
