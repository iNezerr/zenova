'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type Props = {};

const Hero = (props: Props) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const fadeElements = sectionRef.current?.querySelectorAll('.fade-up');
    fadeElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='min-h-screen flex items-center' id="home" style={{ padding: '7rem 5% 5rem', position: 'relative', overflow: 'hidden', scrollMarginTop: '80px' }}>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: "url('https://www.zenovaoil.com.ng/_next/image?url=%2Fback3.jpg&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.35',
        }}
      ></div>
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(135deg, rgba(7,13,26,0.6) 20%, rgba(7,13,26,0.3) 60%, transparent 100%)',
        }}
      ></div>
      <div className='relative z-10 max-w-4xl fade-up'>
        <div
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6'
          style={{
            background: 'var(--amber-glow)',
            border: '1px solid var(--border-amber)',
            color: 'var(--amber)',
            fontSize: '0.8rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          <span className='w-1.5 h-1.5 rounded-full animate-pulse' style={{ background: 'var(--amber)' }}></span>
          Now serving Abuja & FCT
        </div>
        <h1
          className='mb-6'
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 8vw, 5.5rem)',
            lineHeight: '1.0',
            letterSpacing: '1px',
          }}
        >
          Never Run <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Dry.</span>
          <br />
          Power Your Business.
        </h1>
        <p
          className='mb-10 text-lg'
          style={{
            color: 'var(--muted)',
            maxWidth: '520px',
            fontWeight: '300',
            lineHeight: '1.8',
          }}
        >
          Zenova Oil delivers premium diesel directly to your doorstep, on schedule, every time. Trusted by businesses across Abuja that can't afford downtime.
        </p>
        <div className='flex flex-wrap gap-4 mb-16'>
          <a
            href="https://order.zenovaoil.com.ng/"
            target="_blank"
            rel="noopener"
            className='inline-flex items-center gap-2 px-8 py-3.5 rounded font-bold text-base tracking-wide transition-all hover:-translate-y-0.5'
            style={{
              background: 'var(--amber)',
              color: 'var(--navy)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFB733';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,166,35,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--amber)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order Now
          </a>
          <a
            href="#why-zenova"
            className='px-8 py-3.5 rounded font-medium text-base transition-all'
            style={{
              background: 'transparent',
              color: 'var(--white)',
              border: '1px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--amber)';
              e.currentTarget.style.color = 'var(--amber)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--white)';
            }}
          >
            Learn More
          </a>
        </div>

        <div className='flex flex-wrap gap-12'>
          <div className='pl-4' style={{ borderLeft: '3px solid var(--amber)' }}>
            <div className='text-4xl font-bold' style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', lineHeight: '1' }}>
              98%+
            </div>
            <div className='text-xs mt-1' style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
              On-Time Delivery Rate
            </div>
          </div>
          <div className='pl-4' style={{ borderLeft: '3px solid var(--amber)' }}>
            <div className='text-4xl font-bold' style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', lineHeight: '1' }}>
              24/7
            </div>
            <div className='text-xs mt-1' style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
              Customer Support
            </div>
          </div>
          <div className='pl-4' style={{ borderLeft: '3px solid var(--amber)' }}>
            <div className='text-4xl font-bold' style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', lineHeight: '1' }}>
              Abuja
            </div>
            <div className='text-xs mt-1' style={{ color: 'var(--muted)', letterSpacing: '0.5px' }}>
              FCT Coverage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
