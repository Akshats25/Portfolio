'use client'
import { useEffect, useState, useRef } from 'react'
import Curtain from './Curtain'

const ROLES_OUTLINE = ['Developer', 'Designer', 'Creator']
const ROLES_TYPE    = [ 'Python & AI Enthusiast', 'Cloud Computing Learner', 'Building real-world projects']

export default function Hero() {
  const [mounted, setMounted]     = useState(false)
  const [roleIdx, setRoleIdx]     = useState(0)
  const [typeText, setTypeText]   = useState('')
  const [deleting, setDeleting]   = useState(false)
  const [typeIdx, setTypeIdx]     = useState(0)
  const roleRef = useRef(null)

  /* Mount flag for SSR safety */
  useEffect(() => { setMounted(true) }, [])

  /* Outline word cycle — fixed height, no layout shift */
  useEffect(() => {
    if (!mounted) return
    const id = setInterval(() => {
      const el = roleRef.current
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(14px)'
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % ROLES_OUTLINE.length)
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 420)
    }, 3000)
    return () => clearInterval(id)
  }, [mounted])

  /* Typewriter */
  useEffect(() => {
    if (!mounted) return
    const cur = ROLES_TYPE[typeIdx]
    let t
    if (!deleting && typeText.length < cur.length) {
      t = setTimeout(() => setTypeText(cur.slice(0, typeText.length + 1)), 78)
    } else if (!deleting && typeText.length === cur.length) {
      t = setTimeout(() => setDeleting(true), 2300)
    } else if (deleting && typeText.length > 0) {
      t = setTimeout(() => setTypeText(cur.slice(0, typeText.length - 1)), 42)
    } else {
      setDeleting(false)
      setTypeIdx(i => (i + 1) % ROLES_TYPE.length)
    }
    return () => clearTimeout(t)
  }, [typeText, deleting, typeIdx, mounted])

  /* Cursor tracking */
  useEffect(() => {
    if (!mounted) return
    const dot  = document.getElementById('cursorDot')
    const ring = document.getElementById('cursorRing')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = e => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }
    const animate = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      requestAnimationFrame(animate)
    }
    document.addEventListener('mousemove', onMove)
    animate()
    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        dot.style.transform  = 'translate(-50%,-50%) scale(2.5)'
        ring.style.width     = '54px'; ring.style.height = '54px'
        ring.style.borderColor = 'rgba(255,107,53,0.7)'
      })
      el.addEventListener('mouseleave', () => {
        dot.style.transform  = 'translate(-50%,-50%) scale(1)'
        ring.style.width     = '36px'; ring.style.height = '36px'
        ring.style.borderColor = 'rgba(255,107,53,0.4)'
      })
    })
    return () => document.removeEventListener('mousemove', onMove)
  }, [mounted])

  /* Scroll reveal observer */
  useEffect(() => {
    if (!mounted) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [mounted])

  const anim = (delay) => mounted
    ? { animation: `fadeUp 0.7s var(--ease-out) ${delay}s both`, opacity: 0 }
    : {}

  return (
    <>
      <Curtain />
      <section id="hero" style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '100px clamp(24px, 5vw, 64px) 80px',
        position: 'relative', overflow: 'hidden',
      }}>

        {/* Animated grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(255,107,53,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,53,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%)',
          animation: 'gridPan 22s linear infinite',
        }} />

        {/* Orbs */}
        {[
          { w: 500, t: '-100px', r: '-80px', c: 'rgba(255,107,53,0.11)', d: '0s' },
          { w: 360, b: '0',     l: '-80px', c: 'rgba(184,169,224,0.09)', d: '3s' },
          { w: 220, t: '38%',   r: '14%',   c: 'rgba(126,200,164,0.07)', d: '1.5s' },
        ].map((o, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%', pointerEvents: 'none', zIndex: 0,
            width: o.w, height: o.w,
            background: `radial-gradient(circle,${o.c} 0%,transparent 70%)`,
            top: o.t, right: o.r, bottom: o.b, left: o.l,
            animation: `float 10s ease-in-out ${o.d} infinite`,
          }} />
        ))}

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '920px' }}>

          <div style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.78rem', color: 'var(--ember)',
            letterSpacing: '0.12em', marginBottom: '18px',
            display: 'flex', alignItems: 'center', gap: '12px',
            ...anim(0.1),
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--ember)', display: 'block' }} />
            Hi, I'm
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: 'var(--ff-disp)', fontWeight: 800,
            fontSize: 'clamp(3.4rem, 9vw, 7rem)',
            color: 'var(--cream)', letterSpacing: '-0.04em', lineHeight: 0.95,
            marginBottom: '6px',
            ...anim(0.22),
          }}>
            Akshat Shukla
          </h1>

          {/* Fixed-height outline word */}
          <div style={{
            height: 'clamp(3.4rem, 9vw, 7rem)',
            overflow: 'hidden', marginBottom: '28px',
            opacity: 0, animation: `fadeUp 0.8s var(--ease-out) 0.38s both`,
          }}>
            <div ref={roleRef} style={{
              fontFamily: 'var(--ff-disp)', fontWeight: 800,
              fontSize: 'clamp(3.4rem, 9vw, 7rem)',
              letterSpacing: '-0.04em', lineHeight: 1,
              WebkitTextStroke: '1px rgba(240,235,226,0.22)', color: 'transparent',
              transition: 'opacity 0.45s var(--ease-out), transform 0.45s var(--ease-out)',
            }}>
              {ROLES_OUTLINE[roleIdx]}
            </div>
          </div>

          {/* Typewriter */}
          <div style={{
            fontFamily: 'var(--ff-mono)', fontSize: 'clamp(0.88rem, 1.5vw, 1.1rem)',
            color: 'var(--text2)', marginBottom: '22px',
            display: 'flex', alignItems: 'center', gap: '5px',
            ...anim(0.54),
          }}>
            <span style={{ color: 'var(--ember)' }}>// </span>
            <span>{typeText}</span>
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--ember)' }}>▋</span>
          </div>

          {/* Description */}
          <p style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.94rem', fontWeight: 300,
            color: 'var(--text2)', lineHeight: 1.9, maxWidth: '540px', marginBottom: '44px',
            ...anim(0.64),
          }}>
            B.Tech CSE student at Lovely Professional University. Working with Python, AI tools, and cloud platforms to build practical, real-world applications.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '56px',
            ...anim(0.74),
          }}>
            <a href="#projects" className="btn-primary">View my work →</a>
            <span style={{ width: 1, height: 22, background: 'var(--ink3)', flexShrink: 0 }} />
            {/* Socials */}
            {[
              { href: 'https://github.com/Akshats25', title: 'GitHub', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg> },
              { href: 'https://www.linkedin.com/in/akshat-shukla-24903a295/', title: 'LinkedIn', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: 'mailto:akshatshukla2011@gmail.com', title: 'Email', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
            ].map(s => (
              <a key={s.title} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" title={s.title}
                style={{ color: 'var(--text3)', display: 'flex', alignItems: 'center', transition: 'color 0.2s, transform 0.2s var(--ease-out)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ember)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text3)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '40px', left: 'clamp(24px,5vw,64px)', zIndex: 2,
          display: 'flex', alignItems: 'center', gap: '10px',
          fontFamily: 'var(--ff-mono)', fontSize: '0.66rem', color: 'var(--text3)',
          letterSpacing: '0.1em',
          opacity: 0, animation: 'fadeIn 1s var(--ease-out) 1.8s forwards',
        }}>
          <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom,var(--ember),transparent)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
          Scroll to explore
        </div>
      </section>
    </>
  )
}
