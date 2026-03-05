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
  description: 'Passionate Computer Science Student at Olin College of Engineering. Software Engineering Intern @ Owl Vision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${patrickHand.variable} ${riitn.variable}`}>
        {children}

        {/* Global night-time desk lighting. Overlays all content so everything is in the dark/light room. */}
        {/* Brighter orange lamp, lighter shadows */}
        <div className="pointer-events-none fixed inset-0 z-[100] bg-gradient-to-bl from-[#ff7a1f]/35 via-black/10 to-black/40" style={{ mixBlendMode: 'normal' }} />
      </body>
    </html>
  )
}

