'use client'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import React from 'react'

export function Footer() {
  return (
    <footer className="bg-[#1d2240] text-white px-4 py-8">
    <div className="max-w-7xl mx-auto">
        {/* Primera fila (logo y redes) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 md:pb-8">
        {/* Logo - siempre a la izquierda */}
        <div className="flex-shrink-0">
            <img
            title="Logo" 
            src="/assets/img/logoWhite.png"
            alt="Easy Pet logo" 
            className="h-16 object-contain"
            />
        </div>

        {/* Redes sociales - en columna en móvil, en fila en desktop */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white text-lg font-semibold">
            <a
            title="Facebook" 
            href="https://www.facebook.com/easypet.mzt/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
            <Facebook className="text-2xl" />
            <span>/Easypets</span>
            </a>
            
            <a
            title="Instagram" 
            href="https://www.instagram.com/easypet.mzt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-400 transition-colors"
            >
            <Instagram className="text-2xl"/>
            <span>/Easypets</span>
            </a>
            
            <a
            title="Whatsapp" 
            href="https://wa.link/60be02"
            target="_blank" 
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
            <MessageCircle className="text-2xl" />
            <span>669 261 0517</span>
            </a>
        </div>
        </div>

        {/* Copyright - siempre abajo y centrado */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm italic text-gray-300">
        Copyright © Easypets. All rights reserved.
        </div>
    </div>
    </footer>

  )
}

export default Footer