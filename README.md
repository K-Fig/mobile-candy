# mobile-candy

Dreamy pastel design system for mobile-first React interfaces.

## Installation

```bash
npm install @figmaposaurus/mobile-candy-ds
```

React 18 or 19 must be provided by your application (`react` and `react-dom` are peer dependencies).

## CSS

The package does **not** inject styles automatically. You must import the stylesheet once, at your application entry point:

```ts
// index.tsx / main.tsx — before any component imports
import '@figmaposaurus/mobile-candy-ds/style.css'
```

### Why a manual import?

All component styles (CSS Modules + global tokens) are concatenated into a single `dist/style.css` during the build (`cssCodeSplit: false`). Vite extracts this file out of the JS module graph entirely, so importing a component does **not** pull in CSS as a side effect. The stylesheet must be loaded explicitly.

The `"sideEffects": ["**/*.css"]` field in `package.json` ensures bundlers do not tree-shake the import away when consuming source files directly (e.g., in a monorepo that skips the pre-build step).

### Supported import paths

| Import | What you get |
|---|---|
| `@figmaposaurus/mobile-candy-ds/style.css` | All styles (canonical) |

The path `./dist/style.css` is intentionally **not** exported — prefer the canonical path above so your imports survive an internal output rename.

## Usage

```tsx
import { Button, Input, RadioButton, Checkbox } from '@figmaposaurus/mobile-candy-ds'

export default function App() {
  return <Button variant="primary" size="medium">Hello</Button>
}
```

## Components

| Component | Props |
|---|---|
| `Button` | `variant`, `size`, `disabled`, `onClick` |
| `Input` | `label`, `placeholder`, `multiline`, `disabled`, `value`, `onChange` |
| `RadioButton` | `label`, `checked`, `disabled`, `onChange` |
| `Checkbox` | `label`, `checked`, `disabled`, `onChange` |
| `Typography` | `variant`, `children` |
| `Avatar` | `initials`, `size` |
| `Badge` | `label`, `color` |
| `Toggle` | `checked`, `disabled`, `onChange` |
| `Divider` | `className` |
| `Card` | `title`, `description`, `showImage`, `showButton`, `actionLabel` |
| `ListItem` | `title`, `subtitle`, `showIcon`, `onClick` |
| `List` | `children` |
| `NavBar` | `title`, `showBack`, `showAction` |
| `TabBar` | `items`, `activeIndex`, `onChange` |
| `Section` | `title`, `action`, `showAction`, `children` |
| `Footer` | `copyright`, `links` |
