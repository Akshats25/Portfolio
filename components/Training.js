'use client'

/* Training section — CSE Pathshala training only.
   Certifications have been moved to the dedicated Achievements section. */

export default function Training() {
  return (
    <section id="training" style={{ padding: '120px 0', background: 'var(--ink2)' }}>
      <div className="section-inner">

        <div className="section-label reveal-up" data-num="06">Training</div>
        <h2 className="section-title reveal-up delay-1">Professional <em>training</em></h2>

        <div className="reveal-up delay-2" style={{ maxWidth: '680px' }}>
          {/* Main training card */}
          <div style={{
            background: 'var(--ink)', borderRadius: '10px', padding: '30px 26px',
            borderTop: '3px solid var(--ember)',
            transition: 'transform 0.25s var(--ease-out)',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              flexWrap: 'wrap', gap: '8px', marginBottom: '6px',
            }}>
              <div style={{
                fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.15rem',
                color: 'var(--cream)', lineHeight: 1.3,
              }}>
                CSE Pathshala Training
              </div>
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.62rem',
                padding: '3px 12px', borderRadius: '100px',
                color: 'var(--ember)',
                background: 'rgba(255,107,53,0.1)',
                border: '1px solid rgba(255,107,53,0.2)',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>Jun 2025 – Aug 2025</span>
            </div>

            <div style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.72rem', color: 'var(--text3)',
              marginBottom: '20px',
            }}>
              CSE Pathshala — Certificate Program
            </div>

            {[
              'Learned fundamental concepts of Data Structures and Algorithms in Python. Gained practical experience using OOPs principles.',
              'Implemented search and sorting algorithms to enhance system functionality.',
              'Built a Flight Reservation System to store records of passengers using Python language.',
              'The flight reservation system handles flight bookings, cancellations, and searches, applying core DSA concepts.',
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--ember)', fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}>▸</span>
                <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.84rem', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.75 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
