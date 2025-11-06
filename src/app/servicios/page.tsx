'use client'
import ReservationForm from '@/components/layout/ReservationForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Badge, Scissors, Section } from 'lucide-react'
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

const page = () => {
  return (
    <>
    <section className="bg-pink-400 min-h-[500px] flex items-center justify-center px-4 py-8 lg:py-16">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8">
          
          {/* Texto con animación desde la izquierda */}
          <motion.div
            className="w-full lg:w-1/2 text-white text-center lg:text-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 style={{ fontFamily: 'Hore' }} className="text-4xl lg:text-5xl font-extrabold leading-tight ">
              Dale a tus peludo <span className="text-[#262a44]">lo mejor</span> <br />
              con nuestros <br />
              <span className="text-white">servicios únicos</span>
            </h1>

            {/* <div className="mt-6">
              <a
                href="#reserva"
                className="inline-flex items-center bg-pink-400 text-[#262a44] font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-pink-300 transition"
                style={{ fontFamily: 'Hore' }}
              >
                <span className="mr-2">🐾</span> ¡Reserva fácil!
              </a>
            </div> */}
          </motion.div>

          {/* Imagen con animación desde la derecha */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              title="Hero img"
              src="/assets/img/heroServices.webp"
              alt="Hero img"
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl h-auto object-contain"
            />
          </motion.div>

        </div>
    </section>

    {/* Services */}
    <section className="bg-white px-4 py-12 max-w-7xl mx-auto">

        {/* Main Service - Baño Completo */}
        <Card className="mb-12 border-0 border-blue-200 bg-gradient-to-r from-blue-50 to-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <CardHeader className="text-center pb-6">
                <CardTitle
                    style={{ fontFamily: "Hore" }}
                    className="text-3xl font-bold text-[#262a44] mb-4"
                >
                   🐾 Baño Completo
                </CardTitle>
                <CardDescription
                    style={{ fontFamily: "Hore" }}
                    className="text-lg text-gray-700 max-w-4xl mx-auto"
                >
                    {bathServices.join(" | ")}
                </CardDescription>
                </CardHeader>
            </motion.div>

            <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                {/* Pelo Corto */}
                <motion.div
                    className="bg-blue-900 text-white rounded-lg p-6"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3
                    style={{ fontFamily: "Hore" }}
                    className="text-2xl font-bold text-center mb-6 bg-blue-400 py-3 rounded-lg"
                    >
                    🐾 PELO CORTO
                    </h3>
                    <div className="space-y-4">
                    {shortHairPricing.map((item, index) => (
                        <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-blue-400"
                        >
                        <span className="font-semibold text-lg">{item.size}</span>
                        <span className="font-bold text-xl">{item.price}</span>
                        </div>
                    ))}
                    </div>
                </motion.div>

                {/* Pelo Largo */}
                <motion.div
                    className="bg-pink-400 text-white rounded-lg p-6"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3
                    style={{ fontFamily: "Hore" }}
                    className="text-2xl font-bold text-center mb-6 bg-pink-500 py-3 rounded-lg"
                    >
                    🐾 PELO LARGO
                    </h3>
                    <div className="space-y-4">
                    {longHairPricing.map((item, index) => (
                        <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-pink-200"
                        >
                        <span className="font-semibold text-lg">{item.size}</span>
                        <span className="font-bold text-xl">{item.price}</span>
                        </div>
                    ))}
                    </div>
                </motion.div>
                </div>
            </CardContent>
        </Card>

        {/* Doble Capa de Pelo */}
        <Card className="mb-8 border-0 border-blue-300 bg-blue-900 text-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <CardHeader className="text-center">
                <CardTitle
                    style={{ fontFamily: "Hore" }}
                    className="text-2xl font-bold bg-blue-400 py-3 px-6 rounded-lg inline-block"
                >
                    🐾 DOBLE CAPA DE PELO O MÁS
                </CardTitle>
                </CardHeader>
            </motion.div>

            <CardContent>
                <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                >
                {doubleCoatPricing.map((item, index) => (
                    <div key={index} className="text-center py-3">
                    <div className="font-semibold text-lg mb-1">{item.size}</div>
                    <div className="font-bold text-xl">{item.price}</div>
                    </div>
                ))}
                </motion.div>

                <motion.div
                className="text-center mt-6 pt-6 border-t border-blue-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                >
                <div className="inline-flex items-center text-lg px-6 py-2 bg-blue-800 text-white rounded-full font-semibold">
                    <Scissors className="w-5 h-5 mr-2" />
                    CORTE DE RAZA PERSONALIZADA $75.00
                </div>
                </motion.div>
            </CardContent>
        </Card>

        {/* Servicios Extras */}
        <Card className="border-0 border-blue-200">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <CardHeader className="text-center bg-blue-900 text-white">
                <CardTitle
                    style={{ fontFamily: "Hore" }}
                    className="text-3xl font-bold"
                >
                    Servicios Extras
                </CardTitle>
                </CardHeader>
            </motion.div>

            <CardContent className="p-0">
                <motion.div
                className="overflow-x-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                >
                <table className="w-full">
                    <thead>
                    <tr className="bg-blue-100">
                        <th className="text-left py-4 px-6 font-bold text-gray-800 border-r">
                        Servicio
                        </th>
                        <th className="text-center py-4 px-4 font-bold text-[#262a44] border-r">
                        CH
                        </th>
                        <th className="text-center py-4 px-4 font-bold text-[#262a44] border-r">
                        M
                        </th>
                        <th className="text-center py-4 px-4 font-bold text-[#262a44] border-r">
                        G
                        </th>
                        <th className="text-center py-4 px-4 font-bold text-[#262a44]">
                        XL
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {extraServices.map((service, index) => (
                        <tr key={index} className="border-b hover:bg-blue-50">
                        <td className="py-4 px-6 font-semibold text-gray-800 border-r">
                            {service.name}
                        </td>
                        {Array.isArray(service.prices) ? (
                            service.prices.map((price, idx) => (
                            <td
                                key={idx}
                                className="py-4 px-4 text-center font-bold text-[#262a44] border-r last:border-r-0"
                            >
                                {price}
                            </td>
                            ))
                        ) : service.prices ? (
                            <td
                            colSpan={4}
                            className="py-4 px-4 text-center font-bold text-[#262a44]"
                            >
                            {service.prices}
                            </td>
                        ) : (
                            <td
                            colSpan={4}
                            className="py-4 px-4 text-center font-bold text-[#262a44]"
                            >
                            {service.price}
                            </td>
                        )}
                        </tr>
                    ))}
                    </tbody>
                </table>
                </motion.div>
            </CardContent>
        </Card>

    </section>

    {/* Cover section */}
      <section id="cover" className="bg-[#262a44] min-h-[500px] flex items-center justify-center px-4 py-12">
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8">
            
            {/* Texto animado */}
            <motion.div
            className="w-full lg:w-1/2 text-white text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <h1
                style={{ fontFamily: 'Hore' }}
                className="text-4xl lg:text-5xl font-extrabold leading-tight mt-6"
            >
                ¡Servicio a <span className="text-pink-400">la puerta</span> <br />
                de tu casa!<br />
                <span className="text-white">¿No estás en la zona?</span> <br />
                <span className="text-white text-2xl">¡Contáctanos para excepciones!</span>
            </h1>
            </motion.div>

            {/* Mapa animado */}
            <motion.div
            className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            >
            <iframe
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
      </section>

    {/* Formulario de reservación */}
      <ReservationForm />   



    </>   
  )
}

export default page