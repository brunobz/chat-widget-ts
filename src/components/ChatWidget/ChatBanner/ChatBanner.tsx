import React from 'react'

interface ChatBannerProps {
  message: string
}

export const ChatBanner = ({
  message,
  ...props
}: React.ComponentPropsWithRef<'div'> & ChatBannerProps) => {
  return (
    <div
      role="alert"
      style={{
        backgroundColor: '#fffae6',
        color: '#856404',
        padding: '8px 12px',
        margin: '0 10px 10px 10px',
        borderRadius: '4px',
        fontSize: '0.9rem',
        border: '1px solid #ffeeba',
      }}
      {...props}
    >
      {message}
    </div>
  )
}
