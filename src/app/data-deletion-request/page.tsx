'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  accountIdentifier: string;
  requestType: 'account_deletion' | 'data_deletion';
  additionalInfo: string;
}

export default function DataDeletionRequest() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/data-deletion-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow rounded-lg p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted Successfully</h2>
              <p className="text-gray-600 mb-6">
                Your data deletion request has been received. We will process your request within 30 days and contact you at your provided email address.
              </p>
              <p className="text-sm text-gray-500">
                For reference, your request ID will be sent to your email address.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Data Deletion Request - Zenova Oil
            </h1>
            <div className="prose prose-sm text-gray-600">
              <p className="mb-4">
                Welcome to Zenova Oil's data deletion request page. This form allows you to request the deletion of your account and associated data from our systems.
              </p>
              
              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Steps to Request Account/Data Deletion:</h2>
              <ol className="list-decimal list-inside space-y-2 mb-6">
                <li>Fill out the form below with your accurate information</li>
                <li>Specify whether you want to delete your entire account or specific data</li>
                <li>Provide any additional details to help us locate your account</li>
                <li>Submit the form and we will process your request within 30 days</li>
              </ol>

              <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Data Types and Retention:</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Data That Will Be Deleted:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Account credentials and access tokens</li>
                  <li>Order history and transaction records</li>
                  <li>Communication records with Zenova Oil</li>
                  <li>Usage data and preferences</li>
                </ul>
                
                <h3 className="font-medium text-gray-900 mt-4 mb-2">Data That May Be Retained:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Anonymous usage statistics for business analytics</li>
                  <li>Financial records required by law (minimum 7 years)</li>
                  <li>Legal and compliance records as required</li>
                </ul>
                
                <p className="text-xs text-gray-500 mt-4">
                  <strong>Additional Retention Period:</strong> Some data may be retained for legal compliance purposes for up to 7 years as required by Nigerian law and financial regulations.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Full name is required' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="accountIdentifier" className="block text-sm font-medium text-gray-700">
                Account Identifier *
              </label>
              <input
                type="text"
                id="accountIdentifier"
                {...register('accountIdentifier', { 
                  required: 'Account identifier is required',
                  minLength: {
                    value: 3,
                    message: 'Account identifier must be at least 3 characters'
                  }
                })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Customer ID, phone number, or username"
              />
              <p className="mt-1 text-sm text-gray-500">
                Provide any identifier that helps us locate your account (customer ID, phone number, username, etc.)
              </p>
              {errors.accountIdentifier && (
                <p className="mt-1 text-sm text-red-600">{errors.accountIdentifier.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="requestType" className="block text-sm font-medium text-gray-700">
                Request Type *
              </label>
              <select
                id="requestType"
                {...register('requestType', { required: 'Please select a request type' })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select request type</option>
                <option value="account_deletion">Delete my entire account</option>
                <option value="data_deletion">Delete specific data only</option>
              </select>
              {errors.requestType && (
                <p className="mt-1 text-sm text-red-600">{errors.requestType.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                {...register('additionalInfo')}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Provide any additional details that might help us process your request..."
              />
              <p className="mt-1 text-sm text-gray-500">
                Optional: Any additional information that might help us locate and process your request faster.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Once your account and data are deleted, this action cannot be undone. 
                      You will lose access to all services and historical data associated with your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Deletion Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
