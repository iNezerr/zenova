"use client"
import React, { useState } from 'react';
import Link from 'next/link';

type Props = {}

const SupportButton = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Support pop-up */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-72 border-l-4 border-green-700 animate-fade-in-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-green-900 font-bold text-lg">24/7 Customer Support</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-500 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-gray-700 mb-4">
            Our dedicated customer support team is available 24/7 to assist you with any questions or issues you may have.
          </p>
          <div className="space-y-2">
            <Link 
              href="tel:+2348138348688"
              className="flex items-center gap-2 text-green-900 hover:text-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +234-813-834-8688
            </Link>
            <Link
              href="mailto:zenovaoil@gmail.com"
              className="flex items-center gap-2 text-green-900 hover:text-green-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              zenovaoil@gmail.com
            </Link>
          </div>
        </div>
      )}

      {/* Support button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center gap-2 bg-green-100 hover:bg-green-50 text-green-900 px-4 py-3 rounded-full shadow-lg transition-all"
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-900" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <span className="font-semibold whitespace-nowrap">24/7 Customer Support</span>
      </button>
    </div>
  );
};

export default SupportButton;
