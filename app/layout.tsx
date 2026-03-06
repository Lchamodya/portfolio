import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lochini Chamodya — UI/UX Designer & Developer',
  description: 'Portfolio of Lochini Chamodya Ambepitiyage Dona — UI/UX Designer and Software Engineer from Sri Lanka, studying at University of Vaasa, Finland.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{children}</body>
    </html>
  )
}
