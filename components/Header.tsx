'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const navItems = [
  { name: 'Resume', href: '/resume' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const activeSection = pathname === '/about' ? 'About' : pathname === '/resume' ? 'Resume' : null

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-3' : 'py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-[10%] flex items-center justify-between max-w-7xl">
        <motion.a
          href="/"
          className="text-xl font-semibold block shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          XN
        </motion.a>
        <ul className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-end">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative text-sm font-medium transition-colors hover:text-blue-400 px-3 py-2 rounded-lg hover-glow-subtle"
              >
                {item.name}
                {activeSection != null && activeSection === item.name && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                    style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

