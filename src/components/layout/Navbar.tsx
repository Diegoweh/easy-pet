'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-7 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="#" title="home" className="flex items-center space-x-2">            
            <img
              title="Logo"
              src="/assets/img/easyPetsLogo.png"
              alt="Logo Shekinah"
              className="object-contain w-[60px] h-auto"
            />
          </Link>

          {/* Burger Button for mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link href="/" className="text-gray-700 hover:text-blue-700 font-semibold transition-colors">
              Inicio
            </Link> */}
            <Link href="#services" title="servicios" className="text-gray-700 hover:text-blue-700 font-semibold transition-colors">
              Servicios
            </Link>
            <Link href="#cover" title="Cobertura" className="text-gray-700 hover:text-blue-700 font-semibold transition-colors">
              Cobertura
            </Link>
            <Link href="#reserva" title="reserva" className="text-gray-700 hover:text-blue-700 font-semibold transition-colors">
              Reserva
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 px-4 py-2 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {/* <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-700 font-semibold transition-colors py-2"
                onClick={toggleMenu}
              >
                Inicio
              </Link> */}
              <Link 
                href="#services" 
                className="text-gray-700 hover:text-blue-700 font-semibold transition-colors py-2"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
              <Link 
                href="#cover" 
                className="text-gray-700 hover:text-blue-700 font-semibold transition-colors py-2"
                onClick={toggleMenu}
              >
                Cobertura
              </Link>
              <Link 
                href="#reserva" 
                className="text-gray-700 hover:text-blue-700 font-semibold transition-colors py-2"
                onClick={toggleMenu}
              >
                Reserva
              </Link>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar