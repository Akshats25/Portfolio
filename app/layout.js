import './globals.css'

export const metadata = {
  title: 'Akshat Shukla — Full Stack Developer & CS Student',
  description: 'Akshat Shukla — Full Stack Developer & CS Student at LPU. Building real-world projects with Python, AI, and cloud platforms like AWS, Azure, and GCP.',
  keywords: ['Akshat Shukla', 'Full Stack Developer', 'CSE', 'Python', 'AWS', 'Azure', 'GCP', 'LPU', 'Student'],
  openGraph: {
    title: 'Akshat Shukla — Full Stack Developer & CS Student',
    description: 'Full Stack Developer & CS Student building real-world projects with Python, AI, and cloud platforms.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
