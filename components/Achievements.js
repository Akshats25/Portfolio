'use client'

const achievements = [
  {
    title: 'Code-A-Haunt 24-Hour Hackathon Participated',
    org: 'CodingBlocks × Lovely Professional University',
    date: 'Jan 2024',
    icon: '🏆',
  },
]

/* 📜 CERTIFICATE: Replace href below with your actual certificate link or upload to /public/certificates/ */
const certifications = [
  {
    title: 'Python Programming',
    issuer: 'CSE Pathshala',
    date: 'Aug 2025',
    color: 'var(--ember)',
    // Certificate: Python Programming — CSE Pathshala
    href: '/certificates/python-csepathshala.png',
    disabled: false, // change to false when file is ready
  },
  {
    title: 'ChatGPT-4 Prompt Engineering',
    issuer: 'Infosys',
    date: 'Aug 2025',
    color: 'var(--sage)',
    // Certificate: ChatGPT-4 Prompt Engineering — Infosys
    href: '/certificates/chatgpt-infosys.png',
    disabled: false, // change to false when file is ready
  },
  {
    title: 'Master Generative AI & Tools',
    issuer: 'Udemy',
    date: 'Aug 2025',
    color: 'var(--lav)',
    // Certificate: Master Generative AI & Tools — Udemy
    href: '/certificates/genai-udemy.png',
    disabled: false, // change to false when file is ready
  },
  {
    title: 'Introduction to LLMs',
    issuer: 'NPTEL',
    date: 'Oct 2025',
    color: 'var(--ember2)',
    // Certificate: Introduction to LLMs — NPTEL
    href: '/certificates/llm-nptel.png',
    disabled: false, // change to false when file is ready
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '120px 0' }}>
      <div className="section-inner">

        <div className="section-label reveal-up" data-num="05">Achievements & Certifications</div>
        <h2 className="section-title reveal-up delay-1">
          Recognition & <em>credentials</em>
        </h2>

        {/* Achievements */}
        <div className="reveal-up delay-1" style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.66rem', color: 'var(--text3)',
            letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '18px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            Achievements
            <span style={{ flex: 1, height: 1, background: 'var(--ink3)', display: 'block' }} />
          </div>

          {achievements.map(a => (
            <div key={a.title} style={{
              background: 'var(--ink2)', borderRadius: '10px', padding: '24px 26px',
              borderLeft: '3px solid var(--ember)',
              display: 'flex', gap: '16px', alignItems: 'center',
              transition: 'background 0.2s, transform 0.2s var(--ease-out)',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink3)'; e.currentTarget.style.transform = 'translateX(6px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink2)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              <span style={{ fontSize: '2rem', flexShrink: 0 }}>{a.icon}</span>
              <div>
                <div style={{
                  fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.05rem',
                  color: 'var(--cream)', marginBottom: '4px',
                }}>{a.title}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.76rem', color: 'var(--text2)' }}>
                  {a.org}
                </div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.64rem', color: 'var(--text3)', marginTop: '2px' }}>
                  {a.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal-up delay-2">
          <div style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.66rem', color: 'var(--text3)',
            letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '18px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            Certifications
            <span style={{ flex: 1, height: 1, background: 'var(--ink3)', display: 'block' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2px',
          }}>
            {certifications.map(c => (
              <div key={c.title} style={{
                background: 'var(--ink2)', padding: '24px 22px',
                borderTop: `2px solid ${c.color}`,
                display: 'flex', flexDirection: 'column',
                transition: 'background 0.2s, transform 0.25s var(--ease-out)',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Issuer badge */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px', marginBottom: '14px',
                  background: `linear-gradient(135deg, ${c.color}22, ${c.color}08)`,
                  border: `1px solid ${c.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--ff-disp)', fontWeight: 800, fontSize: '0.7rem',
                  color: c.color,
                }}>
                  {c.issuer.slice(0, 2).toUpperCase()}
                </div>

                <div style={{
                  fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '0.96rem',
                  color: 'var(--cream)', marginBottom: '6px', lineHeight: 1.3, flex: 1,
                }}>{c.title}</div>

                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.7rem', color: 'var(--text2)',
                  marginBottom: '4px',
                }}>{c.issuer}</div>

                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginTop: '12px',
                }}>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.6rem',
                    padding: '2px 10px', borderRadius: '100px',
                    color: c.color,
                    background: `${c.color}14`,
                    border: `1px solid ${c.color}28`,
                  }}>{c.date}</span>

                  {/* View Certificate */}
                  <a
                    href={c.disabled ? '#' : c.href}
                    target={c.disabled ? undefined : "_blank"}
                    rel={c.disabled ? undefined : "noreferrer"}
                    aria-label={`View ${c.title} certificate`}
                    aria-disabled={c.disabled}
                    title={c.disabled ? "Certificate coming soon" : `View ${c.title} certificate`}
                    style={{
                      fontFamily: 'var(--ff-mono)', fontSize: '0.66rem',
                      color: c.disabled ? 'var(--text3)' : c.color, 
                      textDecoration: 'none',
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      transition: 'opacity 0.2s',
                      pointerEvents: c.disabled ? 'none' : 'auto',
                      opacity: c.disabled ? 0.6 : 1,
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = c.disabled ? '0.6' : '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = c.disabled ? '0.6' : '1'}
                  >
                    {c.disabled ? 'Not uploaded yet' : 'View Certificate →'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
