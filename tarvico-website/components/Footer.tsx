'use client'

import Link from 'next/link'
import BrandWordmark from '@/components/BrandWordmark'
import InceptionBadge, { INCEPTION_URL } from '@/components/InceptionBadge'

const cols = [
  {
    title: 'Company',
    links: [
      { href: '/about',    label: 'About Tarvico' },
      { href: '/founder',  label: 'Founder' },
      { href: '/vision',   label: 'Vision' },
      { href: '/newsroom', label: 'Newsroom' },
    ],
  },
  {
    title: 'Products',
    links: [
      { href: '/vytre',     label: 'Vytre AWOS' },
      { href: '/maeyen',    label: 'Maeyen' },
      { href: '/portfolio', label: 'Portfolio' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/engineering', label: 'Engineering' },
      { href: '/research',     label: 'Research' },
      { href: '/newsroom',     label: 'Newsroom' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { href: '/investors', label: 'Investor Relations' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/careers',                       label: 'Careers' },
      { href: '/contact',                       label: 'Contact' },
      { href: 'mailto:info@tarvico.com',   label: 'info@tarvico.com' },
    ],
  },
]

export default function Footer() {

  return (
    <footer className="keystone-dark" style={{
      background: 'var(--footer-bg, #171716)',
      borderTop: '1px solid var(--border-w)',
    }}>
      <div className="site-footer-main mob-px" style={{ padding: 'clamp(2.5rem, 4vw, 4rem) var(--editorial-gutter) 0' }}>
        <div className="site-footer-grid mob-stack" style={{
          display: 'grid',
          marginBottom: '2.5rem',
        }}>
          <div>
            <div className="footer-wordmark">
              <BrandWordmark footer />
            </div>
            <p style={{
              fontSize: '0.82rem',
              color: 'var(--text-2)',
              lineHeight: 1.75,
              maxWidth: 260,
              fontWeight: 300,
              marginBottom: '1.75rem',
            }}>
              A privately held U.S. technology company building artificial intelligence, digital platforms, and emerging technology businesses for global markets.
            </p>
            <address style={{
              fontStyle: 'normal',
              fontSize: '0.78rem',
              color: 'var(--text-2)',
              lineHeight: 1.7,
              fontWeight: 400,
              marginBottom: '1.75rem',
            }}>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.6rem', fontWeight: 600 }}>Registered Office</div>
              Tarvico Inc.<br />
              8 The Green, #5275<br />
              Dover, DE 19901, United States<br />
              <a href="tel:+13024396442" style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>+1 (302) 439-6442</a>
            </address>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              border: '1px solid var(--accent-line)',
              background: 'var(--accent-soft)',
              borderRadius: 999,
            }}>
              <span style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--text)',
                flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.58rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                fontWeight: 500,
              }}>
                Incorporated in Delaware, USA
              </span>
            </div>

            <div>
              <a className="footer-inception" href={INCEPTION_URL} target="_blank" rel="noopener noreferrer">
                <InceptionBadge decorative />
                <span>Member of NVIDIA Inception<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></span>
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { href: 'https://www.facebook.com/tarvicoinc', label: 'Facebook', svg: 'M24 12.073C24 5.41 18.627 0 12 0S0 5.41 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z' },
                { href: 'https://www.tiktok.com/@tarvicoinc', label: 'TikTok', svg: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
                { href: 'https://x.com/tarvicoinc', label: 'X', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { href: 'https://github.com/Tarvico', label: 'GitHub', svg: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    border: '1px solid var(--border-m)',
                    color: 'var(--text-3)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-line)'
                    e.currentTarget.style.color = 'var(--text)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-m)'
                    e.currentTarget.style.color = 'var(--text-3)'
                  }}
                >
                  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden="true">
                    <path d={svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-3)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {col.links.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-2)',
                      textDecoration: 'none',
                      fontWeight: 300,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mob-px" style={{
        borderTop: '1px solid var(--border-w)',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontWeight: 300 }}>
          © {new Date().getFullYear()} Tarvico Inc. — Delaware, United States. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Legal', href: '/legal' }].map(item => (
            <Link
              key={item.label}
              href={item.href}
              style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
