import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
