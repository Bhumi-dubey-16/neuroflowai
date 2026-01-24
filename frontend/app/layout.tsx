import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Inter font - clean, modern, highly readable
// Good for accessibility and dyslexia-friendly
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improves loading performance
})

export const metadata: Metadata = {
  title: 'NeuroFlow AI - Accessibility-First Learning Platform',
  description: 'An inclusive learning platform designed for neurodivergent students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}









