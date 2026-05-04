import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL || process.env.VITE_FROM_EMAIL || process.env.VITE_ADMIN_EMAIL || 'no-reply@zenovaoil.com.ng'

export async function POST(request: NextRequest) {
  try {
    console.log('Environment variables:', {
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Set' : 'Not set',
      FROM_EMAIL: process.env.FROM_EMAIL,
      VITE_FROM_EMAIL: process.env.VITE_FROM_EMAIL,
      VITE_ADMIN_EMAIL: process.env.VITE_ADMIN_EMAIL,
      fromEmail: fromEmail
    })

    const { emails, senderEmail, emailType, customSubject, customMessage } = await request.json()

    if (!emails || !Array.isArray(emails) || emails.length === 0) {
      return NextResponse.json(
        { error: 'Valid email addresses are required' },
        { status: 400 }
      )
    }

    if (!senderEmail || !senderEmail.endsWith('@zenovaoil.com.ng')) {
      return NextResponse.json(
        { error: 'Valid sender email is required' },
        { status: 400 }
      )
    }

    if (emailType === 'custom' && (!customSubject || !customMessage)) {
      return NextResponse.json(
        { error: 'Custom subject and message are required for custom emails' },
        { status: 400 }
      )
    }

    let emailContent = ''
    let emailSubject = ''

    if (emailType === 'custom') {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${customSubject}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${customSubject}</h1>
    </div>
    
    <div class="content">
        ${customMessage.replace(/\n/g, '<br>')}
    </div>
    
    <div class="footer">
        <p>Best regards,<br>
        The Zenova Oil Team</p>
    </div>
</body>
</html>
      `
      emailSubject = customSubject
    } else {
      emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Welcome to Zenova Oil Beta Testing</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .button {
            display: inline-block;
            background: #4CAF50;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to Zenova Oil Beta Testing!</h1>
    </div>
    
    <div class="content">
        <p>Hello Beta Tester,</p>
        
        <p>Thank you for your interest in testing the Zenova Oil app! We're excited to have you as part of our beta testing program.</p>
        
        <p>Please download the app using the link below and start testing:</p>
        
        <p style="text-align: center;">
            <a href="https://play.google.com/apps/testing/com.zenova.oil" class="button">
                Download Zenova Oil App
            </a>
        </p>
        
        <p><strong>Download Link:</strong><br>
        <a href="https://play.google.com/apps/testing/com.zenova.oil">https://play.google.com/apps/testing/com.zenova.oil</a></p>
        
        <p>We value your feedback and would love to hear about your experience. Please report any issues or suggestions you may have.</p>

        PS: If you're not able to download after 15 minutes, kindly send a message on WhatsApp: <a href="https://wa.me/+233558029666">+233558029666</a>
        
        <p>Thank you for helping us improve Zenova Oil!</p>
    </div>
    
    <div class="footer">
        <p>Best regards,<br>
        The Zenova Oil Team</p>
    </div>
</body>
</html>
      `
      emailSubject = 'Welcome to Zenova Oil Beta Testing Program'
    }

    const results = []
    
    for (const email of emails) {
      try {
        console.log(`Sending email to: ${email} from: ${senderEmail}`)
        
        const result = await resend.emails.send({
          from: senderEmail,
          to: [email],
          subject: emailSubject,
          html: emailContent,
        })
        console.log(`Email sent successfully to ${email}:`, result.data?.id)
        results.push({ email, success: true, id: result.data?.id })
      } catch (error) {
        console.error(`Failed to send email to ${email}:`, error)
        results.push({ email, success: false, error: error instanceof Error ? error.message : 'Unknown error' })
      }
    }

    const successful = results.filter(r => r.success).length
    const failed = results.filter(r => !r.success)

    return NextResponse.json({
      message: `Email sending completed. ${successful} sent successfully, ${failed.length} failed.`,
      results: results
    })

  } catch (error) {
    console.error('Error sending beta tester emails:', error)
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    )
  }
}
