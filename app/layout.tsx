import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: 'Xavier Nishikawa - Portfolio',
  description: 'Passionate Computer Science Student at Olin College of Engineering. Software Engineering Intern @ Barn Owl Technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={firaCode.variable}>{children}</body>
    </html>
  )
}

