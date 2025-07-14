import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { NotificationEmail } from '../../../components/NotificationEmail';
import { ThankYouEmail } from '../../../components/ThankYouEmail';

// Email validation helper
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the form data
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send both emails using React components
    try {
      const [notificationResponse, thankYouResponse] = await Promise.all([
        resend.emails.send({
          from: 'Zenova Oil Website <website@zenovaoil.com.ng>',
          to: ['zenovaoil@gmail.com'],
          replyTo: email,
          subject: 'New Contact Form Submission',
          react: NotificationEmail({ name, email, message }),
        }),
        resend.emails.send({
          from: 'Zenova Oil <info@zenovaoil.com.ng>',
          to: [email],
          subject: 'Thank you for contacting Zenova Oil',
          react: ThankYouEmail({ name, email, message }),
        })
      ]);

      // Check for errors in responses
      if (notificationResponse.error || thankYouResponse.error) {
        throw new Error(notificationResponse.error?.message || thankYouResponse.error?.message || 'Failed to send email');
      }

      // Return success response
      return NextResponse.json({ 
        success: true,
        message: 'Your message has been sent successfully! We will contact you soon.'
      });
    } catch (emailError) {
      console.error('Error sending email with Resend:', emailError);
      return NextResponse.json(
        { error: emailError instanceof Error ? emailError.message : 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
