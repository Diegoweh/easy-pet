import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/Reveal";

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Pet - Grooming móvil y atención profesional a domicilio",
description: "Reserva grooming para tu mascota desde casa. Servicio a domicilio, estilistas certificados y atención personalizada. ¡Fácil, rápido y sin estrés!",
keywords: [
    "grooming a domicilio",
    "servicio de mascotas",
    "estética canina",
    "grooming móvil",
    "Easy Pet",
    "baño para perros",
    "grooming Mazatlán",
    "peluquería para mascotas",
    "estilistas caninos",
    "mascotas sin estrés"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${figtree.variable} antialiased`}>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
