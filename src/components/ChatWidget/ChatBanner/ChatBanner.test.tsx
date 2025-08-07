import { render, screen } from '@testing-library/react'
import { ChatBanner } from './ChatBanner'
import { describe, expect, it } from 'vitest'

describe('ChatBanner', () => {
  it('renders banner message', () => {
    render(<ChatBanner message={'Service is unavailable'} />)

    expect(screen.getByText(/Service is unavailable/i)).toBeInTheDocument()
  })
})
