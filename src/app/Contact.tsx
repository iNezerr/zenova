'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Props = {};

const Contact = (props: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate form submission for demo
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Success - clear form and show success message
      reset();
      setSubmitSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='w-full py-24' id="contact" style={{ background: 'var(--navy-mid)', scrollMarginTop: '80px' }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <p className='text-sm font-semibold tracking-widest uppercase mb-4' style={{ color: 'var(--amber)' }}>
            Get in Touch
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
            Request a <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>Quote</span> Today
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
            Tell us about your fuel needs and we'll get back to you within the hour during business hours.
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <div className='flex flex-col gap-6'>
            <div
              className='flex items-start gap-4 p-5 rounded-lg transition-colors duration-200'
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
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                style={{
                  background: 'var(--amber-glow)',
                  border: '1px solid var(--border-amber)',
                  color: 'var(--amber)',
                  fontSize: '1.1rem',
                }}
              >
                📞
              </div>
              <div className='flex-1'>
                <small className='block mb-1' style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Phone / WhatsApp
                </small>
                <a href="tel:+2347060502621" className='font-medium' style={{ color: 'var(--white)', textDecoration: 'none' }}>
                  +234 706 050 2621
                </a>
              </div>
            </div>
            
            <div
              className='flex items-start gap-4 p-5 rounded-lg transition-colors duration-200'
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
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                style={{
                  background: 'var(--amber-glow)',
                  border: '1px solid var(--border-amber)',
                  color: 'var(--amber)',
                  fontSize: '1.1rem',
                }}
              >
                ✉️
              </div>
              <div className='flex-1'>
                <small className='block mb-1' style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Email
                </small>
                <a href="mailto:hello@zenovaoil.com.ng" className='font-medium' style={{ color: 'var(--white)', textDecoration: 'none' }}>
                  hello@zenovaoil.com.ng
                </a>
              </div>
            </div>
            
            <div
              className='flex items-start gap-4 p-5 rounded-lg transition-colors duration-200'
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
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                style={{
                  background: 'var(--amber-glow)',
                  border: '1px solid var(--border-amber)',
                  color: 'var(--amber)',
                  fontSize: '1.1rem',
                }}
              >
                📍
              </div>
              <div className='flex-1'>
                <small className='block mb-1' style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Location
                </small>
                <span className='font-medium' style={{ color: 'var(--white)' }}>
                  Abuja, Federal Capital Territory, Nigeria
                </span>
              </div>
            </div>
            
            <div
              className='flex items-start gap-4 p-5 rounded-lg transition-colors duration-200'
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
              <div
                className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                style={{
                  background: 'var(--amber-glow)',
                  border: '1px solid var(--border-amber)',
                  color: 'var(--amber)',
                  fontSize: '1.1rem',
                }}
              >
                🕐
              </div>
              <div className='flex-1'>
                <small className='block mb-1' style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Support Hours
                </small>
                <span className='font-medium' style={{ color: 'var(--white)' }}>
                  24/7, We're always available
                </span>
              </div>
            </div>
            
            <div>
              <p className='mb-3' style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Follow Us
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
          </div>
          
          {/* Contact Form */}
          <div
            className='p-10 rounded-lg'
            style={{
              background: 'var(--navy-card)',
              border: '1px solid var(--border)',
            }}
          >
            <p className='text-xl font-semibold mb-6' style={{ color: 'var(--white)' }}>Send us a message</p>
            
            {/* Success Message */}
            {submitSuccess && (
              <div className='text-center p-8' style={{ color: '#4ade80', fontSize: '0.95rem' }}>
                <span className='text-5xl mb-3 block'>✅</span>
                <p className='font-semibold text-lg mb-2' style={{ color: 'var(--white)' }}>Message sent!</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>We'll get back to you within the hour.</p>
              </div>
            )}
            
            {/* Error Message */}
            {submitError && (
              <div className='mb-4 p-4 rounded text-center font-medium' style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', border: '1px solid rgba(239,68,68,0.3)' }}>
                {submitError}
              </div>
            )}
            
            {!submitSuccess && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label htmlFor="name" className='block mb-1' style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--muted)', letterSpacing: '0.5px' }}>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      className='w-full px-4 py-3 rounded outline-none transition-colors'
                      style={{
                        background: 'var(--navy)',
                        border: '1px solid var(--border)',
                        color: 'var(--white)',
                      }}
                      placeholder='e.g. Emeka Obi'
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--amber)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className='block mb-1' style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--muted)', letterSpacing: '0.5px' }}>
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      className='w-full px-4 py-3 rounded outline-none transition-colors'
                      style={{
                        background: 'var(--navy)',
                        border: '1px solid var(--border)',
                        color: 'var(--white)',
                      }}
                      placeholder='+234 800 000 0000'
                      {...register('phone', { 
                        required: 'Phone number is required',
                      })}
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--amber)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                
                <div className='mb-4'>
                  <label htmlFor="email" className='block mb-1' style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--muted)', letterSpacing: '0.5px' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className='w-full px-4 py-3 rounded outline-none transition-colors'
                    style={{
                      background: 'var(--navy)',
                      border: '1px solid var(--border)',
                      color: 'var(--white)',
                    }}
                    placeholder='you@company.com'
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { 
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email'
                      }
                    })}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--amber)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
                  )}
                </div>
                
                <div className='mb-4'>
                  <label htmlFor="service" className='block mb-1' style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--muted)', letterSpacing: '0.5px' }}>
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className='w-full px-4 py-3 rounded outline-none transition-colors'
                    style={{
                      background: 'var(--navy)',
                      border: '1px solid var(--border)',
                      color: 'var(--white)',
                    }}
                    {...register('service')}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--amber)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service...</option>
                    <option>One-Time Diesel Delivery</option>
                    <option>Recurring Monthly Supply</option>
                    <option>Bulk Contract Agreement</option>
                    <option>Emergency Fuel Supply</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                
                <div className='mb-6'>
                  <label htmlFor="message" className='block mb-1' style={{ fontSize: '0.82rem', fontWeight: '500', color: 'var(--muted)', letterSpacing: '0.5px' }}>
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    className='w-full px-4 py-3 rounded outline-none transition-colors resize-y'
                    style={{
                      background: 'var(--navy)',
                      border: '1px solid var(--border)',
                      color: 'var(--white)',
                      minHeight: '110px',
                    }}
                    placeholder='Briefly describe your fuel needs, quantity, location, frequency...'
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--amber)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && (
                    <p className='text-red-500 text-sm mt-1'>{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  className='w-full py-4 rounded font-bold text-base tracking-wide flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                  style={{
                    background: 'var(--amber)',
                    color: 'var(--navy)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.background = '#FFB733';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--amber)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className='flex items-center justify-center'>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
