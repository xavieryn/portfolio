import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Patrick_Hand } from 'next/font/google'
import './globals.css'

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-patrick-hand',
})

const riitn = localFont({
  src: '../public/fonts/RiiTN_R.otf',
  variable: '--font-riitn',
})

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
      <body className={`${patrickHand.variable} ${riitn.variable}`}>{children}</body>
    </html>
  )
}

