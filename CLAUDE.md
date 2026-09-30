# Mobile Candy — Design System Rules

Package: `@figmaposaurus/mobile-candy-ds`  
Figma file: `https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy`  
Figma file key: `TVUnlfOuyWj8S1feXDohHL`

---

## Project Structure

```
src/
  components/
    Button/           Button.tsx + Button.module.css
    Input/            Input.tsx + Input.module.css
    RadioButton/      RadioButton.tsx + RadioButton.module.css
    Checkbox/         Checkbox.tsx + Checkbox.module.css
    Extended/         Extended.tsx + Extended.module.css  ← all utility components
  figma/              *.figma.ts  ← Code Connect mappings (one per component)
  styles/
    globals.css       ← Google Fonts import, box-sizing reset, h1-h6 defaults
  tokens/
    design-tokens.ts  ← single source of truth for all tokens
  types/
    css-modules.d.ts
  index.ts            ← barrel: re-exports all components + all tokens
showcase/
  main.tsx            ← hash router
  App.tsx             ← design system gallery (homepage)
  UsersPage.tsx       ← example page
  ProductDetailPage.tsx ← Figma-implemented screen
dist/                 ← built output (ESM + .d.ts + style.css)
```

All components and tokens are imported from the barrel:
```ts
import { Button, Badge, Avatar, colors, typography } from '../src'
// or for external consumers:
import { Button } from '@figmaposaurus/mobile-candy-ds'
```

---

## Components

### Core Four
All exported from the package root. Props use PascalCase string unions matching Figma variant names exactly.

#### Button
```ts
color?:    'Lavender' | 'Mint' | 'Peach'   // default: 'Lavender'
size?:     'Small' | 'Medium' | 'Large'     // default: 'Small'
showIcon?: boolean                           // default: false
disabled?: boolean
children?: React.ReactNode                   // button label
```
Color maps to CSS custom properties `--btn-bg`, `--btn-color`, `--btn-hover-bg`. Size maps to `--btn-padding`, `--btn-font-size`, `--btn-line-height`, `--btn-radius`.

#### Input
```ts
type?:        'Text' | 'Textarea'                   // default: 'Text'
state?:       'Default' | 'Focused' | 'Filled'      // default: 'Default'
label?:       string                                 // default: 'Label'
placeholder?: string
value?:       string
disabled?:    boolean
onChange?:    ChangeEventHandler
```
Focus state sets `--input-border: #8b4789` and `--input-shadow` (lavender glow). Default border is `#d4c5f9`.

#### RadioButton
```ts
label?:    string    // default: 'Option label'
checked?:  boolean   // default: false
disabled?: boolean
onChange?: ChangeEventHandler
name?:     string
value?:    string
```
Checked state: mint tint background (`rgba(184,232,212,0.2)`), mint border (`#b8e8d4`), accent dot (`#8b4789`).

#### Checkbox
```ts
label?:    string    // default: 'Option label'
checked?:  boolean   // default: false
disabled?: boolean
onChange?: ChangeEventHandler
name?:     string
value?:    string
```
Checked state: peach tint background (`rgba(255,209,227,0.2)`), peach border (`#ffd1e3`), peach box fill, accent checkmark (`#8b4789`).

---

### Extended Components (`src/components/Extended/Extended.tsx`)

All utility / layout components live in a single file + CSS module. Import from the same barrel.

#### Typography
```ts
variant?: TypographyVariant  // any key from typography in design-tokens.ts (e.g. 'subheader', 'caption')
children?: React.ReactNode
```

#### Avatar
```ts
initials?: string            // default: 'AB'
size?:     'Small' | 'Medium' | 'Large'
```

#### Badge
```ts
label?: string
color?: 'Lavender' | 'Mint' | 'Peach' | 'Pink' | 'Sky' | 'Yellow'
```

#### Toggle
```ts
checked?:  boolean
onChange?: ChangeEventHandler
disabled?: boolean
```

#### Divider
No props (renders an `<hr>`).

#### Card
```ts
title?:       string
description?: string
showImage?:   boolean
showButton?:  boolean
actionLabel?: string
onAction?:    () => void
children?:    React.ReactNode
```

#### ListItem
```ts
title?:    string
subtitle?: string
showIcon?: boolean
onClick?:  () => void
```
Renders a `<button>` if `onClick` is provided, `<div>` otherwise.

#### List
Wrapper for `<ListItem>` children.

#### NavBar
```ts
title?:      string           // default: 'Page Title'
showBack?:   boolean          // default: true
showAction?: boolean          // default: true
onBack?:     () => void
onAction?:   () => void
```

#### TabBar
```ts
items?:       { label: string; icon: string }[]
activeIndex?: number
onChange?:    (index: number) => void
```

#### Section
```ts
title?:      string
action?:     string           // default: 'See all'
showAction?: boolean
onAction?:   () => void
children?:   React.ReactNode
```

#### Footer
```ts
copyright?: string
links?:     string[]          // default: ['About', 'Privacy', 'Terms', 'Help']
```

---

## Component Architecture

### Core four: CSS custom properties pattern
Design tokens are injected as CSS custom properties on the element's `style` attribute, consumed by the CSS Module:

```tsx
// Button.tsx — token bridge
<button
  style={{
    ['--btn-bg' as string]:       theme.button[colorKey].bg,
    ['--btn-color' as string]:    theme.button[colorKey].color,
    ['--btn-hover-bg' as string]: theme.button[colorKey].hoverBg,
    ['--btn-padding' as string]:  theme.button.sizes[size].padding,
    // ...
  }}
  className={[styles.root, styles[`color${color}`], styles[`size${size}`]].join(' ')}
/>
```

```css
/* Button.module.css — consumes vars */
.root { background-color: var(--btn-bg); padding: var(--btn-padding); }
```

### Extended components: direct CSS Module classes
No CSS custom properties — tokens are hardcoded in the CSS module:

```tsx
// Extended.tsx
<span className={[styles.badge, styles[`badge${color}`]].join(' ')}>{label}</span>
```

```css
/* Extended.module.css */
.badgeMint { background: rgba(184,232,212,0.3); color: #2d5e47; }
```

**Do not add `style` props to DS components.** Wrap in a `<div>` to apply layout overrides from outside.

---

## Design Tokens (`src/tokens/design-tokens.ts`)

All tokens are `as const`. Exported individually and composed into `theme`.

### Colors
| Token | Value | Use |
|---|---|---|
| `lavender` | `#c4b5d8` | Button fill (Lavender) |
| `lavenderLight` | `rgba(196,181,216,0.2)` | Tint surface |
| `lavenderBorder` | `#c8b8d8` | Checkbox unchecked box border, card borders |
| `mint` | `#b8e8d4` | Button fill (Mint), RadioButton checked border |
| `mintLight` | `rgba(184,232,212,0.2)` | RadioButton checked bg |
| `peach` | `#ffd1e3` | Button fill (Peach), Checkbox checked border/box |
| `peachLight` | `rgba(255,209,227,0.2)` | Checkbox checked bg |
| `textPrimary` | `#4a4458` | Body text, headings |
| `textLabel` | `#5b4e6b` | Labels, button text on lavender |
| `textMuted` | `#8b7e95` | Placeholder, captions |
| `textOnMint` | `#2d5e47` | Button text on Mint |
| `textOnPeach` | `#8b4789` | Button text on Peach |
| `background` | `#f5f0f0` | Page background |
| `surface` | `rgba(255,255,255,0.8)` | Input / RadioButton / Checkbox surface |
| `surfaceOpaque` | `#ffffff` | Cards, opaque surfaces |
| `borderInput` | `#d4c5f9` | Input default border |
| `borderActive` | `#8b4789` | Focus ring, active border |
| `accent` | `#8b4789` | Focus outlines, active indicators, accent text |

### Typography (12 text styles)
Each text style is an object with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, and (where applicable) `color`. Spread directly into inline styles:

```ts
style={{ ...typography.subheader }}
// Override color:
style={{ ...typography.bodyMedium, color: colors.accent }}
```

| Style | Family | Size | Weight | Line Height |
|---|---|---|---|---|
| `displayHeader` | Quicksand | 32px | 700 | 40px |
| `mainHeader` | Quicksand | 24px | 700 | 32px |
| `subheader` | Quicksand | 20px | 600 | 28px |
| `sectionTitle` | Quicksand | 18px | 600 | 24px |
| `attention` | Quicksand | 16px | 600 | 22px — color: accent |
| `bodyRegular` | DM Sans | 16px | 400 | 24px |
| `bodyMedium` | DM Sans | 16px | 500 | 24px |
| `caption` | DM Sans | 12px | 400 | 16px — color: textMuted |
| `categoryLabel` | DM Sans | 12px | 600 | 16px — color: textLabel |
| `buttonSm` | DM Sans | 12px | 500 | 16px |
| `buttonMd` | DM Sans | 14px | 500 | 20px |
| `buttonLg` | DM Sans | 16px | 500 | 24px |

