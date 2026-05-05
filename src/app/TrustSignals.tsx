'use client';

import React, { useEffect, useRef } from 'react';

type Props = {};

const TrustSignals = (props: Props) => {
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

  const trustItems = [
    {
      icon: '🛡️',
      heading: 'Quality Guaranteed',
      description: 'We source only certified, undiluted diesel. Your equipment is protected.',
    },
    {
      icon: '📍',
      heading: 'Abuja-Based Team',
      description: 'We live and operate here. Fast local response, no long-distance delays.',
    },
    {
      icon: '💬',
      heading: 'Real Support',
      description: 'Speak to a real person, not a chatbot. WhatsApp, call, or email, always.',
    },
    {
      icon: '💰',
      heading: 'No Hidden Fees',
      description: 'Transparent pricing upfront. What you\'re quoted is exactly what you pay.',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-24" id="trust" style={{ background: 'var(--navy)', scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-up">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--amber)' }}>
            Why We're Trustworthy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', letterSpacing: '1px', lineHeight: '1.1' }}>
            Built on <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Reliability</span>
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-4" style={{ background: 'var(--amber)', borderRadius: '2px' }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg text-center"
              style={{
                background: 'var(--navy-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--white)' }}>
                {item.heading}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
