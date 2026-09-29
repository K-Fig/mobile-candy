import React, { useEffect, useMemo, useState } from 'react'
import { Input } from '../src'
import { colors, typography, borderRadius, shadows } from '../src/tokens/design-tokens'

// ─────────────────────────────────────────────────────────────────────────────
// Implements Figma node 2:238 "Users" (User Directory) from
// https://www.figma.com/design/LEpEeCr9f2e5OKYRM1U9PV/Annotation-example
//
// Design annotations honored:
//  • Filters   → live search + department/status filtering of the UserList
//  • UserList  → content sourced from https://dummyjson.com/users
//  • Pagination → navigating pages updates the visible UserList content
// ─────────────────────────────────────────────────────────────────────────────

interface User {
  id: number
  name: string
  role: string
  email: string
  department: string
  status: 'Active' | 'Inactive'
  joined: string
}

// Seed matching the Figma design — renders instantly and offline, then gets
// replaced by the live dummyjson data set once the fetch resolves.
const SEED_USERS: User[] = [
  { id: 1, name: 'Alice Johnson', role: 'Senior Developer', email: 'alice.johnson@company.com', department: 'Engineering', status: 'Active', joined: 'March 15, 2022' },
  { id: 2, name: 'Bob Smith', role: 'Product Manager', email: 'bob.smith@company.com', department: 'Product', status: 'Active', joined: 'July 22, 2021' },
  { id: 3, name: 'Carol Williams', role: 'UX Designer', email: 'carol.williams@company.com', department: 'Design', status: 'Active', joined: 'January 10, 2023' },
  { id: 4, name: 'David Brown', role: 'Marketing Lead', email: 'david.brown@company.com', department: 'Marketing', status: 'Inactive', joined: 'November 5, 2020' },
  { id: 5, name: 'Emma Davis', role: 'DevOps Engineer', email: 'emma.davis@company.com', department: 'Engineering', status: 'Active', joined: 'September 18, 2022' },
]

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

interface DummyUser {
  id: number
  firstName: string
  lastName: string
  email: string
  company?: { department?: string; title?: string }
}

// dummyjson has no status/join-date, so derive them deterministically from id
// to keep the demo stable across renders.
function mapDummyUser(u: DummyUser): User {
  return {
    id: u.id,
    name: `${u.firstName} ${u.lastName}`,
    role: u.company?.title || 'Team Member',
    email: u.email,
    department: u.company?.department || 'General',
    status: u.id % 4 === 0 ? 'Inactive' : 'Active',
    joined: `${MONTHS[u.id % 12]} ${((u.id * 7) % 28) + 1}, ${2020 + (u.id % 4)}`,
  }
}

const PAGE_SIZE = 5

const chrome = {
  pageBg: '#f5f0f0',
  cardBg: '#ffffff',
  cardBorder: '#cfcbc8',
  dropdownBorder: '#d1d5dc',
  ink: 'rgba(0,0,0,0.87)',
  roleText: '#4a5565',
  emailText: '#6a7282',
  metaLabel: '#364153',
  badgeBg: '#dbeafe',
  badgeText: '#193cb8',
  accent: '#322fee',
  placeholder: '#cfcbc8',
} as const

function StatusPill({ status }: { status: User['status'] }) {
  const active = status === 'Active'
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '11px 16px',
        borderRadius: borderRadius.md,
        border: '1px solid #ffffff',
        background: active ? '#fbfbfb' : 'transparent',
        fontFamily: typography.fontFamily.sans,
        fontSize: '16px',
        lineHeight: '24px',
        color: chrome.ink,
        whiteSpace: 'nowrap',
      }}
    >
      {status}
    </span>
  )
}

