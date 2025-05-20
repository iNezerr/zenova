import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className='w-full bg-green-900 text-white py-16 md:py-24' id="contact">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-16 relative'>
          Chat with us today!
          <span className='absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white rounded'></span>
        </h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <div>
            <p className='text-xl mb-8'>
              Power your business with confidence. Zenova Oil delivers high-quality diesel 
              fuel directly to you, ensuring reliable performance and on-time service. 
              We're Abuja's trusted partner for businesses that keep the city running.
            </p>
            
            <div className='space-y-6 mb-8'>
              <div className='flex items-center gap-4'>
                <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+2348138348688" className='text-white hover:underline'>+234-813-834-8688</a>
              </div>
              
              <div className='flex items-center gap-4'>
                <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:zenovaoil@gmail.com" className='text-white hover:underline'>zenovaoil@gmail.com</a>
              </div>
              
              <div className='flex items-center gap-4'>
                <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <address className='not-italic'>Abuja, Nigeria</address>
              </div>
            </div>
            
            {/* Social Media */}
            <div className='flex gap-4'>
              <a href="https://facebook.com/zenovaoil" target="_blank" rel="noopener noreferrer" className='bg-white w-12 h-12 rounded-full flex items-center justify-center text-green-900 hover:bg-green-100 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"/>
                </svg>
              </a>
              <a href="https://instagram.com/zenovaoil" target="_blank" rel="noopener noreferrer" className='bg-white w-12 h-12 rounded-full flex items-center justify-center text-green-900 hover:bg-green-100 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://x.com/zenovaoil" target="_blank" rel="noopener noreferrer" className='bg-white w-12 h-12 rounded-full flex items-center justify-center text-green-900 hover:bg-green-100 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05 1.883 0 3.616-.636 5.001-1.721-1.771-.037-3.255-1.197-3.767-2.793.249.037.499.062.761.062.361 0 .724-.05 1.061-.137-1.847-.374-3.23-1.995-3.23-3.953v-.05c.537.299 1.16.486 1.82.511-1.086-.722-1.801-1.957-1.801-3.356 0-.748.199-1.434.548-2.032 1.983 2.443 4.964 4.04 8.306 4.215-.062-.3-.1-.599-.1-.898 0-2.168 1.771-3.939 3.94-3.939 1.134 0 2.156.474 2.88 1.235.897-.175 1.758-.512 2.518-.973-.299.93-.93 1.721-1.759 2.219.798-.087 1.571-.312 2.29-.624-.536.799-1.218 1.51-1.995 2.082z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form className='bg-white p-8 rounded-xl shadow-lg'>
              <h3 className='text-2xl font-bold text-green-900 mb-6'>Send us a message</h3>
              
              <div className='mb-6'>
                <label htmlFor="name" className='block text-gray-700 mb-2 font-medium'>Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900'
                  placeholder='John Doe'
                />
              </div>
              
              <div className='mb-6'>
                <label htmlFor="email" className='block text-gray-700 mb-2 font-medium'>Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900'
                  placeholder='john@example.com'
                />
              </div>
              
              <div className='mb-6'>
                <label htmlFor="message" className='block text-gray-700 mb-2 font-medium'>Your Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900'
                  placeholder='How can we help you?'
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className='w-full py-4 bg-green-900 text-white rounded-lg font-semibold hover:bg-green-800 transition-colors'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
