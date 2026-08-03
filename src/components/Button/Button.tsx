import React from 'react'
import { theme } from '../../tokens/design-tokens'
import styles from './Button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'Lavender' | 'Mint' | 'Peach'
  size?: 'Small' | 'Medium' | 'Large'
  showIcon?: boolean
  children?: React.ReactNode
}

export function Button({
  color = 'Lavender',
  size = 'Small',
  showIcon = false,
  children,
  className,
  style,
  type = 'button',
  disabled,
  ...rest
}: ButtonProps) {
  const colorTokens = theme.button[color.toLowerCase() as 'lavender' | 'mint' | 'peach']
  const sizeTokens = theme.button.sizes[size]

  const classNames = [
    styles.root,
    styles[`color${color}`],
    styles[`size${size}`],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={classNames}
      style={{
        ['--btn-bg' as string]: colorTokens.bg,
        ['--btn-color' as string]: colorTokens.color,
        ['--btn-hover-bg' as string]: colorTokens.hoverBg,
        ['--btn-padding' as string]: sizeTokens.padding,
        ['--btn-font-size' as string]: sizeTokens.fontSize,
        ['--btn-line-height' as string]: sizeTokens.lineHeight,
        ['--btn-radius' as string]: sizeTokens.borderRadius,
        ...style,
      }}
    >
      {showIcon && <span className={styles.icon} aria-hidden="true" />}
      <span className={styles.label}>{children}</span>
    </button>
  )
}
