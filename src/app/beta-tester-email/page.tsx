'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface EmailForm {
  emails: string
  senderEmail: string
  customSubject?: string
  customMessage?: string
  emailType: 'beta' | 'custom'
}

export default function BetaTesterEmail() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
  
  const companyEmails = [
    { value: 'ceo@zenovaoil.com.ng', label: 'CEO (ceo@zenovaoil.com.ng)' },
    { value: 'cto@zenovaoil.com.ng', label: 'CTO (cto@zenovaoil.com.ng)' },
    { value: 'bdm@zenovaoil.com.ng', label: 'Business Development Manager(bdm@zenovaoil.com.ng)' },
    { value: 'accounts@zenovaoil.com.ng', label: 'Accounts (accounts@zenovaoil.com.ng)' },
    { value: 'support@zenovaoil.com.ng', label: 'Support (support@zenovaoil.com.ng)' },
    { value: 'app@zenovaoil.com.ng', label: 'App Team (app@zenovaoil.com.ng)' },
    { value: 'contact@zenovaoil.com.ng', label: 'Contact (contact@zenovaoil.com.ng)' },
  ]
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<EmailForm>({
    defaultValues: {
      senderEmail: 'ceo@zenovaoil.com.ng',
      emailType: 'beta'
    }
  })
  
  const emailType = watch('emailType')

  const onSubmit = async (data: EmailForm) => {
    setIsLoading(true)
    setMessage('')
    setMessageType('')

    try {
      const emailList = data.emails.split(',').map(email => email.trim()).filter(email => email)
      
      const response = await fetch('/api/send-beta-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: emailList,
          senderEmail: data.senderEmail,
          emailType: data.emailType,
          customSubject: data.customSubject,
          customMessage: data.customMessage
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(`Emails sent successfully to ${emailList.length} recipient(s)!`)
        setMessageType('success')
        reset()
      } else {
        setMessage(`Error: ${result.error}`)
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Failed to send emails. Please try again.')
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Custom Emails</h1>
          <p className="text-gray-600 mb-8">
            Send custom emails using various company accounts from Zenova Oil.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="emailType" className="block text-sm font-medium text-gray-700 mb-2">
                Email Type
              </label>
              <select
                id="emailType"
                {...register('emailType')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              >
                <option value="beta">Beta Tester Invitation</option>
                <option value="custom">Custom Email</option>
              </select>
            </div>

            <div>
              <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700 mb-2">
                From (Sender Email)
              </label>
              <select
                id="senderEmail"
                {...register('senderEmail', { required: 'Sender email is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              >
                {companyEmails.map((email) => (
                  <option key={email.value} value={email.value}>
                    {email.label}
                  </option>
                ))}
              </select>
              {errors.senderEmail && (
                <p className="mt-1 text-sm text-red-600">{errors.senderEmail.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="emails" className="block text-sm font-medium text-gray-700 mb-2">
                Email Addresses
              </label>
              <textarea
                id="emails"
                {...register('emails', { 
                  required: 'At least one email address is required',
                  pattern: {
                    value: /^[\s\S]*[\w\-\.]+@([\w-]+\.)+[\w-]{2,}[\s\S]*$/,
                    message: 'Please enter valid email addresses'
                  }
                })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                placeholder="Enter email addresses separated by commas&#10;example1@email.com, example2@email.com, example3@email.com"
              />
              {errors.emails && (
                <p className="mt-1 text-sm text-red-600">{errors.emails.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Separate multiple email addresses with commas
              </p>
            </div>

            {emailType === 'custom' && (
              <>
                <div>
                  <label htmlFor="customSubject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="customSubject"
                    {...register('customSubject', { required: 'Subject is required for custom emails' })}
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    placeholder="Enter email subject"
                  />
                  {errors.customSubject && (
                    <p className="mt-1 text-sm text-red-600">{errors.customSubject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="customMessage" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="customMessage"
                    {...register('customMessage', { required: 'Message is required for custom emails' })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    placeholder="Enter your custom message here..."
                  />
                  {errors.customMessage && (
                    <p className="mt-1 text-sm text-red-600">{errors.customMessage.message}</p>
                  )}
                </div>
              </>
            )}

            {emailType === 'beta' && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Preview Message:</h3>
                <div className="text-sm text-gray-600 bg-white p-3 rounded border border-gray-200">
                  <p className="mb-2">Hello Beta Tester,</p>
                  <p className="mb-2">
                    Thank you for your interest in testing the Zenova Oil app! We're excited to have you as part of our beta testing program.
                  </p>
                  <p className="mb-2">
                    Please download the app using the link below and start testing:
                  </p>
                  <p className="mb-2">
                    <a href="https://play.google.com/apps/testing/com.zenova.oil" 
                       className="text-blue-600 hover:underline break-all">
                      https://play.google.com/apps/testing/com.zenova.oil
                    </a>
                  </p>
                  <p className="mb-2">
                    We value your feedback and would love to hear about your experience. Please report any issues or suggestions you may have.
                  </p>
                  <p>
                    Best regards,<br />
                    The Zenova Oil Team
                  </p>
                </div>
              </div>
            )}

            {message && (
              <div className={`p-4 rounded-md ${
                messageType === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }`}
            >
              {isLoading ? 'Sending Emails...' : 'Send Emails'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
