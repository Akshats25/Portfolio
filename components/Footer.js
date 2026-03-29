export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ink)',
      borderTop: '1px solid rgba(255,107,53,0.1)',
      padding: '30px clamp(24px, 5vw, 64px)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{ fontFamily: 'var(--ff-disp)', fontWeight: 800, fontSize: '0.9rem', color: 'var(--text3)' }}>
        AS<span style={{ color: 'var(--ember)' }}>.</span>dev
      </div>
      <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.66rem', color: 'var(--text3)' }}>
        © 2025 Akshat Shukla. Built with Next.js
      </div>
    </footer>
  )
}
