import React from 'react'
import styles from './RadioButton.module.css'

export interface RadioButtonProps {
  label?: string
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  id?: string
  name?: string
  value?: string
  disabled?: boolean
  className?: string
}

export function RadioButton({
  label = 'Option label',
  checked = false,
  onChange,
  id,
  name,
  value,
  disabled,
  className,
}: RadioButtonProps) {
  const containerClassNames = [
    styles.root,
    checked && styles.checked,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={containerClassNames}>
      <input
        type="radio"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
      />
      <span className={styles.indicator} aria-hidden="true">
        {checked && <span className={styles.dot} />}
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
