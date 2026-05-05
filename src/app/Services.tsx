'use client';

import React, { useEffect, useRef } from 'react';

type Props = {};

const Services = (props: Props) => {
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

  const services = [
    {
      icon: '⛽',
      title: 'Premium Diesel Fuel',
      description: 'Multiple grades of high-quality diesel to suit your generators, trucks, and industrial equipment. Consistent quality, every delivery.',
    },
    {
      icon: '🚚',
      title: 'On-Site Delivery & Refueling',
      description: 'Our delivery team comes directly to your location. No trips to the filling station. No logistics headache. Just fuel at your door.',
    },
    {
      icon: '📋',
      title: 'Bulk Supply Contracts',
      description: 'Lock in better rates and guaranteed availability with our monthly or quarterly supply agreements. Ideal for estates, schools, and hospitals.',
    },
    {
      icon: '🕐',
      title: '24/7 Emergency Supply',
      description: 'Running dangerously low? Call or WhatsApp us any time, day or night. We treat emergencies with the urgency they deserve.',
    },
  ];

  return (
    <section ref={sectionRef} className='w-full py-24' id="product-service" style={{ background: 'var(--navy-mid)', scrollMarginTop: '80px' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 fade-up'>
          <p className='text-sm font-semibold tracking-widest uppercase mb-4' style={{ color: 'var(--amber)' }}>
            Our Services
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
            Everything You Need, <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Delivered.</span>
          </h2>
          <div className='w-12 h-0.5 mb-6' style={{ background: 'var(--amber)', borderRadius: '2px' }}></div>
          <p
            className='text-lg'
            style={{
              color: 'var(--muted)',
              maxWidth: '520px',
              fontWeight: '300',
            }}
          >
            From one-time emergency supply to recurring bulk contracts, we have a plan that fits your business.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 fade-up'>
          {services.map((service, index) => (
            <div
              key={index}
              className='p-8 rounded-lg relative overflow-hidden transition-all duration-200'
              style={{
                background: 'var(--navy-card)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-amber)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                className='w-12 h-12 rounded-lg flex items-center justify-center mb-5'
                style={{
                  background: 'var(--amber-glow)',
                  border: '1px solid var(--border-amber)',
                  fontSize: '1.4rem',
                }}
              >
                {service.icon}
              </div>
              <h3 className='text-lg font-semibold mb-2' style={{ color: 'var(--white)' }}>
                {service.title}
              </h3>
              <p className='text-sm' style={{ color: 'var(--muted)' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
