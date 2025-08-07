import React from 'react'
import { styles } from './ChatBanner.styles'

interface ChatBannerProps {
  message: string
}

export const ChatBanner = ({
  message,
  ...props
}: React.ComponentPropsWithRef<'div'> & ChatBannerProps) => {
  return (
    <div role="alert" style={styles.banner} {...props}>
      {message}
    </div>
  )
}
