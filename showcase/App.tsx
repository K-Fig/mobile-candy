import React, { useState } from 'react'
import { Button, Input, RadioButton, Checkbox } from '../src'
import { theme, colors, typography } from '../src/tokens/design-tokens'

const chrome = {
  pageBg: '#f5f0f0',
  cardBg: '#ffffff',
  hairline: 'rgba(91,78,107,0.1)',
  mutedLabel: '#8b7e95',
} as const

interface SectionProps {
  title: string
  children: React.ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <section style={{ marginTop: '48px' }}>
      <h2
        style={{
          fontFamily: theme.typography.fontFamily.display,
          fontSize: '20px',
          fontWeight: 600,
          color: colors.textLabel,
          marginBottom: '20px',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          background: chrome.cardBg,
          border: `1px solid ${chrome.hairline}`,
          borderRadius: '20px',
          padding: '32px',
        }}
      >
        {children}
      </div>
    </section>
  )
}

interface SwatchProps {
  color: string
  name: string
}

function Swatch({ color, name }: SwatchProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: color,
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      />
      <span style={{ fontSize: '11px', color: colors.textMuted, textAlign: 'center', maxWidth: '64px' }}>
        {name}
      </span>
      <span style={{ fontSize: '10px', color: colors.textMuted, fontFamily: 'monospace' }}>
        {color}
      </span>
    </div>
  )
}

export default function App() {
  const [radioSelected, setRadioSelected] = useState<string | null>(null)
  const [checkboxA, setCheckboxA] = useState(false)
  const [checkboxB, setCheckboxB] = useState(true)
  const [inputValue, setInputValue] = useState('Filled value')

  return (
    <div
      style={{
        minHeight: '100vh',
        background: chrome.pageBg,
        fontFamily: theme.typography.fontFamily.sans,
        padding: '0 0 80px',
      }}
    >
      {/* Header */}
      <header
        style={{
          background: chrome.cardBg,
          borderBottom: `1px solid ${chrome.hairline}`,
          padding: '24px 48px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <h1
              style={{
                fontFamily: theme.typography.fontFamily.display,
                fontSize: '24px',
                fontWeight: 700,
                color: colors.textLabel,
                margin: 0,
              }}
            >
              ✨ Mobile Candy
            </h1>
            <span style={{ fontSize: '14px', color: colors.textMuted }}>Design System Showcase</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="#/users"
              style={{
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: '14px',
                fontWeight: 600,
                color: colors.accent,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              User Directory →
            </a>
            <a
              href="#/product-detail"
              style={{
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: '14px',
                fontWeight: 600,
                color: colors.accent,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Product Detail →
            </a>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 48px' }}>

        {/* Color Tokens */}
        <Section title="Color Tokens">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <Swatch color={colors.lavender}     name="lavender"     />
            <Swatch color={colors.lavenderLight} name="lavenderLight" />
            <Swatch color={colors.mint}          name="mint"          />
            <Swatch color={colors.mintLight}     name="mintLight"     />
            <Swatch color={colors.peach}         name="peach"         />
            <Swatch color={colors.peachLight}    name="peachLight"    />
            <Swatch color={colors.background}    name="background"    />
            <Swatch color={colors.surfaceOpaque} name="surface"       />
            <Swatch color={colors.textPrimary}   name="textPrimary"   />
            <Swatch color={colors.textLabel}     name="textLabel"     />
            <Swatch color={colors.textMuted}     name="textMuted"     />
            <Swatch color={colors.borderInput}   name="borderInput"   />
            <Swatch color={colors.borderActive}  name="borderActive"  />
            <Swatch color={colors.accent}        name="accent"        />
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {(Object.entries(typography) as [string, typeof typography[keyof typeof typography]][]).map(([key, val]) => {
              if (typeof val === 'object' && 'fontSize' in val) {
                return (
                  <div key={key} style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                    <span style={{ ...val, color: (val as { color?: string }).color ?? colors.textPrimary }}>
                      {key}
                    </span>
                    <span style={{ fontSize: '11px', color: colors.textMuted, fontFamily: 'monospace' }}>
                      {val.fontSize} / {(val as { lineHeight?: string }).lineHeight} · {val.fontWeight}
                    </span>
                  </div>
                )
              }
              return null
            })}
          </div>
        </Section>

        {/* Button */}
        <Section title="Button">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {(['Small', 'Medium', 'Large'] as const).map(size => (
              <div key={size}>
                <p style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '12px' }}>
                  Size: {size}
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  {(['Lavender', 'Mint', 'Peach'] as const).map(color => (
                    <Button key={color} size={size} color={color}>
                      Button
                    </Button>
                  ))}
                  <Button size={size} color="Lavender" showIcon>
                    With Icon
                  </Button>
                  <Button size={size} color="Mint" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Input */}
        <Section title="Input">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '16px' }}>
                Type: Text
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <Input type="Text" state="Default" label="Default" />
                <Input type="Text" state="Focused" label="Focused" value={inputValue} />
                <Input type="Text" state="Filled"  label="Filled"  value={inputValue} />
              </div>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '16px' }}>
                Type: Textarea
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <Input type="Textarea" state="Default" label="Default" />
                <Input type="Textarea" state="Focused" label="Focused" value={inputValue} />
                <Input type="Textarea" state="Filled"  label="Filled"  value={inputValue} />
              </div>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '16px' }}>
                Interactive
              </p>
              <Input
                type="Text"
                label="Type something"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                state={inputValue ? 'Filled' : 'Default'}
              />
            </div>
          </div>
        </Section>

        {/* Radio Button */}
        <Section title="Radio Button">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton
              label="Option A"
              checked={radioSelected === 'a'}
              onChange={() => setRadioSelected('a')}
              name="demo-radio"
            />
            <RadioButton
              label="Option B"
              checked={radioSelected === 'b'}
              onChange={() => setRadioSelected('b')}
              name="demo-radio"
            />
            <RadioButton
              label="Option C (disabled)"
              checked={false}
              disabled
              name="demo-radio"
            />
          </div>
          <p style={{ fontSize: '12px', color: colors.textMuted, marginTop: '12px' }}>
            Selected: {radioSelected ?? 'none'}
          </p>
        </Section>

        {/* Checkbox */}
        <Section title="Checkbox">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox
              label="Accept terms and conditions"
              checked={checkboxA}
              onChange={e => setCheckboxA(e.target.checked)}
            />
            <Checkbox
              label="Subscribe to updates"
              checked={checkboxB}
              onChange={e => setCheckboxB(e.target.checked)}
            />
            <Checkbox
              label="Disabled option"
              checked={false}
              disabled
            />
          </div>
          <p style={{ fontSize: '12px', color: colors.textMuted, marginTop: '12px' }}>
            A: {String(checkboxA)} · B: {String(checkboxB)}
          </p>
        </Section>

      </main>
    </div>
  )
}
