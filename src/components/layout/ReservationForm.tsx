import React, { useState } from 'react'

const ReservationForm = () => {

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
    <>
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
    </>
  )
}

export default ReservationForm