"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-2xl border border-green-800/30 transition-all duration-300
        ${scrolled
          ? 'w-[95%] sm:w-[90%] md:w-[70%] md:sm:w-[60%] bg-green-950 bg-opacity-95 backdrop-blur-lg shadow-2xl h-12 md:h-14 py-0'
          : 'w-[95%] sm:w-[90%] md:w-[95%] md:sm:w-[90%] bg-green-900 bg-opacity-90 backdrop-blur-md shadow-lg h-12 md:h-14 py-0'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 py-0">
        <div className="flex justify-between items-center transition-all duration-300 h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image 
              src="/zenovaoil_logo.png" 
              alt="Zenova Oil Logo" 
              width={scrolled ? 36 : 50}
              height={scrolled ? 28 : 40}
              className={`mr-2 transition-all duration-300 ${scrolled ? 'scale-90' : ''}`}
            />
            <span className={`text-white font-bold drop-shadow-sm transition-all duration-300 ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>Zenova Oil</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-8 transition-all duration-300 ${scrolled ? 'text-sm' : 'text-base'}`}>
            <Link href="#home" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium transition-colors relative hover:after:w-full after:absolute after:w-0 after:h-0.5 after:bg-green-200 after:bottom-0 after:left-0 after:transition-all after:duration-300">
              Home
            </Link>
            <Link href="#why-zenova" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium transition-colors relative hover:after:w-full after:absolute after:w-0 after:h-0.5 after:bg-green-200 after:bottom-0 after:left-0 after:transition-all after:duration-300">
              Why Zenova?
            </Link>
            <Link href="#how-zenova" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium transition-colors relative hover:after:w-full after:absolute after:w-0 after:h-0.5 after:bg-green-200 after:bottom-0 after:left-0 after:transition-all after:duration-300">
              How Zenova?
            </Link>
            <Link href="#product-service" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium transition-colors relative hover:after:w-full after:absolute after:w-0 after:h-0.5 after:bg-green-200 after:bottom-0 after:left-0 after:transition-all after:duration-300">
              Our Offers
            </Link>
            <Link href="#contact" className="text-white hover:text-green-200 px-3 py-2 text-sm font-medium transition-colors relative hover:after:w-full after:absolute after:w-0 after:h-0.5 after:bg-green-200 after:bottom-0 after:left-0 after:transition-all after:duration-300">
              Contact Us
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'scale-90' : ''}`}> 
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-900 bg-white hover:bg-green-50 transition-all hover:scale-105 backdrop-filter backdrop-blur-sm"
            >
              Get A Discount
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 hover:bg-green-800/50 focus:outline-none transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-green-900 bg-opacity-90 backdrop-blur-md rounded-2xl border-green-800/30
          transition-all duration-500 ease-in-out
          pb-2 mt-3
          ${menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}`}
        style={{
          transitionProperty: 'max-height, opacity, transform',
        }}
      >
        <div className="px-2 space-y-1 sm:px-3">
          <Link 
            href="#home" 
            className={`text-white hover:bg-green-800/50 block px-3 py-2 rounded-md font-medium transition-all ${scrolled ? 'text-sm' : 'text-base'}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#why-zenova" 
            className={`text-white hover:bg-green-800/50 block px-3 py-2 rounded-md font-medium transition-all ${scrolled ? 'text-sm' : 'text-base'}`}
            onClick={() => setMenuOpen(false)}
          >
            Why Zenova?
          </Link>
          <Link 
            href="#how-zenova" 
            className={`text-white hover:bg-green-800/50 block px-3 py-2 rounded-md font-medium transition-all ${scrolled ? 'text-sm' : 'text-base'}`}
            onClick={() => setMenuOpen(false)}
          >
            How Zenova?
          </Link>
          <Link 
            href="#product-service" 
            className={`text-white hover:bg-green-800/50 block px-3 py-2 rounded-md font-medium transition-all ${scrolled ? 'text-sm' : 'text-base'}`}
            onClick={() => setMenuOpen(false)}
          >
            Our Offers
          </Link>
          <Link 
            href="#contact" 
            className={`text-white hover:bg-green-800/50 block px-3 py-2 rounded-md font-medium transition-all ${scrolled ? 'text-sm' : 'text-base'}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link 
            href="#contact" 
            className={`bg-white text-green-900 hover:bg-green-50 block px-3 py-2 rounded-md text-center transition-all shadow-sm backdrop-filter backdrop-blur-sm ${scrolled ? 'text-sm' : 'text-base'}`}
            onClick={() => setMenuOpen(false)}
          >
            Get A Discount
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
