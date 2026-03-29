'use client'
import { useState } from 'react'

const contactLinks = [
  {
    label: 'Email', val: 'akshatshukla2011@gmail.com',
    href: 'mailto:akshatshukla2011@gmail.com',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  },
  {
    label: 'GitHub', val: '@Akshats25',
    href: 'https://github.com/Akshats25',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>,
  },
  {
    label: 'LinkedIn', val: 'Akshat Shukla',
    href: 'https://www.linkedin.com/in/akshat-shukla-24903a295/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      /* ───────────────────────────────────────────────────────────
       * FORMSPREE INTEGRATION
       * Replace YOUR_FORMSPREE_ID below with your actual Formspree form ID.
       * Get one for free at: https://formspree.io
       * Example: https://formspree.io/f/xpzvqnrd
       * ─────────────────────────────────────────────────────────── */
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    fontFamily: 'var(--ff-mono)', fontSize: '0.82rem',
    background: 'var(--ink)', color: 'var(--text)',
    border: '1px solid var(--ink3)', borderRadius: '6px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{
      padding: '120px 0 140px',
      background: 'var(--ink2)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ghost text bg */}
      <div style={{
        position: 'absolute', bottom: '-30px', right: '-10px',
        fontFamily: 'var(--ff-disp)', fontWeight: 800,
        fontSize: 'clamp(5rem, 16vw, 14rem)',
        color: 'rgba(255,107,53,0.04)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.04em',
      }}>SAY HI</div>

      <div className="section-inner" style={{ position: 'relative', zIndex: 2 }}>

        <div className="section-label reveal-up" data-num="07">Contact</div>

        <div className="reveal-up delay-1" style={{
          fontFamily: 'var(--ff-serif)', fontStyle: 'italic',
          fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
          color: 'var(--cream)', lineHeight: 1.2, marginBottom: '16px',
        }}>
          Let's <span style={{ fontStyle: 'normal', fontFamily: 'var(--ff-disp)', fontWeight: 800, color: 'var(--ember)' }}>connect</span><br />
          and create.
        </div>

        <p className="reveal-up delay-2" style={{
          fontFamily: 'var(--ff-mono)', fontSize: '0.92rem', fontWeight: 300,
          color: 'var(--text2)', lineHeight: 1.9, maxWidth: '420px', marginBottom: '48px',
        }}>
          Open to internships, collabs, and interesting opportunities. I reply fast — drop me a message anytime.
        </p>

        {/* Two-column layout: contact form + contact info */}
        <div className="reveal-up delay-2 contact-2col" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px', alignItems: 'start',
        }}>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label htmlFor="contact-name" style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'block',
              }}>Full Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Full Name"
                style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--ember)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--ink3)'}
              />
            </div>

            <div>
              <label htmlFor="contact-email" style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'block',
              }}>Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-label="Email Address"
                style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--ember)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--ink3)'}
              />
            </div>

            <div>
              <label htmlFor="contact-subject" style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'block',
              }}>Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                aria-label="Subject"
                style={inputStyle}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--ember)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--ink3)'}
              />
            </div>

            <div>
              <label htmlFor="contact-message" style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--text3)',
                letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px', display: 'block',
              }}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                aria-label="Message"
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--ember)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--ink3)'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              aria-label="Send Message"
              style={{
                cursor: status === 'sending' ? 'wait' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1,
                justifyContent: 'center', border: 'none', width: '100%',
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {/* Status toast */}
            {status === 'success' && (
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.78rem',
                color: 'var(--sage)', padding: '10px 16px',
                background: 'rgba(126,200,164,0.1)', border: '1px solid rgba(126,200,164,0.25)',
                borderRadius: '6px', textAlign: 'center',
              }}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.78rem',
                color: '#ff6b6b', padding: '10px 16px',
                background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.25)',
                borderRadius: '6px', textAlign: 'center',
              }}>
                ✕ Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>

          {/* Contact info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {contactLinks.map(l => <ContactCard key={l.label} l={l} />)}
          </div>

        </div>
      </div>
    </section>
  )
}

function ContactCard({ l }) {
  return (
    <a href={l.href}
      target={l.href.startsWith('http') ? '_blank' : undefined}
      rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
      className="contact-card"
      aria-label={`${l.label}: ${l.val}`}
    >
      <span style={{ color: 'var(--ember)', flexShrink: 0 }}>{l.icon}</span>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', color: 'var(--text3)',
          letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px',
        }}>{l.label}</div>
        <div style={{
          fontFamily: 'var(--ff-mono)', fontSize: '0.76rem', color: 'var(--text)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{l.val}</div>
      </div>
    </a>
  )
}
