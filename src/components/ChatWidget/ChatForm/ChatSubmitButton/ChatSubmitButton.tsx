import { Send } from 'lucide-react'

export const ChatSubmitButton = ({
  ...props
}: React.ComponentPropsWithRef<'button'>) => {
  return (
    <button
      type="submit"
      disabled={props.disabled}
      aria-disabled={props.disabled}
      style={{
        padding: '8px 12px 4px',
        borderRadius: '20px',
        border: 'none',
        backgroundColor: props.disabled ? '#ccc' : '#6f33b7',
        color: 'white',
        fontWeight: 'bold',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <Send />
    </button>
  )
}
