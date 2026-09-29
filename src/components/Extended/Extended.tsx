import React from 'react'
import { typography } from '../../tokens/design-tokens'
import styles from './Extended.module.css'

export type TypographyVariant = keyof Omit<typeof typography, 'fontFamily'>

export interface TypographyProps {
  variant?: TypographyVariant
  children?: React.ReactNode
  className?: string
}

export function Typography({ variant = 'bodyRegular', children, className }: TypographyProps) {
  return <span className={[styles.typography, styles[`type${variant}`], className].filter(Boolean).join(' ')}>{children}</span>
}

export interface AvatarProps {
  initials?: string
  size?: 'Small' | 'Medium' | 'Large'
  className?: string
}

export function Avatar({ initials = 'AB', size = 'Small', className }: AvatarProps) {
  return <span className={[styles.avatar, styles[`avatar${size}`], className].filter(Boolean).join(' ')}>{initials}</span>
}

export interface BadgeProps {
  label?: string
  color?: 'Lavender' | 'Mint' | 'Peach' | 'Pink' | 'Sky' | 'Yellow'
  className?: string
}

export function Badge({ label = 'Badge', color = 'Lavender', className }: BadgeProps) {
  return <span className={[styles.badge, styles[`badge${color}`], className].filter(Boolean).join(' ')}>{label}</span>
}

export interface ToggleProps {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  className?: string
}

export function Toggle({ checked = false, onChange, disabled, className }: ToggleProps) {
  return (
    <label className={[styles.toggle, className].filter(Boolean).join(' ')}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <span className={styles.toggleTrack}><span className={styles.toggleThumb} /></span>
    </label>
  )
}

export interface DividerProps { className?: string }

export function Divider({ className }: DividerProps) {
  return <hr className={[styles.divider, className].filter(Boolean).join(' ')} />
}

export interface CardProps {
  title?: string
  description?: string
  showImage?: boolean
  showButton?: boolean
  actionLabel?: string
  onAction?: () => void
  children?: React.ReactNode
  className?: string
}

export function Card({
  title = 'Card Title',
  description = 'A short description of the card content goes here.',
  showImage = true,
  showButton = false,
  actionLabel = 'Button',
  onAction,
  children,
  className,
}: CardProps) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')}>
      {showImage && <div className={styles.cardImage} aria-hidden="true" />}
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
        {showButton && <button type="button" className={styles.cardButton} onClick={onAction}>{actionLabel}</button>}
      </div>
    </article>
  )
}

export interface ListItemProps {
  title?: string
  subtitle?: string
  showIcon?: boolean
  iconType?: 'Text' | 'Image'
  imageSrc?: string
  onClick?: () => void
  className?: string
}

export function ListItem({ title = 'List Item Title', subtitle = 'Supporting text', showIcon = true, iconType = 'Text', imageSrc, onClick, className }: ListItemProps) {
  const icon = showIcon && (
    iconType === 'Image'
      ? <img src={imageSrc} alt="" className={styles.listItemImage} />
      : <span className={styles.listItemIcon} aria-hidden="true">✦</span>
  )
  const content = (
    <>
      {icon}
      <span className={styles.listItemCopy}><strong>{title}</strong><span>{subtitle}</span></span>
      <span className={styles.listItemArrow} aria-hidden="true">&gt;</span>
    </>
  )
  return onClick ? <button type="button" className={[styles.listItem, styles.listItemButton, className].filter(Boolean).join(' ')} onClick={onClick}>{content}</button> : <div className={[styles.listItem, className].filter(Boolean).join(' ')}>{content}</div>
}

export interface ListProps { children?: React.ReactNode; className?: string }

export function List({ children, className }: ListProps) {
  return <div className={[styles.list, className].filter(Boolean).join(' ')}>{children}</div>
}

export interface NavBarProps {
  title?: string
  showBack?: boolean
  showAction?: boolean
  onBack?: () => void
  onAction?: () => void
  className?: string
}

export function NavBar({ title = 'Page Title', showBack = true, showAction = true, onBack, onAction, className }: NavBarProps) {
  return (
    <nav className={[styles.navBar, className].filter(Boolean).join(' ')}>
      {showBack ? <button type="button" className={styles.navButton} onClick={onBack} aria-label="Go back">&lt;-</button> : <span className={styles.navPlaceholder} />}
      <strong>{title}</strong>
      {showAction ? <button type="button" className={styles.navButton} onClick={onAction} aria-label="More actions">...</button> : <span className={styles.navPlaceholder} />}
    </nav>
  )
}

export interface TabBarItem { label: string; icon: string }
export interface TabBarProps { items?: TabBarItem[]; activeIndex?: number; onChange?: (index: number) => void; className?: string }

const defaultTabItems: TabBarItem[] = [
  { icon: '^', label: 'Home' },
  { icon: 'o', label: 'Explore' },
  { icon: '<3', label: 'Saved' },
  { icon: '@', label: 'Profile' },
]

export function TabBar({ items = defaultTabItems, activeIndex = 0, onChange, className }: TabBarProps) {
  return <nav className={[styles.tabBar, className].filter(Boolean).join(' ')} aria-label="Primary navigation">{items.map((item, index) => <button type="button" className={index === activeIndex ? styles.tabActive : styles.tab} key={item.label} onClick={() => onChange?.(index)}><span>{item.icon}</span>{item.label}</button>)}</nav>
}

export interface SectionProps {
  title?: string
  action?: string
  showAction?: boolean
  onAction?: () => void
  children?: React.ReactNode
  className?: string
}

export function Section({ title = 'Section Title', action = 'See all', showAction = true, onAction, children, className }: SectionProps) {
  return <section className={[styles.section, className].filter(Boolean).join(' ')}><header><h2>{title}</h2>{showAction && <button type="button" onClick={onAction}>{action}</button>}</header><div>{children}</div></section>
}

export interface FooterProps { copyright?: string; links?: string[]; className?: string }

export function Footer({ copyright = '© 2026 Mobile Candy. All rights reserved.', links = ['About', 'Privacy', 'Terms', 'Help'], className }: FooterProps) {
  return <footer className={[styles.footer, className].filter(Boolean).join(' ')}><nav>{links.map(link => <a href="#" key={link}>{link}</a>)}</nav><small>{copyright}</small></footer>
}