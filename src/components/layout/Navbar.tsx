'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EASE } from '../motion/Reveal'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '#cover', label: 'Cobertura' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 px-3 pt-3 sm:px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <nav
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border pl-5 pr-2.5 backdrop-blur-xl transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'border-ink/10 bg-white/85 py-2 shadow-[0_12px_40px_-16px_rgba(38,42,68,0.35)]'
            : 'border-transparent bg-white/60 py-3'
        }`}
      >
        {/* Logo */}
        <Link href="/" title="home" className="flex items-center">
          <img
            title="Logo"
            src="/assets/img/easyPetsLogo.png"
            alt="Easy Pet"
            className={`h-auto object-contain transition-all duration-500 ease-out-expo ${scrolled ? 'w-11' : 'w-14'}`}
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden items-center gap-1 md:flex" onMouseLeave={() => setHovered(null)}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.label}
              onMouseEnter={() => setHovered(link.href)}
              className="relative rounded-full px-5 py-2.5 font-semibold text-ink"
            >
              {hovered === link.href && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-full bg-blush-soft"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </Link>
          ))}
          <Link href="#reserva" title="reserva" className="btn btn-dark ml-2 px-6 py-3 text-base">
            Reserva
          </Link>
        </div>

        {/* Burger Button for mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          className="grid size-11 place-items-center rounded-full bg-ink text-cream transition-transform active:scale-90 md:hidden"
          onClick={toggleMenu}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full mt-2 origin-top rounded-3xl border border-ink/10 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(38,42,68,0.45)] md:hidden"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.06 + index * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-2xl px-4 py-3.5 font-display text-xl text-ink active:bg-blush-soft"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                >
                  <Link href="#reserva" className="btn btn-primary mt-2 w-full" onClick={toggleMenu}>
                    Reserva
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar
