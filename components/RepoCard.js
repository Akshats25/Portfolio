'use client'

export function RepoCard({ repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer"
      style={{
        background: 'var(--ink2)', padding: '22px 20px',
        textDecoration: 'none', display: 'flex', flexDirection: 'column',
        transition: 'background 0.2s, transform 0.25s var(--ease-out)',
        cursor: 'pointer',
      }}
      onMouseOver={e => { e.currentTarget.style.background = 'var(--ink3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseOut={e => { e.currentTarget.style.background = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(0)' }}
    >
      <div style={{
        fontFamily: 'var(--ff-disp)', fontWeight: 700, fontSize: '1rem',
        color: 'var(--cream)', marginBottom: '8px',
      }}>{repo.name}</div>

      <p style={{
        fontFamily: 'var(--ff-mono)', fontSize: '0.76rem', fontWeight: 300,
        color: 'var(--text2)', lineHeight: 1.7, flex: 1,
        marginBottom: '14px',
      }}>
        {repo.description || 'No description available.'}
      </p>

      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
        {repo.language && (
          <span style={{
            fontFamily: 'var(--ff-mono)', fontSize: '0.64rem',
            padding: '3px 9px', borderRadius: '2px',
            background: 'var(--ink)', color: 'var(--ember)',
            border: '1px solid var(--ink3)',
          }}>{repo.language}</span>
        )}
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          ⭐ {repo.stargazers_count}
        </span>
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: '4px' }}>
          🍴 {repo.forks_count}
        </span>
      </div>
    </a>
  )
}
