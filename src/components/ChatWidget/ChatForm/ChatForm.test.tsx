import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ChatForm } from './ChatForm'

describe('ChatForm', () => {
  it('disables input and send button in maintenance mode', () => {
    render(<ChatForm disabled={true} onSubmitForm={() => ''} />)

    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('triggers onSend when send button is clicked', () => {
    const onSendMock = vi.fn()
    render(<ChatForm disabled={false} onSubmitForm={onSendMock} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Test' },
    })

    fireEvent.click(screen.getByRole('button'))
    expect(onSendMock).toHaveBeenCalled()
  })

  it('does not trigger onSend when input is empty', () => {
    const onSendMock = vi.fn()

    render(<ChatForm disabled={false} onSubmitForm={onSendMock} />)

    fireEvent.click(screen.getByRole('button'))
    expect(onSendMock).not.toHaveBeenCalled()
  })
})
