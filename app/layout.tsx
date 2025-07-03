import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pointe.dev',
  description: 'Building AI automata for a better world.',
  generator: 'Thanks you, agent v0.dev!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