function UserCard({ user }: { user: User }) {
  return (
    <div
      style={{
        background: chrome.cardBg,
        border: `1px solid ${chrome.cardBorder}`,
        borderRadius: borderRadius.xl,
        boxShadow: shadows.md,
        padding: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}
    >
      {/* Left: identity */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h3 style={{ fontFamily: typography.fontFamily.display, fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: chrome.ink, margin: 0 }}>
            {user.name}
          </h3>
          <StatusPill status={user.status} />
        </div>
        <p style={{ fontFamily: typography.fontFamily.sans, fontSize: '16px', lineHeight: '24px', color: chrome.roleText, margin: '6px 0 0' }}>
          {user.role}
        </p>
        <p style={{ fontFamily: typography.fontFamily.sans, fontSize: '14px', lineHeight: '20px', color: chrome.emailText, margin: '4px 0 0' }}>
          {user.email}
        </p>
      </div>

      {/* Right: metadata */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontFamily: typography.fontFamily.sans, fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: chrome.metaLabel }}>
            Department:
          </span>
          <span
            style={{
              background: chrome.badgeBg,
              color: chrome.badgeText,
              borderRadius: borderRadius.pill,
              padding: '4px 12px',
              fontFamily: typography.fontFamily.sans,
              fontSize: '14px',
              lineHeight: '20px',
              whiteSpace: 'nowrap',
            }}
          >
            {user.department}
          </span>
        </div>
        <span style={{ fontFamily: typography.fontFamily.sans, fontSize: '14px', lineHeight: '20px', color: chrome.emailText }}>
          Joined: {user.joined}
        </span>
      </div>
    </div>
  )
}

const dropdownStyle: React.CSSProperties = {
  height: '39px',
  width: '100%',
  border: `1px solid ${chrome.dropdownBorder}`,
  borderRadius: '10px',
  padding: '0 12px',
  fontFamily: typography.fontFamily.sans,
  fontSize: '16px',
  color: chrome.ink,
  background: chrome.cardBg,
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: typography.fontFamily.display,
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: chrome.ink,
  marginBottom: '8px',
}

function PageButton({
  children,
  onClick,
  disabled,
  active,
  variant = 'number',
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  active?: boolean
  variant?: 'number' | 'edge'
}) {
  const edge = variant === 'edge'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: edge ? undefined : '38px',
        height: edge ? '39.6px' : '35.6px',
        padding: edge ? '10px 18px' : '8px 16px',
        borderRadius: '39px',
        border: edge ? `2px solid ${chrome.cardBorder}` : 'none',
        background: active ? chrome.accent : 'transparent',
        color: active ? '#ffffff' : edge ? '#000000' : chrome.accent,
        fontFamily: typography.fontFamily.sans,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '19.6px',
        textTransform: 'uppercase',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  )
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(SEED_USERS)
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('All')
  const [status, setStatus] = useState('All')
  const [page, setPage] = useState(1)

  // Content annotation: source the UserList from dummyjson (15 → 3 pages of 5).
  useEffect(() => {
    let cancelled = false
    fetch('https://dummyjson.com/users?limit=15&select=firstName,lastName,email,company')
      .then(res => res.json())
      .then((data: { users: DummyUser[] }) => {
        if (!cancelled && Array.isArray(data.users) && data.users.length) {
          setUsers(data.users.map(mapDummyUser))
        }
      })
      .catch(() => {/* keep seed data offline */})
    return () => { cancelled = true }
  }, [])

  const departments = useMemo(
    () => ['All', ...Array.from(new Set(users.map(u => u.department))).sort()],
    [users],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return users.filter(u => {
      const matchesQuery =
        !q ||
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
      const matchesDept = department === 'All' || u.department === department
      const matchesStatus = status === 'All' || u.status === status
      return matchesQuery && matchesDept && matchesStatus
    })
  }, [users, query, department, status])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const start = (currentPage - 1) * PAGE_SIZE
  const visible = filtered.slice(start, start + PAGE_SIZE)

  // Reset to page 1 whenever the filters change the result set out from under us.
  useEffect(() => { setPage(1) }, [query, department, status])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: chrome.pageBg,
        fontFamily: typography.fontFamily.sans,
        padding: '48px 152px 80px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Back link to the showcase gallery */}
        <a
          href="#/"
          style={{ fontFamily: typography.fontFamily.sans, fontSize: '14px', color: colors.accent, textDecoration: 'none' }}
        >
          ← Back to showcase
        </a>

        {/* Header */}
        <header>
          <h1 style={{ ...typography.displayHeader, color: chrome.ink, margin: 0 }}>User Directory</h1>
          <p style={{ fontFamily: typography.fontFamily.sans, fontSize: '20px', lineHeight: '28px', color: chrome.ink, margin: '4px 0 0' }}>
            Browse and filter through our team members
          </p>
        </header>

        {/* Filters */}
        <section
          style={{
            background: chrome.cardBg,
            border: `1px solid ${chrome.cardBorder}`,
            borderRadius: borderRadius.xl,
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 320px', minWidth: '260px' }}>
              <Input
                type="Text"
                label="Search Users"
                placeholder="Search by name, email, or role..."
                value={query}
                state={query ? 'Filled' : 'Default'}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <div style={{ flex: '1 1 220px', minWidth: '180px' }}>
              <label style={labelStyle}>Department</label>
              <select style={dropdownStyle} value={department} onChange={e => setDepartment(e.target.value)}>
                {departments.map(d => (
                  <option key={d} value={d}>{d === 'All' ? 'All Departments' : d}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: '1 1 220px', minWidth: '180px' }}>
              <label style={labelStyle}>Status</label>
              <select style={dropdownStyle} value={status} onChange={e => setStatus(e.target.value)}>
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          <p style={{ fontFamily: typography.fontFamily.sans, fontSize: '14px', lineHeight: '20px', color: chrome.roleText, margin: 0 }}>
            Showing {visible.length} of {filtered.length} users
          </p>
        </section>

        {/* UserList */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {visible.length === 0 ? (
            <div
              style={{
                background: chrome.cardBg,
                border: `1px solid ${chrome.cardBorder}`,
                borderRadius: borderRadius.xl,
                boxShadow: shadows.md,
                padding: '40px 25px',
                textAlign: 'center',
                color: chrome.roleText,
                fontFamily: typography.fontFamily.sans,
              }}
            >
              No users match the current filters.
            </div>
          ) : (
            visible.map(u => <UserCard key={u.id} user={u} />)
          )}
        </section>

        {/* Pagination */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <PageButton variant="edge" disabled={currentPage === 1} onClick={() => setPage(p => Math.max(1, p - 1))}>
            Previous
          </PageButton>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map(n => (
            <PageButton key={n} active={n === currentPage} onClick={() => setPage(n)}>
              {n}
            </PageButton>
          ))}
          <PageButton variant="edge" disabled={currentPage === pageCount} onClick={() => setPage(p => Math.min(pageCount, p + 1))}>
            Next
          </PageButton>
        </nav>
      </div>
    </div>
  )
}
