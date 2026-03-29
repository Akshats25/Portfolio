'use client'
import Image from 'next/image'
import { useState } from 'react'

/* About section — profile image left, bio text right, action buttons */

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" style={{ padding: '120px 0' }}>
      <div className="section-inner">
        <div className="section-label reveal-up" data-num="01">About me</div>
        <h2 className="section-title reveal-up delay-1">
          A bit about <em>Akshat</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(380px, 420px) 1fr',
          gap: '56px', alignItems: 'start',
        }} className="about-grid">

          {/* Left — Profile image */}
          <div className="reveal-left delay-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {/* 👤 PROFILE IMAGE: Place your photo at /public/images/profile.jpg */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '20px' }}>
              {/* Glowing animated blob behind the photo */}
              <div style={{
                position: 'absolute', inset: '-5%',
                background: 'radial-gradient(circle at 50% 50%, rgba(255,107,53,0.18), transparent 70%)',
                filter: 'blur(40px)', zIndex: 0,
                animation: 'pulse 4s ease-in-out infinite alternate',
                pointerEvents: 'none'
              }} />
              
              {/* Floating frameless image wrapper with natural aspect ratio */}
              <div style={{
                width: '100%', maxWidth: '320px', borderRadius: '24px',
                overflow: 'hidden', position: 'relative', zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
                cursor: 'pointer', background: 'var(--ink3)', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02) rotate(1.5deg)'; 
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,107,53,0.25)'; 
                  if(e.currentTarget.querySelector('img')) e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotate(0)'; 
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6)'; 
                  if(e.currentTarget.querySelector('img')) e.currentTarget.querySelector('img').style.filter = 'grayscale(100%)';
                }}
              >
                {!imgError ? (
                  <img
                    src="/images/profile.jpg"
                    alt="Akshat Shukla"
                    onError={() => setImgError(true)}
                    style={{ 
                      width: '100%', height: 'auto', display: 'block', objectFit: 'contain', 
                      filter: 'grayscale(100%)', transition: 'filter 0.5s ease' 
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%', aspectRatio: '3/4',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--ff-disp)', fontSize: '5rem', fontWeight: 800, color: 'var(--text3)'
                  }}>AS</div>
                )}
              </div>
            </div>
          </div>

          {/* Right — Bio text & buttons */}
          <div className="reveal-right delay-1">
            <div style={{ marginBottom: '40px' }}>
              {[
                <>I'm a Computer Science student at Lovely Professional University, Phagwara. I work with Python, C/C++, and Java, and I'm actively exploring AI tools, cloud platforms, and web technologies.</>,
                <>I've built projects like the <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Renewable Energy Advisor Bot</strong> (Python + NLP) and a <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Serverless URL Shortener</strong> (AWS Lambda, API Gateway, DynamoDB). I enjoy solving practical problems through code.</>,
                <>I completed training at CSE Pathshala covering DSA, OOP, and Python. I hold certifications in Python Programming, Prompt Engineering, Generative AI, and Large Language Models.</>,
              ].map((txt, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.94rem', fontWeight: 300,
                  color: 'var(--text2)', lineHeight: 2, marginBottom: i < 2 ? '16px' : 0,
                }}>{txt}</p>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="about-action-btns">
              <a
                href="#contact"
                className="btn-primary"
                aria-label="Get In Contact"
                style={{ justifyContent: 'center', flex: 1, minWidth: '200px' }}
              >
                Get In Contact
              </a>
              
              {/* 📄 RESUME LINK */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                aria-label="Download Akshat Shukla's CV"
                style={{ justifyContent: 'center', flex: 1, minWidth: '200px' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
