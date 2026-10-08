'use client'
import { MotionConfig, motion, type Variants } from 'framer-motion'
import React from 'react'

export const EASE = [0.22, 1, 0.36, 1] as const

const VIEWPORT = { once: true, margin: '0px 0px -80px 0px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE, delay },
  }),
}

const staggerParent: Variants = {
  hidden: {},
  show: (stagger: number = 0.1) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
}

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: EASE },
  },
}

type Props = {
  children: React.ReactNode
  className?: string
}

/* Respeta "reducir movimiento" del sistema en todas las animaciones */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

/* Aparece al entrar en pantalla */
export function Reveal({ children, className, delay = 0 }: Props & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

/* Contenedor que anima a sus <StaggerItem> en cascada */
export function Stagger({ children, className, stagger = 0.1 }: Props & { stagger?: number }) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: Props) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  )
}
