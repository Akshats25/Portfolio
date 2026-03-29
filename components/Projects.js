// Projects section — Displays exactly 3 featured projects statically.

const PINNED = [
  {
    name: 'Renewable-Energy-Advisor-Bot',
    title: 'Renewable Energy Advisor Bot',
    date: "Nov'2025",
    tech: ['Python', 'NLP', 'Dashboards'],
    bullets: [
      'Developed an AI-powered chatbot using Python and NLP to guide users in selecting suitable renewable energy options such as solar, wind, and hybrid systems.',
      'Included analytical tools and interactive dashboards to present feasibility results, payback periods, and personalized renewable-energy plans.',
      'Aimed to simplify renewable-energy decision-making by providing clear, actionable insights tailored to individual requirements and locations.',
    ],
    url: 'https://github.com/Akshats25/Renewable-Energy-Advisor-Bot',
  },
  {
    name: 'Serverless-URL-Shortener',
    title: 'Serverless URL Shortener',
    date: "Nov'2025",
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
    bullets: [
      'Designed and deployed a 100% serverless URL shortening system using AWS Lambda, API Gateway, and DynamoDB, achieving zero infrastructure management.',
      'Implemented optimized DynamoDB lookups enabling sub-15 ms average read latency and fast redirecting.',
      'Achieved highly cost-efficient operation with over 90% reduction in computing cost compared to traditional server-based URL services.',
    ],
    url: 'https://github.com/Akshats25/Serverless-URL-Shortener',
  },
  {
    name: 'Mini-Drive',
    title: 'Mini Drive',
    date: "Aug'2025",
    tech: ['React', 'Next.js', 'Stripe'],
    bullets: [
      'Developed a cloud storage application featuring robust folder and file management tailored for seamless user asset organization.',
      'Integrated secure authentication and payment processing via Stripe to handle subscription plans safely.',
      'Designed an intuitive, secure dashboard that handles document uploads and tracks storage quota in real time.',
    ],
    url: 'https://github.com/Akshats25/Mini-Drive',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 0' }}>
      <div className="section-inner">

        <div className="section-label reveal-up" data-num="03">Projects</div>
        <h2 className="section-title reveal-up delay-1">Things I've <em>built</em></h2>

        {/* Pinned projects — prominent cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '12px', marginBottom: '28px',
        }}>
          {PINNED.map((p, i) => (
            <div key={p.name} className={`proj-card reveal-up delay-${i + 1}`}
              style={{ borderRadius: '8px' }}
            >
              {/* Box styling overlay built-in */}
              
              {/* Pinned badge */}
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.6rem',
                padding: '3px 10px', borderRadius: '100px', display: 'inline-block',
                marginBottom: '12px', color: 'var(--ember)',
                background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)',
              }}>📌 Featured · {p.date}</span>

              {/* Title */}
              <div style={{
                fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1.2rem',
                color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1.3,
                marginBottom: '16px',
              }}>{p.title}</div>

              {/* Bullets */}
              <div style={{ flex: 1, marginBottom: '20px' }}>
                {p.bullets.map((b, j) => (
                  <div key={j} style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--ember)', flexShrink: 0, marginTop: '2px' }}>—</span>
                    <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--text2)', lineHeight: 1.8 }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.66rem',
                    padding: '3px 9px', borderRadius: '2px',
                    background: 'var(--ink)', color: 'var(--text3)',
                    border: '1px solid var(--ink3)',
                  }}>{t}</span>
                ))}
              </div>

              {/* Link */}
              <a href={p.url} target="_blank" rel="noreferrer" style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.76rem', color: 'var(--ember)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px',
              }}>View on GitHub →</a>
            </div>
          ))}
        </div>

        <div className="reveal-up delay-3" style={{ marginTop: '24px', textAlign: 'left' }}>
          <a href="https://github.com/Akshats25" target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.82rem', color: 'var(--ember)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px',
            transition: 'gap 0.2s', padding: '12px 24px', borderRadius: '100px',
            border: '1px solid rgba(255,107,53,0.3)', background: 'rgba(255,107,53,0.05)'
          }}>View all repositories on GitHub →</a>
        </div>

      </div>
    </section>
  )
}
