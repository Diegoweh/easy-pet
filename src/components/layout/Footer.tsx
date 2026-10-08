'use client'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Reveal } from '../motion/Reveal'

const socials = [
  { title: 'Facebook', href: 'https://www.facebook.com/easypet.mzt/', label: '/Easypets', Icon: Facebook },
  { title: 'Instagram', href: 'https://www.instagram.com/easypet.mzt', label: '/Easypets', Icon: Instagram },
  { title: 'Whatsapp', href: 'https://wa.link/60be02', label: '669 261 0517', Icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-deep px-4 py-14 text-cream sm:px-6">
      <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-blush/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">

        <Reveal className="relative">
          {/* Primera fila (logo y redes) */}
          <div className="flex flex-col items-center justify-between gap-10 pb-10 md:flex-row">
            <div className="flex flex-col items-center gap-5 md:items-start">
              <img
                title="Logo"
                src="/assets/img/logoWhite.png"
                alt="Easy Pet logo"
                className="h-14 object-contain"
              />
              <nav className="flex gap-6 font-semibold text-cream/70">
                <Link href="/servicios" className="transition-colors hover:text-blush">Servicios</Link>
                <Link href="#cover" className="transition-colors hover:text-blush">Cobertura</Link>
                <Link href="#reserva" className="transition-colors hover:text-blush">Reserva</Link>
              </nav>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row">
              {socials.map(({ title, href, label, Icon }) => (
                <a
                  key={title}
                  title={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-cream/15 py-2 pl-2 pr-5 font-semibold transition-colors duration-300 hover:border-blush hover:bg-blush hover:text-ink"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-cream/10 transition-transform duration-300 ease-out-expo group-hover:-rotate-12 group-hover:scale-110 group-hover:bg-ink/10">
                    <Icon className="size-4" />
                  </span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-cream/10 pt-6 text-center text-sm text-cream/50">
            Copyright © {new Date().getFullYear()} Easypets. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer
