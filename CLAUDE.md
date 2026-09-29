# Mobile Candy — Design System Rules

Package: `@figmaposaurus/mobile-candy-ds`  
Figma file: `https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy`  
Figma file key: `TVUnlfOuyWj8S1feXDohHL`

## Components

Four components, all exported from the package root. Props use PascalCase string unions matching Figma variant names exactly.

### Button
```ts
color?:    'Lavender' | 'Mint' | 'Peach'   // default: 'Lavender'
size?:     'Small' | 'Medium' | 'Large'     // default: 'Small'
showIcon?: boolean                           // default: false
disabled?: boolean
```
Color maps to CSS custom properties `--btn-bg`, `--btn-color`, `--btn-hover-bg`. Size maps to `--btn-padding`, `--btn-font-size`, `--btn-line-height`, `--btn-radius`.

### Input
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

### RadioButton
```ts
label?:    string    // default: 'Option label'
checked?:  boolean   // default: false
disabled?: boolean
onChange?: ChangeEventHandler
name?:     string
value?:    string
```
Checked state: mint tint background (`rgba(184,232,212,0.2)`), mint border (`#b8e8d4`), accent dot (`#8b4789`).

### Checkbox
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

## Design Tokens (`src/tokens/design-tokens.ts`)

### Colors
| Token | Value | Use |
|---|---|---|
| `lavender` | `#c4b5d8` | Button fill (Lavender) |
| `lavenderLight` | `rgba(196,181,216,0.2)` | Tint surface |
| `lavenderBorder` | `#c8b8d8` | Checkbox unchecked box border |
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
| `borderInput` | `#d4c5f9` | Input default border |
| `borderActive` | `#8b4789` | Focus ring, active border |
| `accent` | `#8b4789` | Focus outlines, active indicators |

### Typography (12 text styles)
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

Fonts: **Quicksand** (display/headings) · **DM Sans** (body/UI). Both loaded via Google Fonts in `globals.css`.

### Spacing
`xs=4` · `sm=8` · `md=12` · `lg=16` · `xl=20` · `xxl=24` · `xxxl=32` (all px)

### Border Radius
`sm=8` · `md=12` · `lg=16` · `xl=24` · `pill=9999` (all px)

### Shadows (3 effect styles)
| Name | Value |
|---|---|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` |
| `md` | `0 4px 6px rgba(0,0,0,0.07)` |
| `focus` | `0 0 8px 2px rgba(212,197,249,0.4)` — lavender glow |

---

## Figma File Structure

4 variable collections · 66 variables · 12 text styles · 3 effect styles (matching the token tables above).

When writing to this Figma file via `use_figma`, match these naming conventions exactly — PascalCase variant names (`Small`, `Medium`, `Large`; `Lavender`, `Mint`, `Peach`; `Default`, `Focused`, `Filled`).

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
npm run dev          # showcase dev server (src/showcase/)
npm run type-check   # tsc --noEmit only
```

Output: `dist/` — ESM only, React externalized (`react`, `react/jsx-runtime`, `react-dom`, `react-dom/client`).
