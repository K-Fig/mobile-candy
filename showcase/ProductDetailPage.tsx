import { Avatar, Badge, Button, Divider, Footer, NavBar } from '../src'
import { colors, typography, borderRadius } from '../src/tokens/design-tokens'

const imgProductHeroImage = 'https://www.figma.com/api/mcp/asset/123836c0-5d5c-4e6d-965c-67f5974b16d0.png'
const imgWarningDot = 'https://www.figma.com/api/mcp/asset/fa95403a-6be5-43b5-9f15-ba7f06bbd825.svg'
const imgEllipse = 'https://www.figma.com/api/mcp/asset/d9f625d0-36dd-478a-bebe-62b235a352b5.svg'

const cardShadow = '0 8px 12px rgba(184,232,212,0.15)'

export default function ProductDetailPage() {
  return (
    <div style={{ background: '#e8e3e0', display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
      <div
        style={{
          width: '390px',
          maxWidth: '100%',
          background: '#fef9f5',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <NavBar title="Product Details" onBack={() => { window.location.hash = '/' }} />

        {/* Scrollable body */}
        <div style={{ flex: 1, paddingBottom: '120px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

          {/* Hero image */}
          <div style={{ height: '320px', overflow: 'hidden', flexShrink: 0 }}>
            <img
              alt="Essence Mascara Lash Princess"
              src={imgProductHeroImage}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Content container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 16px', boxSizing: 'border-box' }}>

            {/* Price row */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: typography.fontFamily.display, fontSize: '28px', fontWeight: 600, lineHeight: '36.4px', color: colors.accent, letterSpacing: '-0.28px', whiteSpace: 'nowrap' }}>
                $9.99
              </span>
              <span style={{ fontFamily: typography.fontFamily.sans, fontSize: '16px', fontWeight: 400, lineHeight: '27.2px', color: colors.textMuted, textDecoration: 'line-through', whiteSpace: 'nowrap' }}>
                $13.60
              </span>
              <Badge label="10% OFF" color="Peach" />
            </div>

            {/* Title and brand */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p style={{ fontFamily: typography.fontFamily.display, fontSize: '28px', fontWeight: 600, lineHeight: '36.4px', color: colors.textPrimary, letterSpacing: '-0.28px', margin: 0 }}>
                Essence Mascara Lash Princess
              </p>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ ...typography.caption }}>Brand:</span>
                <span style={{ ...typography.bodyMedium, color: '#6b5e7b' }}>Essence</span>
              </div>
            </div>

            {/* Availability */}
            <div>
              <Badge label="In Stock" color="Mint" />
            </div>

            {/* Description card */}
            <div style={{ background: colors.surfaceOpaque, borderRadius: borderRadius.lg, padding: '16px', boxShadow: cardShadow, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ ...typography.subheader, margin: 0 }}>Product Description</p>
              <p style={{ fontFamily: typography.fontFamily.sans, fontSize: '16px', fontWeight: 400, lineHeight: '27.2px', color: '#6b5e7b', margin: 0 }}>
                The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
              </p>
            </div>

            {/* Seller card */}
            <div style={{ background: colors.surfaceOpaque, borderRadius: borderRadius.lg, padding: '16px', border: `1px solid ${colors.lavenderBorder}`, boxShadow: cardShadow }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Avatar initials="BG" size="Small" />
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p style={{ ...typography.bodyMedium, margin: 0 }}>BeautyGlow Boutique</p>
                  <span style={{ ...typography.caption }}>12% response rate</span>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <img src={imgWarningDot} alt="" style={{ width: '6px', height: '6px', flexShrink: 0 }} />
                    <span style={{ fontFamily: typography.fontFamily.sans, fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: '#8b5a3c' }}>
                      Last active 3+ months ago
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inactive seller warning */}
            <div style={{ background: '#fff5ee', border: '1px solid #ff6d3f', borderRadius: '12px', padding: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', flexShrink: 0 }}>⚠️</span>
              <p style={{ fontFamily: typography.fontFamily.sans, fontSize: '12px', lineHeight: '16px', color: '#8b5a3c', margin: 0 }}>
                This seller hasn't responded in over 3 months. Your request may not be fulfilled.
              </p>
            </div>

            {/* Alternative sellers */}
            <div style={{ background: colors.surfaceOpaque, borderRadius: borderRadius.lg, padding: '16px', boxShadow: cardShadow, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ ...typography.subheader, margin: 0 }}>Other sellers for this product</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Seller row 1 */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Avatar initials="GB" size="Small" />
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ ...typography.bodyMedium, whiteSpace: 'nowrap' }}>GlamourBox</span>
                      <img src={imgEllipse} alt="" style={{ width: '6px', height: '6px', flexShrink: 0 }} />
                    </div>
                    <span style={{ ...typography.caption, whiteSpace: 'nowrap' }}>Usually responds in 2 hrs</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end', flexShrink: 0 }}>
                    <span style={{ ...typography.bodyMedium, color: colors.accent, whiteSpace: 'nowrap' }}>$10.49</span>
                    <Button size="Small" color="Lavender">Buy</Button>
                  </div>
                </div>
                <Divider />
                {/* Seller row 2 */}
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Avatar initials="BD" size="Small" />
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ ...typography.bodyMedium, whiteSpace: 'nowrap' }}>BeautyDirect</span>
                      <img src={imgEllipse} alt="" style={{ width: '6px', height: '6px', flexShrink: 0 }} />
                    </div>
                    <span style={{ ...typography.caption, whiteSpace: 'nowrap' }}>Usually responds in 30 min</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end', flexShrink: 0 }}>
                    <span style={{ ...typography.bodyMedium, color: colors.accent, whiteSpace: 'nowrap' }}>$11.99</span>
                    <Button size="Small" color="Lavender">Buy</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product details */}
            <div style={{ background: colors.surfaceOpaque, borderRadius: borderRadius.lg, padding: '16px', boxShadow: cardShadow, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ ...typography.subheader, margin: 0 }}>Product Details</p>
              <Divider />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {([
                  ['Category', 'Beauty'],
                  ['SKU', 'BEA-ESS-ESS-001'],
                  ['Shipping', '3-5 business days'],
                  ['Warranty', '1 week warranty'],
                ] as const).map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ ...typography.bodyMedium, color: colors.textMuted }}>{label}</span>
                    <span style={{ ...typography.bodyMedium }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <Footer copyright="© 2026 Marketplace Inc. All rights reserved." />
        </div>

        {/* Sticky bottom bar */}
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            background: 'rgba(255,255,255,0.93)',
            borderTop: `1px solid ${colors.lavenderBorder}`,
            padding: '12px 16px 24px',
            boxShadow: '0 -4px 16px rgba(0,0,0,0.06)',
            display: 'flex',
            gap: '12px',
          }}
        >
          <Button size="Small" color="Peach">Buy Anyway</Button>
          <Button size="Small" color="Mint" showIcon>See Alternatives</Button>
        </div>
      </div>
    </div>
  )
}
