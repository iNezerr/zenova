'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  const [year, setYear] = useState('');
  const [backTopVisible, setBackTopVisible] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear().toString());

    const handleScroll = () => {
      setBackTopVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className='w-full' style={{ background: 'var(--navy)', borderTop: '1px solid var(--border)', padding: '4rem 5% 2rem' }}>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Company Info */}
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <div className='mb-6'>
              <Image 
                src="/zenovaoil_logo.png" 
                alt="Zenova Oil Logo" 
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <p className='text-sm mb-6' style={{ color: 'var(--muted)', maxWidth: '260px', lineHeight: '1.7' }}>
              Proudly serving Abuja's businesses with dependable diesel solutions. Reliable, transparent, and always on time.
            </p>
            <div className='flex gap-3'>
              <a href="https://facebook.com/zenovaoil" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all' style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                f
              </a>
              <a href="https://instagram.com/zenovaoil" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all' style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                in
              </a>
              <a href="https://x.com/zenovaoil" target="_blank" rel="noopener noreferrer" className='w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all' style={{ background: 'var(--navy-card)', border: '1px solid var(--border)', color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                𝕏
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className='text-sm font-bold mb-4' style={{ letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--amber)' }}>
              Navigation
            </h4>
            <ul className='flex flex-col gap-2.5'>
              <li>
                <Link href="#home" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#why-zenova" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Why Zenova?
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Clients
                </Link>
              </li>
              <li>
                <Link href="#product-service" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className='text-sm font-bold mb-4' style={{ letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--amber)' }}>
              Services
            </h4>
            <ul className='flex flex-col gap-2.5'>
              <li>
                <Link href="#product-service" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Premium Diesel
                </Link>
              </li>
              <li>
                <Link href="#product-service" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  On-Site Delivery
                </Link>
              </li>
              <li>
                <Link href="#product-service" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Bulk Contracts
                </Link>
              </li>
              <li>
                <Link href="#product-service" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Emergency Supply
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className='text-sm font-bold mb-4' style={{ letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--amber)' }}>
              Contact
            </h4>
            <ul className='flex flex-col gap-2.5'>
              <li>
                <a href="tel:+2347060502621" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  +234 706 050 2621
                </a>
              </li>
              <li>
                <a href="mailto:hello@zenovaoil.com.ng" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  hello@zenovaoil.com.ng
                </a>
              </li>
              <li>
                <Link href="#contact" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  Abuja, Nigeria
                </Link>
              </li>
              <li>
                <Link href="#contact" className='text-sm transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className='flex flex-col md:flex-row items-center justify-between pt-8' style={{ borderTop: '1px solid var(--border)', gap: '1rem' }}>
          <p className='text-xs' style={{ color: 'var(--muted)' }}>
            © {year} Zenova Oil. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" className='text-xs transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--amber)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
              Privacy Policy
            </Link>
            <Link href="#contact" className='text-xs transition-colors' style={{ color: 'var(--muted)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--amber)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a 
        href="#home" 
        className='fixed bottom-24 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-all'
        id="backTop"
        style={{
          background: 'var(--navy-card)',
          border: '1px solid var(--border)',
          color: 'var(--amber)',
          cursor: 'pointer',
          fontSize: '1.1rem',
          textDecoration: 'none',
          opacity: backTopVisible ? 1 : 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--amber)';
          e.currentTarget.style.color = 'var(--navy)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--navy-card)';
          e.currentTarget.style.color = 'var(--amber)';
        }}
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer;
