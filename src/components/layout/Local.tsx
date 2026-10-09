'use client'
import { Bone, Footprints, Home, MapPin, MessageCircle, Navigation, Store, Truck } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'
import { EASE, Reveal, Stagger, StaggerItem } from '../motion/Reveal'

const localServices = [
  { Icon: Bone, title: "Juego", text: "Tu perro viene a jugar al local.", tone: "bg-sky/25" },
  { Icon: Footprints, title: "Ejercicio", text: "Actividad para que gaste toda su energía.", tone: "bg-sun/50" },
]

const arrivalOptions = [
  { Icon: Truck, title: "Recolección", text: "Vamos por tu perro y lo regresamos a tu casa." },
  { Icon: Store, title: "Tráelo tú", text: "Déjalo directamente en el local." },
]

const Local = () => {
  return (
    <section id="local" className="px-4 pb-20 sm:px-6 lg:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sand p-6 sm:p-10 lg:p-14">
        <div aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-blush/25 blur-3xl" />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold uppercase tracking-widest text-ink shadow-sm">
            <Store className="size-4 text-blush-deep" /> Nuevo local
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
            Ahora también en <span className="text-blush-deep">nuestro local</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Seguimos llegando a tu casa con nuestros carritos, y ahora tu perro también puede venir a jugar y ejercitarse con nosotros.
          </p>
        </Reveal>

        <div className="relative mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Servicios en el local */}
          <div>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {localServices.map(({ Icon, title, text, tone }) => (
                <StaggerItem key={title} className="group rounded-3xl bg-white p-6">
                  <span className={`grid size-14 place-items-center rounded-full ${tone}`}>
                    <Icon className="size-7 text-ink transition-transform duration-500 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{title}</h3>
                  <p className="mt-1.5 text-ink-soft">{text}</p>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Cómo llega */}
            <Reveal className="mt-10">
              <h3 className="font-display text-2xl text-ink">¿Cómo llega tu perro?</h3>
              <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                {arrivalOptions.map(({ Icon, title, text }, index) => (
                  <React.Fragment key={title}>
                    {index > 0 && (
                      <span className="self-center font-display text-lg text-ink-soft">o</span>
                    )}
                    <div className="group flex flex-1 items-start gap-4 rounded-3xl border-2 border-ink/10 p-5 transition-colors duration-300 hover:border-blush">
                      <Icon className="size-7 shrink-0 text-blush-deep transition-transform duration-500 ease-out-expo group-hover:-rotate-12 group-hover:scale-110" strokeWidth={1.75} />
                      <div>
                        <h4 className="font-bold text-ink">{title}</h4>
                        <p className="mt-0.5 text-sm text-ink-soft">{text}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Ubicación */}
          <div className="flex flex-col gap-5">
            <motion.div
              className="h-[300px] overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-[340px] lg:h-auto lg:min-h-[300px] lg:flex-1"
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            >
              <iframe
                title="Ubicación del local"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.873092072516!2d-106.42829488813031!3d23.28406057890375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8698acbc5fafc093%3A0xd4eff651b6df5d1c!2sAv.%20Paseo%20del%20Atl%C3%A1ntico%204425%2C%20Real%20del%20Valle%2C%2082124%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1791574506867!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </motion.div>

            <Reveal delay={0.1}>
              <p className="flex items-start gap-3 font-semibold text-ink">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <MapPin className="size-5" />
                </span>
                <span className="pt-2">Av. Paseo del Atlántico #4425, Real del Valle, Mazatlán, Sin.</span>
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  title="Cómo llegar"
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Paseo+del+Atl%C3%A1ntico+4425%2C+Real+del+Valle%2C+82124+Mazatl%C3%A1n%2C+Sin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark px-6 py-3 text-base"
                >
                  <Navigation className="size-4" /> Cómo llegar
                </a>
                <a
                  title="Whatsapp"
                  href="https://wa.link/60be02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline px-6 py-3 text-base"
                >
                  <MessageCircle className="size-4" /> Pregunta por el local
                </a>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Recordatorio de cobertura a domicilio */}
        <Reveal className="relative mt-12 flex flex-col items-center gap-4 border-t-2 border-ink/10 pt-8 text-center sm:flex-row sm:text-left">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blush text-ink">
            <Home className="size-6" />
          </span>
          <p className="text-ink-soft">
            <span className="font-display text-xl text-ink">¡Seguimos con servicio a la puerta de tu casa!</span>{" "}
            Es un servicio aparte de la recolección: llegamos en un camión adaptado y bañamos a tu mascota ahí mismo, sin llevarla al local.
            ¿No estás en la zona? Contáctanos para excepciones al{" "}
            <a
              title="Whatsapp"
              href="https://wa.link/60be02"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ink underline decoration-blush decoration-2 underline-offset-4 transition-colors hover:text-blush-deep"
            >
              669 261 0517
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Local
