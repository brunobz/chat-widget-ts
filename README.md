# 🧩 React Chat Widget

A modern, accessible, embeddable chat widget built with React.

> ⚡️ Built with React, TypeScript, Vite, and Vitest  
> 💬 Includes message handling, chat window toggle, and status mock  
> 🎨 Fully customizable via props (colors, icons, container, etc.)

---

## 📦 Installation

```bash
npm install @brunobz/chat-widget-ts
```

---

## 🚀 Usage

### Basic Setup ES Modules

```tsx
import { ChatWidget } from 'chat-widget-ts'

function App() {
  return <ChatWidget />
}
```

That’s it. The widget will appear as a floating button. When clicked, it opens the chat window.

---

## 🎨 Customization

You can customize the widget using the following props:

| Prop        | Type                                         | Description                         |
| ----------- | -------------------------------------------- | ----------------------------------- |
| `styles`    | `ChatWidgetStyles`                           | Object with style overrides         |
| `icon`      | `ReactNode`                                  | Custom icon for the floating button |
| `container` | `React.CSSProperties`                        | Style for the chat container        |
| `colors`    | `{ color: string, backgroundColor: string }` | Custom colors                       |

### Example with custom styles

```tsx
<ChatWidget
  styles={{
    container: { borderRadius: '16px', boxShadow: '0 0 20px #ccc' },
    colors: { color: '#00bcd4', backgroundColor: '#ffffff' },
    icon: <MyCustomIcon />,
  }}
/>
```

---

## 💾 Local Message Persistence

Messages are automatically saved to `localStorage` under the key:

```
chat-widget-messages
```

They are restored on page reload. Great for prototyping and offline UX.

---

## Simulating Chat Status (Dev Only)

You can simulate different chat statuses during development using the browser's localStorage. This is helpful for testing how the widget behaves in various scenarios (e.g. offline, maintenance).

## Key:

```bash
chat-status
```

## Available values:

- online (default)
- offline
- maintenance

## Example (in browser console):

```js
localStorage.setItem('chat-status', 'maintenance')
```

---

## 🧪 Testing

Built with [Vitest](https://vitest.dev). Includes:

- Unit tests for components
- Accessibility checks (`aria-label`, focus, etc.)
- DOM behavior (toggle, message submission)

Run tests:

```bash
npm test
# or
npx vitest run
```

---

## 📄 License

MIT

---

## 🙋 About the Author

Made by **Bruno Bianchini Zandavalle**.  
[GitHub](https://github.com/brunobz) · [LinkedIn](https://www.linkedin.com/in/bruno-bianchini-zandavalle-9ab37ab0)
