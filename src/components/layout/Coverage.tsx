'use client'
import { MapPin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'
import { EASE, Stagger, StaggerItem } from '../motion/Reveal'

const Coverage = () => {
  return (
    <section id="cover" className="relative overflow-hidden bg-ink px-4 py-20 text-cream sm:px-6 lg:py-28">
      <div aria-hidden className="absolute -left-32 bottom-0 size-96 rounded-full bg-blush/20 blur-3xl" />
      <div aria-hidden className="absolute -right-20 -top-20 size-72 rounded-full bg-sky/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Texto animado */}
          <Stagger className="text-center lg:text-left">
            <StaggerItem>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cream/80">
                <MapPin className="size-4 text-blush" /> Cobertura
              </span>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                ¡Servicio a <span className="text-blush">la puerta</span> de tu casa!
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 font-display text-2xl text-cream/90">¿No estás en la zona?</p>
              <p className="mt-1 text-lg text-cream/70">¡Contáctanos para excepciones!</p>
            </StaggerItem>
            <StaggerItem>
              <a
                title="Whatsapp"
                href="https://wa.link/60be02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light mt-8"
              >
                <MessageCircle className="size-5" /> 669 261 0517
              </a>
            </StaggerItem>
          </Stagger>

          {/* Mapa animado */}
          <motion.div
            className="h-[320px] overflow-hidden rounded-3xl border-4 border-cream/10 shadow-2xl sm:h-[420px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          >
            <iframe
              title="Mapa de cobertura"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2020.3259283400287!2d-106.42484420041754!3d23.207839121179465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1752619849851!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Coverage
