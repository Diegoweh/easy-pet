'use client'
import React, { useState } from 'react'
import { ArrowRight, MessageCircle, PawPrint } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '../motion/Reveal'

const labelClass = "mb-2 block text-sm font-bold text-ink"

const ReservationForm = () => {

  // Estados para los campos del formulario
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [tamanoMascota, setTamanoMascota] = useState("");
  const [telefono, setTelefono] = useState("");
  const [domicilio, setDomicilio] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mensaje = `¡Hola! Quiero agendar un servicio a domicilio. Aquí están mis datos:

    *Nombre del dueño:* ${nombreDuenio}
    *Nombre de la mascota:* ${nombreMascota}
    *Raza:* ${razaMascota}
    *Tamaño:* ${tamanoMascota}
    *Domicilio:* ${domicilio}
    *Celular:* ${telefono}`;

    const numeroWhatsApp = "526692610517"; // <- Cambia esto por tu número real
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

  return (
    <>
      {/* Formulario de reservación */}
      <section id="reserva" className="relative overflow-hidden bg-blush px-4 py-20 text-ink sm:px-6 lg:py-28">
        <PawPrint aria-hidden className="absolute -bottom-16 -left-10 size-72 -rotate-12 text-ink/10 animate-float-slow" />
        <PawPrint aria-hidden className="absolute right-[6%] top-10 size-16 rotate-12 text-cream/40 animate-float" />

        <Reveal className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:gap-16">

          {/* Texto */}
          <div className="text-center lg:col-span-2 lg:text-left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-4 py-2 text-sm font-bold uppercase tracking-widest">
                <PawPrint className="size-4" /> Reserva
              </span>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
                Llena tu información para agendar
              </h2>
              <p className="mt-8 inline-flex items-start gap-3 text-left font-semibold">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-cream">
                  <MessageCircle className="size-5" />
                </span>
                <span className="pt-2">Tu solicitud se envía por WhatsApp.</span>
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <Stagger stagger={0.06} className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Nombre del dueño */}
              <StaggerItem>
                <label htmlFor="nombreDuenio" className={labelClass}>Nombre del dueño</label>
                <input
                  required
                  id="nombreDuenio"
                  type="text"
                  value={nombreDuenio}
                  onChange={(e) => setNombreDuenio(e.target.value)}
                  placeholder="Juan Pérez"
                  className="field"
                />
              </StaggerItem>

              {/* Nombre de la mascota */}
              <StaggerItem>
                <label htmlFor="nombreMascota" className={labelClass}>Nombre de la mascota</label>
                <input
                  required
                  id="nombreMascota"
                  type="text"
                  value={nombreMascota}
                  onChange={(e) => setNombreMascota(e.target.value)}
                  placeholder="Firulais"
                  className="field"
                />
              </StaggerItem>

              {/* Raza */}
              <StaggerItem>
                <label htmlFor="razaMascota" className={labelClass}>Raza de la mascota</label>
                <input
                  required
                  id="razaMascota"
                  type="text"
                  value={razaMascota}
                  onChange={(e) => setRazaMascota(e.target.value)}
                  placeholder="Labrador, pastor, etc."
                  className="field"
                />
              </StaggerItem>

              {/* Tamaño */}
              <StaggerItem>
                <label htmlFor="tamanoMascota" className={labelClass}>Tamaño de la mascota</label>
                <select
                  required
                  id="tamanoMascota"
                  value={tamanoMascota}
                  onChange={(e) => setTamanoMascota(e.target.value)}
                  className="field"
                >
                  <option value="">Selecciona tamaño</option>
                  <option value="chico">Chico</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </select>
              </StaggerItem>

              {/* Teléfono */}
              <StaggerItem className="md:col-span-2">
                <label htmlFor="telefono" className={labelClass}>Número de celular</label>
                <input
                  required
                  id="telefono"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ej. 6691234567"
                  className="field"
                />
              </StaggerItem>

              {/* Domicilio */}
              <StaggerItem className="md:col-span-2">
                <label htmlFor="domicilio" className={labelClass}>Domicilio</label>
                <textarea
                  id="domicilio"
                  value={domicilio}
                  onChange={(e) => setDomicilio(e.target.value)}
                  placeholder="Calle, número, colonia, referencias..."
                  className="field resize-none"
                  rows={3}
                ></textarea>
              </StaggerItem>

              {/* Botón */}
              <StaggerItem className="md:col-span-2">
                <button type="submit" className="btn btn-dark group w-full sm:w-auto">
                  Enviar solicitud
                  <ArrowRight className="size-5 transition-transform duration-300 ease-out-expo group-hover:translate-x-1.5" />
                </button>
              </StaggerItem>
            </Stagger>
          </form>
        </Reveal>
      </section>
    </>
  )
}

export default ReservationForm
