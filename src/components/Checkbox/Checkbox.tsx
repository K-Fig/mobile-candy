import React from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  label?: string
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  id?: string
  name?: string
  value?: string
  disabled?: boolean
  className?: string
}

export function Checkbox({
  label = 'Option label',
  checked = false,
  onChange,
  id,
  name,
  value,
  disabled,
  className,
}: CheckboxProps) {
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
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
      />
      <span className={styles.box} aria-hidden="true">
        {checked && (
          <span className={styles.checkmark}>
            <span className={styles.bar1} />
            <span className={styles.bar2} />
          </span>
        )}
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
