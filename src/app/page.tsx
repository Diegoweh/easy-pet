'use client'


import { motion } from "framer-motion"
import { Menu, X, CircleCheckBig } from "lucide-react"
import { useState } from "react"

export default function ComingSoonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Estados para los campos del formulario
  const [nombreDuenio, setNombreDuenio] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [tipoMascota, setTipoMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [tamanoMascota, setTamanoMascota] = useState("");
  const [telefono, setTelefono] = useState("");
  const [domicilio, setDomicilio] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const mensaje = `¡Hola! Quiero agendar un servicio a domicilio. Aquí están mis datos:

  *Nombre del dueño:* ${nombreDuenio}
  *Nombre de la mascota:* ${nombreMascota}
  *Tipo de mascota:* ${tipoMascota}
  *Raza:* ${razaMascota}
  *Tamaño:* ${tamanoMascota}
  *Domicilio:* ${domicilio}
  *Celular:* ${telefono}`;

    const numeroWhatsApp = "526692610517"; // <- Cambia esto por tu número real
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen">     

      {/* Hero section */}
      <section className="bg-[#262a44] min-h-[500px] flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8">
          
          {/* Texto con animación desde la izquierda */}
          <motion.div
            className="w-full lg:w-1/2 text-white text-center lg:text-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 style={{ fontFamily: 'Hore' }} className="text-4xl lg:text-5xl font-extrabold leading-tight mt-6">
              Tu mascota <span className="text-pink-400">bien</span> <br />
              arreglada <br />
              <span className="text-white">sobre ruedas</span>
            </h1>

            <div className="mt-6">
              <a
                href="#reserva"
                className="inline-flex items-center bg-pink-400 text-[#262a44] font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-pink-300 transition"
                style={{ fontFamily: 'Hore' }}
              >
                <span className="mr-2">🐾</span> ¡Reserva fácil!
              </a>
            </div>
          </motion.div>

          {/* Imagen con animación desde la derecha */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              title="Hero img"
              src="/assets/img/heroDog.webp"
              alt="Hero img"
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain"
            />
          </motion.div>

        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">

          {/* Título animado desde abajo */}
          <motion.h2
            className="text-2xl lg:text-3xl font-semibold text-[#262a44] mb-10 font-hore"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Servicio profesional de grooming móvil: <span className="italic">rápido, seguro<br className="hidden lg:block" /> y sin estrés para tu mascota</span>
          </motion.h2>

          {/* Lista de beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-[#262a44] max-w-3xl mx-auto">
            
            {/* Cada item con fade y desplazamiento */}
            {[
              "Servicio a domicilio (sin traslados ni esperas).",
              "Productos 100% seguros y naturales.",
              "Estilistas certificados y con experiencia.",
              "Atención personalizada para cada raza."
            ].map((texto, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <CircleCheckBig className="text-green-500 animate-pulse" />
                <p className="font-semibold italic">
                  {texto.includes("(")
                    ? <>{texto.split("(")[0]}<span className="font-normal">({texto.split("(")[1]}</span></>
                    : texto}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* gallery */}
      <section id="services" className="py-12 px-4 bg-gray-50">
          <div style={{ fontFamily: 'Hore' }} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 container">
            
            {/* Servicio 1 */}
            <div className="bg-pink-400 text-white text-center p-4 flex items-center justify-center h-40 lg:h-50 font-bold text-3xl lg:text-4xl img-animation">
              BAÑO <br /> PREMIUM
            </div>
            <div className="overflow-hidden h-40 lg:h-50 img-animation">
              <img title="mascota" src="/assets/img/gall1.webp" alt="Baño Premium" className="w-full h-full object-cover" />
            </div>

            {/* Servicio 2 */}
            <div className="bg-[#262a44] text-pink-400 text-center p-4 flex items-center justify-center h-40 lg:h-50 font-bold text-3xl lg:text-4xl img-animation">
              LIMPIEZA <br /> Y CUIDADO
            </div>
            <div className="overflow-hidden h-40 lg:h-50 img-animation">
              <img title="mascota" src="/assets/img/gall2.webp" alt="Limpieza y Cuidado" className="w-full h-full object-cover" />
            </div>

            {/* Servicio 3 */}
            <div className="overflow-hidden h-40 lg:h-50 img-animation">
              <img title="mascota" src="/assets/img/gall3.webp" alt="Corte y desenredo" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#262a44] text-pink-400 text-center p-4 flex items-center justify-center h-40 lg:h-50 font-bold text-3xl lg:text-4xl img-animation">
              CORTE Y <br /> DESENREDO
            </div>

            {/* Servicio 4 */}
            <div className="overflow-hidden h-40 lg:h-50 img-animation">
              <img title="mascota" src="/assets/img/gall4.webp" alt="Tratamientos especiales" className="w-full h-full object-cover" />
            </div>
            <div className="bg-pink-400 text-white text-center p-4 flex items-center justify-center h-40 lg:h-50 font-bold text-3xl lg:text-4xl img-animation">
              TRATAMIENTOS <br /> ESPECIALES
            </div>

          </div>
      </section>

      {/* Cover section */}
      <section id="cover" className="bg-[#262a44] min-h-[500px] flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8">
          
          {/* Texto */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h1 style={{ fontFamily: 'Hore' }} className="text-4xl lg:text-5xl font-extrabold leading-tight mt-6">
              ¡Servicio a <span className="text-pink-400">la puerta</span> <br />
              de tu casa!<br />
              <span className="text-white">¿No estás en la zona?</span> <br />
              <span className="text-white text-2xl">¡Contáctanos para excepciones!</span>
            </h1>
          </div>

          {/* Mapa en lugar de imagen */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg img-animation">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2020.3259283400287!2d-106.42484420041754!3d23.207839121179465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1752619849851!5m2!1ses!2smx" // Reemplaza con tu URL real de embed
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

      {/* banner */}
      {/* <div className="bg-[#E072A4] flex items-center justify-center">
        <div className="py-12">
          <a
            href=""
            className="inline-flex items-center bg-[#262a44] text-white font-bold px-12 py-3 rounded-full text-2xl lg:text-3xl shadow-md hover:bg-blue-900 transition"
            style={{ fontFamily: 'Hore' }}
          >
            <span  className="mr-2">🐾</span> ¡Reserva fácil!
          </a>
        </div>

      </div> */}

      {/* Formulario de reservación */}
      <section id="reserva" className="bg-[#E072A4] px-4 py-16 flex justify-center items-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 text-[#262a44]">
          <h2 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: 'Hore' }}>
            🐾 Llena tu información para agendar
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
          {/* Nombre del dueño */}
          <div>
            <label htmlFor="nombreDuenio" className="block font-semibold mb-2">Nombre del dueño</label>
            <input
              required
              id="nombreDuenio"
              type="text"
              value={nombreDuenio}
              onChange={(e) => setNombreDuenio(e.target.value)}
              placeholder="Juan Pérez"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Nombre de la mascota */}
          <div>
            <label htmlFor="nombreMascota" className="block font-semibold mb-2">Nombre de la mascota</label>
            <input
              required
              id="nombreMascota"
              type="text"
              value={nombreMascota}
              onChange={(e) => setNombreMascota(e.target.value)}
              placeholder="Firulais"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Tipo de mascota */}
          <div>
            <label htmlFor="tipoMascota" className="block font-semibold mb-2">Tipo de mascota</label>
            <input
              required
              id="tipoMascota"
              type="text"
              value={tipoMascota}
              onChange={(e) => setTipoMascota(e.target.value)}
              placeholder="Perro, gato, etc."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Raza */}
          <div>
            <label htmlFor="razaMascota" className="block font-semibold mb-2">Raza de la mascota</label>
            <input
              required
              id="razaMascota"
              type="text"
              value={razaMascota}
              onChange={(e) => setRazaMascota(e.target.value)}
              placeholder="Labrador, persa, etc."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Tamaño */}
          <div>
            <label htmlFor="tamanoMascota" className="block font-semibold mb-2">Tamaño de la mascota</label>
            <select
              required
              id="tamanoMascota"
              value={tamanoMascota}
              onChange={(e) => setTamanoMascota(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Selecciona tamaño</option>
              <option value="chico">Chico</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block font-semibold mb-2">Número de celular</label>
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Domicilio */}
          <div className="md:col-span-2">
            <label htmlFor="domicilio" className="block font-semibold mb-2">Domicilio</label>
            <textarea
              id="domicilio"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              placeholder="Calle, número, colonia, referencias..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows={3}
            ></textarea>
          </div>

          {/* Botón */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#E072A4] text-white font-bold px-10 py-3 rounded-full text-lg hover:bg-pink-600 transition"
            >
              Enviar solicitud
            </button>
          </div>
        </form>

        </div>
      </section>


    </div>
  )
}
