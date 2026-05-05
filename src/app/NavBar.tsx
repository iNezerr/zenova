"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
      className={`fixed top-0 left-0 right-0 transition-all duration-300`}
      style={{
        zIndex: 1000,
        padding: '1rem 5%',
        background: 'rgba(7,13,26,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <Image 
            src="/zenovaoil_logo.png" 
            alt="Zenova Oil Logo" 
            width={100}
            height={10}
            className="object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8`}>
          <Link href="#why-zenova" className="text-sm font-medium transition-colors" style={{ color: 'var(--muted)', letterSpacing: '0.5px', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
            Why Zenova
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors" style={{ color: 'var(--muted)', letterSpacing: '0.5px', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
            Clients
          </Link>
          <Link href="#product-service" className="text-sm font-medium transition-colors" style={{ color: 'var(--muted)', letterSpacing: '0.5px', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors" style={{ color: 'var(--muted)', letterSpacing: '0.5px', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
            Contact
          </Link>
        </div>
        
        {/* CTA Button */}
        <div className={`hidden md:block`}> 
          <Link 
            href="https://order.zenovaoil.com.ng/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center px-5 py-2 rounded font-semibold text-sm tracking-wide transition-all hover:-translate-y-0.5"
            style={{
              background: 'var(--amber)',
              color: 'var(--navy)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFB733';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--amber)';
            }}
          >
            Order Now ↗
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            type="button" 
            className="flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 rounded transition-all" style={{ background: 'var(--white)' }}></span>
            <span className="block w-6 h-0.5 rounded transition-all" style={{ background: 'var(--white)' }}></span>
            <span className="block w-6 h-0.5 rounded transition-all" style={{ background: 'var(--white)' }}></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out pb-2 mt-3
          ${menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}`}
        style={{
          background: 'var(--navy-mid)',
          borderBottom: '1px solid var(--border)',
          transitionProperty: 'max-height, opacity, transform',
        }}
      >
        <div className="flex flex-col gap-4 px-4">
          <Link 
            href="#why-zenova" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--white)', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            Why Zenova
          </Link>
          <Link 
            href="#testimonials" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--white)', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            Clients
          </Link>
          <Link 
            href="#product-service" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--white)', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#contact" 
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--white)', textDecoration: 'none' }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="https://order.zenovaoil.com.ng/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center px-5 py-2 rounded font-semibold text-sm tracking-wide transition-all"
            style={{
              background: 'var(--amber)',
              color: 'var(--navy)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Order Now ↗
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