Font stacks: `typography.fontFamily.display` = `"'Quicksand', sans-serif"` · `typography.fontFamily.sans` = `"'DM Sans', sans-serif"`. Both loaded via Google Fonts in `globals.css`.

### Figma font name translation
Figma MCP output uses font strings like `font-['Quicksand:SemiBold']` or `font-['DM_Sans:Medium']`. Translate:
- `Quicksand:*` → `fontFamily: typography.fontFamily.display`
- `DM_Sans:*` or `DM Sans:*` → `fontFamily: typography.fontFamily.sans`
- `:Bold` / `700` → `fontWeight: 700`
- `:SemiBold` / `600` → `fontWeight: 600`
- `:Medium` / `500` → `fontWeight: 500`
- `:Regular` / `400` → `fontWeight: 400`

### Spacing
`xs=4` · `sm=8` · `md=12` · `lg=16` · `xl=20` · `xxl=24` · `xxxl=32` (all px strings)

### Border Radius
`sm=8` · `md=12` · `lg=16` · `xl=24` · `pill=9999` (all px strings)

### Shadows (3 effect styles)
| Name | Value |
|---|---|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `md` | `0 4px 6px rgba(0,0,0,0.07)` |
| `focus` | `0 0 8px 2px rgba(212,197,249,0.4)` — lavender glow |

Card shadow (from Figma designs, not in tokens): `0 8px 12px rgba(184,232,212,0.15)`

---

## Styling Approach

### In DS components (`src/components/`)
CSS Modules per component (`.module.css`). CSS custom properties bridge TypeScript props to CSS for the core four. Never use Tailwind. Never import one component's CSS module from another.

### In showcase pages (`showcase/`)
**Inline React styles only** — no CSS Modules, no Tailwind, no global class usage. Tokens are imported from `'../src'` and used directly:

```tsx
import { colors, typography, borderRadius, shadows } from '../src/tokens/design-tokens'

// Spread text style objects:
<p style={{ ...typography.subheader, margin: 0 }}>Title</p>

// Use token values:
<div style={{ background: colors.surfaceOpaque, borderRadius: borderRadius.lg, boxShadow: shadows.md }}>
```

### No responsive breakpoints
Components are fixed-width or `width: 100%`. Showcase pages use `maxWidth` containers. No media queries in the DS.

---

## Figma MCP Integration Workflow

### Implementing a screen from Figma

1. Call `get_design_context` with the node ID and file key from the Figma URL
2. The tool returns Tailwind-based JSX. **Convert all Tailwind classes to inline styles using design tokens.**
3. `CodeConnectSnippet` wrappers are hints — strip the wrapper, use the inner component JSX directly
4. Font references (e.g. `font-['Quicksand:SemiBold']`) → translate using the font name mapping above
5. Color references (e.g. `text-[color:var(--text-primary,#4a4458)]`) → use `colors.textPrimary`

### Tailwind → inline style translation examples
```
bg-[var(--bg-white,white)]          → background: colors.surfaceOpaque
rounded-[var(--radius-lg,16px)]     → borderRadius: borderRadius.lg
drop-shadow-[0px_8px_12px_...]      → boxShadow: '0 8px 12px ...'
gap-[16px]                          → gap: '16px'
pb-[120px]                          → paddingBottom: '120px'
font-semibold                       → fontWeight: 600
text-[28px]                         → fontSize: '28px'
leading-[36.4px]                    → lineHeight: '36.4px'
tracking-[-0.28px]                  → letterSpacing: '-0.28px'
```

### Mobile screen layout (390px phone frames)
For screens designed at mobile dimensions (390px), use this wrapper pattern:

```tsx
// Outer: desktop background, center the phone frame
<div style={{ background: '#e8e3e0', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
  // Inner: 390px phone column
  <div style={{ width: '390px', maxWidth: '100%', background: '#fef9f5', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <NavBar title="Page Title" onBack={() => { window.location.hash = '/' }} />
    <div style={{ flex: 1, paddingBottom: '120px' }}>
      {/* scrollable content */}
    </div>
    {/* Sticky bottom bar */}
    <div style={{ position: 'sticky', bottom: 0, background: 'rgba(255,255,255,0.93)', borderTop: `1px solid ${colors.lavenderBorder}`, padding: '12px 16px 24px' }}>
      {/* action buttons */}
    </div>
  </div>
</div>
```

