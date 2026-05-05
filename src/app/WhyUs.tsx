'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

type Props = {};

const WhyUs = (props: Props) => {
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

  const features = [
    {
      title: 'Reliable Deliveries, Every Time',
      description: 'We deliver high-quality diesel directly to your business, on schedule. No excuses, no delays, just fuel when you need it.',
    },
    {
      title: 'Zero Downtime Guarantee',
      description: 'Our proactive supply management means you\'ll never scramble for fuel mid-operations again. We monitor your needs so you don\'t have to.',
    },
    {
      title: 'Transparent, Competitive Pricing',
      description: 'No hidden charges. We offer clear, competitive per-litre pricing with flexible payment plans designed to fit your operational budget.',
    },
  ];

  return (
    <section ref={sectionRef} className='w-full py-24' id="why-zenova" style={{ background: 'var(--navy-mid)', scrollMarginTop: '80px' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up'>
          {/* Image Section */}
          <div className='relative rounded-lg overflow-hidden' style={{ aspectRatio: '4/3' }}>
            <Image 
              src="/zenova3.jpg" 
              alt="Zenova Oil diesel delivery truck" 
              fill
              className='object-cover'
              style={{ filter: 'saturate(0.7)' }}
            />
            <div
              className='absolute inset-0'
              style={{
                background: 'linear-gradient(to top right, rgba(245,166,35,0.2), transparent)',
              }}
            ></div>
          </div>
          
          {/* Content Section */}
          <div>
            <p className='text-sm font-semibold tracking-widest uppercase mb-4' style={{ color: 'var(--amber)' }}>
              Why Choose Us
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
              Abuja's Most <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Reliable</span> Diesel Partner
            </h2>
            <div className='w-12 h-0.5 mb-6' style={{ background: 'var(--amber)', borderRadius: '2px' }}></div>
            <p
              className='mb-8 text-lg'
              style={{
                color: 'var(--muted)',
                maxWidth: '520px',
                fontWeight: '300',
              }}
            >
              Power your business with confidence. From procurement to doorstep delivery, we handle every step so you can focus on what matters most.
            </p>
            
            {/* Feature Cards */}
            <div className='flex flex-col gap-6'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='p-5 rounded transition-colors duration-200'
                  style={{
                    background: 'var(--navy-card)',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid var(--amber)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(20,30,48,0.9)';
                    e.currentTarget.style.borderLeftColor = '#FFB733';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--navy-card)';
                    e.currentTarget.style.borderLeftColor = 'var(--amber)';
                  }}
                >
                  <h3 className='text-base font-semibold mb-1' style={{ color: 'var(--white)' }}>
                    {feature.title}
                  </h3>
                  <p className='text-sm' style={{ color: 'var(--muted)' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
