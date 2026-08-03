import React from 'react'
import { theme } from '../../tokens/design-tokens'
import styles from './Input.module.css'

export interface InputProps {
  type?: 'Text' | 'Textarea'
  state?: 'Default' | 'Focused' | 'Filled'
  label?: string
  value?: string
  placeholder?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  className?: string
  style?: React.CSSProperties
  id?: string
  name?: string
  disabled?: boolean
}

export function Input({
  type = 'Text',
  state = 'Default',
  label = 'Label',
  value = '',
  placeholder = 'Enter text here',
  onChange,
  className,
  style,
  id,
  name,
  disabled,
}: InputProps) {
  const isFocused = state === 'Focused'
  const isFilled = state === 'Filled'
  const isTextarea = type === 'Textarea'

  const fieldClassNames = [
    styles.field,
    isFocused && styles.focused,
    isFilled && styles.filled,
    isTextarea && styles.textarea,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ')

  const containerCss: React.CSSProperties = {
    ['--input-border' as string]: isFocused ? theme.input.borderFocus : theme.input.border,
    ['--input-shadow' as string]: isFocused ? theme.input.focusShadow : 'none',
    ...style,
  }

  return (
    <div
      className={[styles.root, className].filter(Boolean).join(' ')}
      style={containerCss}
    >
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      {isTextarea ? (
        <textarea
          className={fieldClassNames}
          value={isFilled || isFocused ? value : undefined}
          placeholder={!isFilled ? placeholder : undefined}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          id={id}
          name={name}
          disabled={disabled}
          readOnly={!onChange}
        />
      ) : (
        <input
          className={fieldClassNames}
          type="text"
          value={isFilled || isFocused ? value : undefined}
          placeholder={!isFilled ? placeholder : undefined}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          id={id}
          name={name}
          disabled={disabled}
          readOnly={!onChange}
        />
      )}
    </div>
  )
}
