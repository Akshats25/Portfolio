'use client'

/* Skills logos from devicons and simpleicons CDNs, and custom Soft Skills */
const skillLogos = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Microsoft Azure', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Google Cloud', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  // Soft Skills as unified badges inside the marquee
  { name: 'Problem-Solving', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ember)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> },
  { name: 'Leadership', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { name: 'Adaptability', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ember2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.13 15.57a9 9 0 1 0 3.84-10.36L2 7"/><path d="M2.5 22v-6h6M21.87 8.43a9 9 0 1 0-3.84 10.36L22 17"/></svg> },
]

const groups = [
  { icon: '⌨', name: 'Languages', color: 'var(--ember)', items: ['Python', 'C', 'C++', 'Java'] },
  { icon: '🖥', name: 'Frameworks', color: 'var(--sage)', items: ['HTML & CSS', 'JavaScript', 'React'] },
  { icon: '☁', name: 'Tools / Platforms', color: 'var(--lav)', items: ['AWS', 'Microsoft Azure', 'Google Cloud (GCP)'] },
  { icon: '🤝', name: 'Soft Skills', color: 'var(--ember2)', items: ['Problem-Solving', 'Leadership', 'Adaptability'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '120px 0',
      background: 'var(--ink2)',
      overflow: 'hidden',
    }}>
      <div className="section-inner">
        <div className="section-label reveal-up" data-num="02">Skills</div>
        <h2 className="section-title reveal-up delay-1">
          Technologies &amp; <em>tools</em>
        </h2>
      </div>

      {/* Single Marquee row for Logos and Soft Skills */}
      <div className="marquee-wrap">
        <div className="marquee-track" style={{ gap: '40px', paddingRight: '40px' }}>
          {[...skillLogos, ...skillLogos].map((s, i) => (
            <div key={i} title={s.name} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: s.icon ? 'auto' : '48px', height: '48px', flexShrink: 0,
              transition: 'transform 0.2s var(--ease-out)',
              cursor: 'default',
              gap: s.icon ? '10px' : '0',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.25)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {s.src && (
                <img
                  src={s.src}
                  alt={s.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  style={{ width: '48px', height: '48px', objectFit: 'contain', display: 'block' }}
                />
              )}
              {s.icon && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 16px', borderRadius: '100px',
                  border: '1px solid rgba(255,107,53,0.15)',
                  background: 'var(--ink)'
                }}>
                  {s.icon}
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--text2)' }}>
                    {s.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skill group cards — 2×2 grid */}
      <div className="section-inner" style={{ marginTop: '40px' }}>
        <div className="skills-group-top reveal-up delay-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
        }}>
          {groups.slice(0, 2).map(g => <SkillCard key={g.name} g={g} />)}
        </div>
        <div className="skills-group-bot reveal-up delay-3" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px', marginTop: '2px',
        }}>
          {groups.slice(2).map(g => <SkillCard key={g.name} g={g} />)}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ g }) {
  return (
    <div style={{
      background: 'var(--ink)', padding: '26px 22px',
      transition: 'background 0.2s', cursor: 'default',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--ink3)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
    >
      <span style={{ fontSize: '1.2rem', display: 'block', marginBottom: '10px' }}>{g.icon}</span>
      <div style={{
        fontFamily: 'var(--ff-mono)', fontSize: '0.64rem', color: g.color,
        letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '14px',
      }}>{g.name}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {g.items.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.68rem',
            padding: '5px 12px', borderRadius: '3px',
            background: 'var(--ink2)', color: 'var(--text2)',
            border: '1px solid var(--ink3)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
