// Mobile Candy Design System — Design Tokens
// Extracted from https://www.figma.com/design/TVUnlfOuyWj8S1feXDohHL/DS---Mobile-Candy
// 4 collections · 66 variables · 12 text styles · 3 effect styles

// ── Colors ────────────────────────────────────────────────────────────────────

export const colors = {
  // Brand pastels — button fills and accent surfaces
  lavender: '#c4b5d8',
  lavenderLight: 'rgba(196,181,216,0.2)',
  lavenderBorder: '#c8b8d8',
  mint: '#b8e8d4',
  mintLight: 'rgba(184,232,212,0.2)',
  peach: '#ffd1e3',
  peachLight: 'rgba(255,209,227,0.2)',

  // Text
  textPrimary: '#4a4458',
  textLabel: '#5b4e6b',
  textMuted: '#8b7e95',
  textOnLavender: '#5b4e6b',
  textOnMint: '#2d5e47',
  textOnPeach: '#8b4789',

  // Surfaces
  background: '#f5f0f0',
  surface: 'rgba(255,255,255,0.8)',
  surfaceOpaque: '#ffffff',

  // Borders
  borderInput: '#d4c5f9',
  borderActive: '#8b4789',
  borderMint: '#b8e8d4',
  borderPeach: '#ffd1e3',

  // Accent
  accent: '#8b4789',
} as const

// ── Typography ────────────────────────────────────────────────────────────────

export const typography = {
  fontFamily: {
    sans: "'DM Sans', sans-serif",
    display: "'Quicksand', sans-serif",
  },
  // 12 text styles from the Figma library
  displayHeader:  { fontFamily: "'Quicksand', sans-serif", fontSize: '32px', fontWeight: '700', lineHeight: '40px', color: '#4a4458' },
  mainHeader:     { fontFamily: "'Quicksand', sans-serif", fontSize: '24px', fontWeight: '700', lineHeight: '32px', color: '#4a4458' },
  subheader:      { fontFamily: "'Quicksand', sans-serif", fontSize: '20px', fontWeight: '600', lineHeight: '28px', color: '#4a4458' },
  sectionTitle:   { fontFamily: "'Quicksand', sans-serif", fontSize: '18px', fontWeight: '600', lineHeight: '24px', color: '#4a4458' },
  attention:      { fontFamily: "'Quicksand', sans-serif", fontSize: '16px', fontWeight: '600', lineHeight: '22px', color: '#8b4789' },
  bodyRegular:    { fontFamily: "'DM Sans', sans-serif",   fontSize: '16px', fontWeight: '400', lineHeight: '24px', color: '#4a4458' },
  bodyMedium:     { fontFamily: "'DM Sans', sans-serif",   fontSize: '16px', fontWeight: '500', lineHeight: '24px', color: '#4a4458' },
  caption:        { fontFamily: "'DM Sans', sans-serif",   fontSize: '12px', fontWeight: '400', lineHeight: '16px', color: '#8b7e95' },
  categoryLabel:  { fontFamily: "'DM Sans', sans-serif",   fontSize: '12px', fontWeight: '600', lineHeight: '16px', color: '#5b4e6b' },
  buttonSm:       { fontFamily: "'DM Sans', sans-serif",   fontSize: '12px', fontWeight: '500', lineHeight: '16px' },
  buttonMd:       { fontFamily: "'DM Sans', sans-serif",   fontSize: '14px', fontWeight: '500', lineHeight: '20px' },
  buttonLg:       { fontFamily: "'DM Sans', sans-serif",   fontSize: '16px', fontWeight: '500', lineHeight: '24px' },
} as const

// ── Spacing ───────────────────────────────────────────────────────────────────

export const spacing = {
  xs:   '4px',
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '20px',
  xxl:  '24px',
  xxxl: '32px',
} as const

// ── Border Radius ─────────────────────────────────────────────────────────────

export const borderRadius = {
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '24px',
  pill: '9999px',
} as const

// ── Shadows (3 effect styles) ─────────────────────────────────────────────────

export const shadows = {
  none:  'none',
  sm:    '0 1px 2px rgba(0,0,0,0.05)',
  md:    '0 4px 6px rgba(0,0,0,0.07)',
  focus: '0px 0px 8px 2px rgba(212,197,249,0.4)',
} as const

// ── Breakpoints ───────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
} as const

// ── Composed Theme ────────────────────────────────────────────────────────────

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,

  button: {
    lavender: {
      bg: '#c4b5d8',
      color: '#5b4e6b',
      hoverBg: '#b5a4cc',
    },
    mint: {
      bg: '#b8e8d4',
      color: '#2d5e47',
      hoverBg: '#a5dcc6',
    },
    peach: {
      bg: '#ffd1e3',
      color: '#8b4789',
      hoverBg: '#ffbdd6',
    },
    sizes: {
      Small:  { padding: '8px 16px',  fontSize: '12px', lineHeight: '16px', borderRadius: '9999px' },
      Medium: { padding: '10px 20px', fontSize: '14px', lineHeight: '20px', borderRadius: '24px'   },
      Large:  { padding: '12px 24px', fontSize: '16px', lineHeight: '24px', borderRadius: '16px'   },
    },
  },

  input: {
    bg: 'rgba(255,255,255,0.8)',
    border: '#d4c5f9',
    borderFocus: '#8b4789',
    borderRadius: '16px',
    labelFont: "'Quicksand', sans-serif",
    labelSize: '14px',
    labelWeight: '600',
    textSize: '16px',
    textFamily: "'DM Sans', sans-serif",
    heightText:     '56px',
    heightTextarea: '128px',
    focusShadow: '0px 0px 8px 2px rgba(212,197,249,0.4)',
  },

  radioButton: {
    unchecked: {
      bg: 'rgba(255,255,255,0.5)',
      border: 'transparent',
    },
    checked: {
      bg: 'rgba(184,232,212,0.2)',
      border: '#b8e8d4',
      dotFill: '#8b4789',
      dotBorder: '#8b4789',
    },
    height: '60px',
    borderRadius: '16px',
  },

  checkbox: {
    unchecked: {
      bg: 'rgba(255,255,255,0.5)',
      border: 'transparent',
      boxBorder: '#c8b8d8',
    },
    checked: {
      bg: 'rgba(255,209,227,0.2)',
      border: '#ffd1e3',
      boxFill: '#ffd1e3',
      boxBorder: '#8b4789',
      checkColor: '#8b4789',
    },
    height: '60px',
    borderRadius: '16px',
  },
} as const

export type Theme = typeof theme
