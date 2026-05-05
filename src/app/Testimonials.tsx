'use client';

import React, { useEffect, useRef } from 'react';

type Props = {};

const Testimonials = (props: Props) => {
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

  const testimonials = [
    {
      name: 'Adaeze Okonkwo',
      role: 'Operations Manager, Garki Hotel',
      quote: 'Since switching to Zenova, we\'ve had zero generator-related downtime at our facility. Their team is professional, punctual, and responsive, exactly what we needed.',
      initials: 'AO',
    },
    {
      name: 'Babatunde Musa',
      role: 'CEO, Musa & Associates (Law Firm)',
      quote: 'We process sensitive documents around the clock. Before Zenova, fuel gaps were a serious risk. Now our generators run 24/7 without a hitch. Highly recommended.',
      initials: 'BM',
    },
    {
      name: 'Emeka Nwachukwu',
      role: 'Facilities Lead, TechHub Abuja',
      quote: 'Fast responses, quality fuel, and they actually show up when they say they will. That alone puts them miles ahead of every other supplier I\'ve dealt with in Abuja.',
      initials: 'EN',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-24" id="testimonials" style={{ background: 'var(--navy)', scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-up">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--amber)' }}>
            Client Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px', lineHeight: '1.1' }}>
            Trusted by Abuja's <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Leading</span> Businesses
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: 'var(--amber)', borderRadius: '2px' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-7 rounded-lg transition-colors duration-200 flex flex-col gap-4"
              style={{
                background: 'var(--navy-card)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-amber)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div className="text-xl tracking-widest" style={{ color: 'var(--amber)' }}>
                ★★★★★
              </div>
              <p className="text-base leading-relaxed flex-1 italic" style={{ color: 'var(--white)' }}>
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                  style={{
                    background: 'var(--amber-glow)',
                    border: '1px solid var(--border-amber)',
                    color: 'var(--amber)',
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: 'var(--white)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
