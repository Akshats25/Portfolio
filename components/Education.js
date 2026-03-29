'use client'

const eduData = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    period: 'Aug 2023 – Present',
    score: 'CGPA: 6.3',
    initials: 'LPU',
    color: 'var(--ember)',
  },
  {
    degree: 'Intermediate (12th)',
    institution: 'Lucknow Public School',
    location: 'Lucknow, Uttar Pradesh',
    period: 'Apr 2020 – Mar 2022',
    score: 'Percentage: 83%',
    initials: 'LPS',
    color: 'var(--sage)',
  },
  {
    degree: 'Matriculation (10th)',
    institution: 'Lucknow Public School',
    location: 'Lucknow, Uttar Pradesh',
    period: 'Apr 2019 – Mar 2020',
    score: 'Percentage: 91%',
    initials: 'LPS',
    color: 'var(--lav)',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '120px 0', background: 'var(--ink2)' }}>
      <div className="section-inner">

        <div className="section-label reveal-up" data-num="04">Education</div>
        <h2 className="section-title reveal-up delay-1">
          Academic <em>journey</em>
        </h2>

        {/* Timeline layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {eduData.map((e, i) => (
            <div
              key={e.degree}
              className={`reveal-up delay-${i + 1}`}
              style={{
                background: 'var(--ink)', padding: '28px 26px',
                borderLeft: `3px solid ${e.color}`,
                borderRadius: i === 0 ? '10px 10px 0 0' : i === eduData.length - 1 ? '0 0 10px 10px' : 0,
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                transition: 'background 0.2s, transform 0.2s var(--ease-out)',
                cursor: 'default',
              }}
              onMouseEnter={ev => { ev.currentTarget.style.background = 'var(--ink3)'; ev.currentTarget.style.transform = 'translateX(6px)' }}
              onMouseLeave={ev => { ev.currentTarget.style.background = 'var(--ink)'; ev.currentTarget.style.transform = 'translateX(0)' }}
            >
              {/* Institution initials avatar */}
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px', flexShrink: 0,
                background: `linear-gradient(135deg, ${e.color}22, ${e.color}08)`,
                border: `1px solid ${e.color}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--ff-disp)', fontWeight: 800, fontSize: '0.9rem',
                color: e.color,
              }}>
                {e.initials}
              </div>

              {/* Details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.05rem',
                  color: 'var(--cream)', marginBottom: '6px', lineHeight: 1.3,
                }}>{e.degree}</div>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.78rem', color: 'var(--text2)',
                  marginBottom: '4px',
                }}>{e.institution} — {e.location}</div>
                <div style={{
                  display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.66rem', color: 'var(--text3)',
                  }}>{e.period}</span>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.62rem',
                    padding: '2px 10px', borderRadius: '100px',
                    color: e.color,
                    background: `${e.color}14`,
                    border: `1px solid ${e.color}28`,
                  }}>{e.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
