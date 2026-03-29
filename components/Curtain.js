'use client'
import { useEffect } from 'react'

export default function Curtain() {
  useEffect(() => {
    const el = document.getElementById('curtain')
    if (!el) return
    const t1 = setTimeout(() => el.classList.add('open'), 500)
    const t2 = setTimeout(() => el.classList.add('done'), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div id="curtain">
      <div className="curtain-panel">
        <div className="curtain-logo">Akshat<span style={{ color: 'var(--ember)' }}>.</span></div>
      </div>
      <div className="curtain-panel">
        <div className="curtain-logo" style={{ paddingLeft: 0 }}>Shukla<span style={{ color: 'var(--ember)' }}>.</span></div>
      </div>
    </div>
  )
}
