'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = links.map(l => l.href.slice(1))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    height: '62px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 clamp(24px, 5vw, 64px)',
    background: scrolled ? 'rgba(13,13,18,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,107,53,0.1)' : '1px solid transparent',
    transition: 'all 0.35s ease',
  }

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-dot" id="cursorDot" />
      <div className="cursor-ring" id="cursorRing" />

      <nav style={navStyle} aria-label="Main navigation">
        <a href="#hero" aria-label="Scroll to top" style={{
          fontFamily: 'var(--ff-disp)', fontWeight: 800, fontSize: '1rem',
          color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em',
        }}>
          AS<span style={{ color: 'var(--ember)' }}>.</span>dev
        </a>

        {/* Desktop */}
        <div className="desk-nav" style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
          {links.map(l => {
            const isActive = active === l.href.slice(1)
            return (
              <a key={l.href} href={l.href} style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.7rem',
                color: isActive ? 'var(--text)' : 'var(--text2)',
                textDecoration: 'none', letterSpacing: '0.04em',
                position: 'relative', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = isActive ? 'var(--text)' : 'var(--text2)'}
              >
                {l.label}
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-3px', left: 0, right: 0,
                    height: '1px', background: 'var(--ember)', borderRadius: '1px',
                  }} />
                )}
              </a>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button className="mob-btn" onClick={() => setOpen(true)} aria-label="Open navigation menu" style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', color: 'var(--text)', padding: '6px',
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mob-overlay${open ? ' open' : ''}`}>
        <button onClick={() => setOpen(false)} aria-label="Close navigation menu" style={{
          position: 'absolute', top: '20px', right: '24px',
          background: 'none', border: 'none', color: 'var(--text2)',
          fontSize: '1.5rem', cursor: 'pointer',
        }}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
