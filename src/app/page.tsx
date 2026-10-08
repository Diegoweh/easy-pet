'use client'

import Coverage from "@/components/layout/Coverage"
import ReservationForm from "@/components/layout/ReservationForm"
import { EASE, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowUpRight, Award, HeartHandshake, Home, Leaf, PawPrint, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const heroLines = [
  <>Tu mascota</>,
  <><span className="text-blush">bien</span> arreglada</>,
  <>sobre ruedas</>,
]

const benefits = [
  { Icon: Home, title: "Servicio a domicilio", text: "Sin traslados ni esperas." },
  { Icon: Leaf, title: "Productos naturales", text: "100% seguros para tu mascota." },
  { Icon: Award, title: "Estilistas certificados", text: "Y con experiencia." },
  { Icon: HeartHandshake, title: "Atención personalizada", text: "Para cada raza." },
]

const services = [
  { title: <>Baño <br /> premium</>, alt: "Baño Premium", img: "/assets/img/gall1.webp" },
  { title: <>Limpieza <br /> y cuidado</>, alt: "Limpieza y Cuidado", img: "/assets/img/gall2.webp" },
  { title: <>Corte y <br /> desenredo</>, alt: "Corte y desenredo", img: "/assets/img/gall3.webp" },
  { title: <>Tratamientos <br /> especiales</>, alt: "Tratamientos especiales", img: "/assets/img/gall4.webp" },
]

const marqueeItems = ["Baño premium", "Limpieza y cuidado", "Corte y desenredo", "Tratamientos especiales", "A domicilio"]

export default function ComingSoonPage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const dogsY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const archY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const decoY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <div className="min-h-screen overflow-x-clip">

      {/* Hero section */}
      <section ref={heroRef} className="relative px-4 pb-16 pt-10 sm:px-6 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* Texto */}
          <div className="text-center lg:text-left">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-ink shadow-sm"
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              <Sparkles className="size-4 text-blush" /> Grooming móvil
            </motion.span>

            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.98] text-ink">
              {heroLines.map((line, index) => (
                <span key={index} className="block overflow-hidden pb-[0.12em]">
                  <motion.span
                    className="block"
                    initial={{ y: "115%", rotate: 4 }}
                    animate={{ y: 0, rotate: 0 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.2 + index * 0.12 }}
                    style={{ transformOrigin: "left bottom" }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              className="mx-auto mt-6 max-w-md text-lg text-ink-soft lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.65 }}
            >
              Servicio a domicilio, estilistas certificados y atención personalizada. Fácil, rápido y sin estrés.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.8 }}
            >
              <a href="#reserva" className="btn btn-primary group w-full sm:w-auto">
                <PawPrint className="size-5 transition-transform duration-300 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" />
                ¡Reserva fácil!
              </a>
              <Link href="/servicios" className="btn btn-outline group w-full sm:w-auto">
                Ver servicios
                <ArrowRight className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>

          {/* Imagen */}
          <div className="relative mx-auto aspect-[5/4] w-full max-w-2xl">
            {/* Arco */}
            <motion.div style={{ y: archY }} className="absolute inset-x-[10%] bottom-[9%] top-0">
              <motion.div
                className="size-full origin-bottom rounded-b-[3rem] rounded-t-full bg-blush"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
              />
            </motion.div>

            {/* Decoración */}
            <motion.div style={{ y: decoY }} className="absolute right-[2%] top-[6%]">
              <motion.div
                className="size-16 rounded-full bg-sun sm:size-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.9 }}
              />
            </motion.div>
            <motion.div style={{ y: decoY }} className="absolute left-[3%] top-[30%]">
              <motion.div
                className="size-7 rounded-full bg-sky sm:size-9"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 12, delay: 1.05 }}
              />
            </motion.div>

            {/* Mascotas */}
            <motion.div style={{ y: dogsY }} className="absolute inset-0">
              <motion.img
                title="Hero img"
                src="/assets/img/heroDog.webp"
                alt="Tres perritos envueltos en toallas después de su baño"
                fetchPriority="high"
                className="absolute left-[-17.5%] top-[6%] w-[130%] max-w-none select-none [mask-image:linear-gradient(to_right,transparent_9%,black_17%,black_87%,transparent_94%)]"
                draggable={false}
                initial={{ opacity: 0, y: 60, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
              />
            </motion.div>

            {/* Etiquetas flotantes */}
            <motion.div
              className="absolute left-0 top-[12%] sm:left-[-2%]"
              initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.1 }}
            >
              <div className="flex animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink shadow-[0_16px_40px_-16px_rgba(38,42,68,0.45)]">
                <span className="grid size-8 place-items-center rounded-full bg-sky/25"><Home className="size-4" /></span>
                A domicilio
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-[14%] right-0 sm:right-[-2%]"
              initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
              animate={{ opacity: 1, scale: 1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.25 }}
            >
              <div className="flex animate-float-slow items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-bold text-cream shadow-[0_16px_40px_-16px_rgba(38,42,68,0.7)]">
                <span className="grid size-8 place-items-center rounded-full bg-blush text-ink"><Leaf className="size-4" /></span>
                Sin estrés
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Marquee */}
      <div className="-rotate-1 scale-[1.02] bg-ink py-4 text-cream">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={index} className="flex items-center gap-8 pr-8 font-display text-xl sm:text-2xl">
                  {item}
                  <PawPrint className="size-5 text-blush" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Beneficios */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Servicio profesional de grooming móvil:{" "}
              <span className="text-blush-deep">rápido, seguro y sin estrés</span> para tu mascota
            </h2>
          </Reveal>

          {/* Lista de beneficios */}
          <Stagger className="mt-14 grid grid-cols-1 divide-y divide-ink/10 border-y border-ink/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:border-y-0">
            {benefits.map(({ Icon, title, text }, index) => (
              <StaggerItem key={title} className="group flex items-start gap-5 py-7 lg:flex-col lg:gap-0 lg:px-8 lg:py-2 lg:first:pl-0 lg:last:pr-0">
                <div className="flex items-center gap-3 lg:w-full lg:justify-between">
                  <Icon className="size-9 text-blush-deep transition-transform duration-500 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" strokeWidth={1.75} />
                  <span className="hidden text-sm font-bold text-ink-soft/60 lg:block">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-ink lg:mt-6">{title}</h3>
                  <p className="mt-1.5 text-ink-soft">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* gallery */}
      <section id="services" className="px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
            <div className="text-center sm:text-left">
              <span className="text-sm font-bold uppercase tracking-widest text-blush-deep">Servicios</span>
              <h2 className="mt-2 font-display text-4xl leading-none text-ink sm:text-5xl">Lo que hacemos</h2>
            </div>
            <Link href="/servicios" className="btn btn-outline group px-6 py-3 text-base">
              Ver precios
              <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5" />
            </Link>
          </Reveal>

          <Stagger stagger={0.12} className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {services.map((service, index) => (
              <StaggerItem key={service.alt} className={index % 2 === 1 ? "lg:mt-10" : ""}>
                <Link
                  href="/servicios"
                  title={service.alt}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-ink"
                >
                  <img
                    src={service.img}
                    alt={service.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-cream text-ink transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-blush sm:right-4 sm:top-4">
                    <ArrowUpRight className="size-5" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                    <span className="text-sm font-bold text-blush">0{index + 1}</span>
                    <h3 className="mt-1 font-display text-xl leading-none text-cream transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Cover section */}
      <Coverage />

      {/* Formulario de reservación */}
      <ReservationForm />

    </div>
  )
}