Page background `#fef9f5` is the warm cream used in product/content screens (different from `colors.background` `#f5f0f0`).

### Asset handling
Image and SVG assets from `get_design_context` are provided as Figma CDN URLs:
```ts
const imgHero = 'https://www.figma.com/api/mcp/asset/UUID.png'
// Use directly in src — valid for 7 days
<img src={imgHero} alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```
For production, download assets to `public/` using the `download_assets` MCP tool before the URLs expire.

---

## Code Connect (`src/figma/`)

One `.figma.ts` file per component. File naming: `ComponentName.figma.ts`.

### File structure
```ts
// @url https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/...?node-id=X-Y
// @source ../components/Button/Button.tsx
// @component Button
import figma from 'figma'

const instance = figma.selectedInstance

const size  = instance.getEnum('Size',  { Small: 'Small', Medium: 'Medium', Large: 'Large' })
const color = instance.getEnum('Color', { Lavender: 'Lavender', Mint: 'Mint', Peach: 'Peach' })
const showIcon = instance.getBoolean('showIcon')
const label    = instance.getString('label')

export default {
  example: figma.code`<Button size="${size}" color="${color}"${showIcon ? figma.code` showIcon` : ''}>${label}</Button>`,
  imports: ["import { Button } from '@figmaposaurus/mobile-candy-ds'"],
  id: 'button',
}
```

### Key rules for Code Connect
- Enum keys MUST exactly match Figma variant property names (PascalCase: `Small`, `Mint`, `Checked`, etc.)
- Boolean Figma state enums: `instance.getEnum('State', { 'Unchecked': false, 'Checked': true })`
- Conditional props use nested `figma.code` tagged template: `${checked ? figma.code` checked` : ''}`
- `id` is kebab-case component name
- `imports` always references the published package `@figmaposaurus/mobile-candy-ds`
- Extended components (Badge, Avatar, NavBar, etc.) map to their exports from the same package

---

## Figma File Structure

4 variable collections · 66 variables · 12 text styles · 3 effect styles (matching the token tables above).

When writing to this Figma file via `use_figma`, match these naming conventions exactly — PascalCase variant names (`Small`, `Medium`, `Large`; `Lavender`, `Mint`, `Peach`; `Default`, `Focused`, `Filled`).

---

## Showcase Routing

Hash-based router in `showcase/main.tsx`:
```
#/                 → App.tsx (component gallery)
#/users            → UsersPage.tsx
#/product-detail   → ProductDetailPage.tsx
```

### Adding a new showcase page
1. Create `showcase/NewPage.tsx` — use inline styles + tokens from `'../src'`
2. Add route in `showcase/main.tsx`:
   ```tsx
   if (route === 'new-page') return <NewPage />
   ```
3. Add nav link in `showcase/App.tsx` header:
   ```tsx
   <a href="#/new-page" style={{ ...linkStyle }}>New Page →</a>
   ```

Back-navigation from showcase pages: `window.location.hash = '/'`

---

## Icon System

No dedicated icon library. Icons appear in two forms:

1. **SVG assets from Figma** — rendered as `<img>` tags with Figma CDN URLs (status dots, decorative marks):
   ```tsx
   <img src={svgAssetUrl} alt="" style={{ width: '6px', height: '6px' }} />
   ```

2. **Button icon** — the `showIcon` prop on `Button` renders a built-in `+` decoration via CSS; it is not configurable.

No icon naming convention is established. There is no icon font or icon component system.

---

## CSS

All styles compile to `dist/style.css`. Consumers must import it explicitly:

```ts
import '@figmaposaurus/mobile-candy-ds/style.css'
```

CSS Modules are used per component; class names are hash-scoped at build time. Do not reference raw class names from outside the component.

---

## Build

```bash
npm run build        # vite build + tsc declarations
npm run dev          # showcase dev server (src/showcase/) → localhost:5173
npm run type-check   # tsc --noEmit only
```

Output: `dist/` — ESM only, React externalized (`react`, `react/jsx-runtime`, `react-dom`, `react-dom/client`).

TypeScript config notes:
- `"jsx": "react-jsx"` — no need to import React in component files
- `"noUnusedLocals": true` — remove unused imports before committing
- `@figma/code-connect/figma-types` included in types for `.figma.ts` files
