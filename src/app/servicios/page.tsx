'use client'
import Coverage from '@/components/layout/Coverage'
import ReservationForm from '@/components/layout/ReservationForm'
import { EASE, Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { motion } from 'framer-motion'
import { Check, PawPrint, Scissors } from 'lucide-react'
import React from 'react'

const bathServices = [
  "Baño con shampoo especial",
  "Secado profesional",
  "Cepillado",
  "Limpieza de oídos",
  "Corte de uñas",
  "Perfume"
];

// Example pricing arrays (replace with your actual data)
const shortHairPricing = [
  { size: "CH", price: "$325.00" },
  { size: "M", price: "$375.00" },
  { size: "G", price: "$425.00" },
  { size: "XL", price: "$475.00" }
];

const longHairPricing = [
  { size: "CH", price: "$375.00" },
  { size: "M", price: "$425.00" },
  { size: "G", price: "$475.00" },
  { size: "XL", price: "$525.00" }
];

const doubleCoatPricing = [
  { size: "CH", price: "$25.00" },
  { size: "M", price: "$40.00" },
  { size: "G", price: "$55.00" },
  { size: "XL", price: "$70.00" }
];

const extraServices = [
  {
    name: "Nudos",
    prices: ["$35.00", "$45.00", "$55.00", "$65.00"]
  },
  {
    name: "Rapado",
    prices: ["$40.00 ", "$50.00 ", "$60.00 ", "$70.00 "]
  },
  {
    name: "Shampoo Antipulgas",
    price: "Venta por unidad $40.00"
  },
  {
    name: "Shampoo Medicado",
    price: "Venta por unidad $55.00"
  },
  {
    name: "Shampoo PREMIUM pelo largo",
    price: "Venta por unidad $65.00"
  }
];

const heroLines = [
  <>Dale a tu peludo</>,
  <><span className="text-cream">lo mejor</span> con nuestros</>,
  <>servicios únicos</>,
]

const hairPricing = [
  {
    title: "Pelo corto",
    rows: shortHairPricing,
    dot: "bg-sky",
  },
  {
    title: "Pelo largo",
    rows: longHairPricing,
    dot: "bg-blush",
  },
]

const page = () => {
  return (
    <>
    <section className="relative -mt-24 overflow-hidden bg-blush px-4 pt-36 sm:px-6 lg:pt-24">
        <div aria-hidden className="absolute -left-24 -top-24 size-80 rounded-full bg-cream/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            aria-hidden
            className="absolute right-[2%] top-[14%] hidden size-20 rounded-full bg-sun lg:block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 12, delay: 0.8 }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">

            {/* Texto */}
            <div className="text-center lg:py-20 lg:text-left">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-ink"
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              >
                <PawPrint className="size-4" /> Servicios
              </motion.span>

              <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] text-ink">
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

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              >
                <a href="#reserva" className="btn btn-dark group">
                  <PawPrint className="size-5 transition-transform duration-300 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" />
                  ¡Reserva fácil!
                </a>
              </motion.div>
            </div>

            {/* Imagen */}
            <motion.div
              className="flex justify-center self-end"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
            >
              <img
                title="Hero img"
                src="/assets/img/heroServices.webp"
                alt="Dos perritos recién arreglados"
                className="h-auto w-full max-w-md object-contain lg:max-w-xl"
              />
            </motion.div>

          </div>
        </div>
    </section>

    {/* Services */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">

        {/* Main Service - Baño Completo */}
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blush-deep">Servicio principal</span>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink sm:text-6xl">Baño Completo</h2>
        </Reveal>

        <Stagger stagger={0.06} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-7 gap-y-3">
          {bathServices.map((service) => (
            <StaggerItem key={service}>
              <span className="inline-flex items-center gap-2 font-semibold text-ink">
                <Check className="size-4 text-blush-deep" strokeWidth={3} />
                {service}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger stagger={0.15} className="mt-16 grid gap-14 md:grid-cols-2 md:gap-0 md:divide-x md:divide-ink/15">
          {hairPricing.map((group) => (
            <StaggerItem key={group.title} className="md:px-12 md:first:pl-0 md:last:pr-0">
              <h3 className="flex items-center gap-3 font-display text-3xl text-ink sm:text-4xl">
                <span className={`size-3.5 rounded-full ${group.dot}`} />
                {group.title}
              </h3>
              <div className="mt-4">
                {group.rows.map((item, index) => (
                  <div key={index} className="group flex items-baseline gap-4 py-3.5 text-ink">
                    <span className="w-10 font-display text-xl">{item.size}</span>
                    <span aria-hidden className="flex-1 -translate-y-1 border-b-2 border-dotted border-ink/20 transition-colors duration-300 group-hover:border-blush" />
                    <span className="text-2xl font-extrabold tabular-nums transition-colors duration-300 group-hover:text-blush-deep">{item.price}</span>
                  </div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Doble Capa de Pelo */}
        <Reveal className="mt-16 border-t-2 border-ink pt-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">Doble capa de pelo o más</h3>
            <div className="inline-flex items-center gap-2 rounded-full bg-sun/40 px-5 py-2.5 text-sm font-bold text-ink sm:text-base">
              <Scissors className="size-4 shrink-0" />
              CORTE DE RAZA PERSONALIZADA $75.00
            </div>
          </div>

          <Stagger stagger={0.08} className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-ink/15">
            {doubleCoatPricing.map((item, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="font-display text-xl text-ink-soft">{item.size}</div>
                <div className="mt-1 text-2xl font-extrabold tabular-nums text-ink">{item.price}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* Servicios Extras */}
        <Reveal className="mt-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-blush-deep">Complementa</span>
          <h2 className="mt-2 font-display text-4xl leading-none text-ink sm:text-5xl">Servicios Extras</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-ink text-ink">
                  <th className="px-6 py-5 text-left font-display text-lg font-normal sm:px-8">Servicio</th>
                  {["CH", "M", "G", "XL"].map((size) => (
                    <th key={size} className="px-4 py-5 text-center font-display text-lg font-normal">{size}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {extraServices.map((service, index) => (
                  <tr key={index} className="border-b border-ink/10 transition-colors duration-300 last:border-b-0 hover:bg-blush-soft/60">
                    <td className="px-6 py-5 font-bold text-ink sm:px-8">
                      {service.name}
                    </td>
                    {Array.isArray(service.prices) ? (
                      service.prices.map((price, idx) => (
                        <td key={idx} className="px-4 py-5 text-center font-bold tabular-nums text-ink">
                          {price}
                        </td>
                      ))
                    ) : (
                      <td colSpan={4} className="px-4 py-5 text-center font-semibold text-ink-soft">
                        {service.price}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

    </section>

    {/* Cover section */}
    <Coverage />

    {/* Formulario de reservación */}
    <ReservationForm />

    </>
  )
}

export default page
