'use client';

import React, { useEffect, useRef } from 'react';

type Props = {};

const OrderAppSection = (props: Props) => {
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
    <section ref={sectionRef} className='w-full py-24' id="order-app" style={{ background: 'var(--navy-mid)', scrollMarginTop: '80px' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12 fade-up'>
          <p className='text-sm font-semibold tracking-widest uppercase mb-4' style={{ color: 'var(--amber)' }}>
            Order Anytime
          </p>
          <h2
            className='mb-4'
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              letterSpacing: '1px',
              lineHeight: '1.1',
            }}
          >
            Use Our <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Order App</span>
          </h2>
          <div className='w-12 h-0.5 mb-6 mx-auto' style={{ background: 'var(--amber)', borderRadius: '2px' }}></div>
          <p
            className='text-lg mx-auto'
            style={{
              color: 'var(--muted)',
              maxWidth: '520px',
              fontWeight: '300',
            }}
          >
            Place your diesel orders quickly and easily through our dedicated ordering platform. Track deliveries, manage orders, and get support, all in one place.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center fade-up'>
          <a
            href="https://order.zenovaoil.com.ng/"
            target="_blank"
            rel="noopener"
            className='inline-flex items-center gap-3 px-10 py-4 rounded font-bold text-base tracking-wide transition-all hover:-translate-y-0.5'
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Go to Order App
          </a>
          <a
            href="https://wa.me/2347060502621?text=Hello%20Zenova%20Oil%2C%20I%20need%20a%20diesel%20quote"
            target="_blank"
            rel="noopener"
            className='px-10 py-4 rounded font-medium text-base transition-all'
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
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderAppSection;
