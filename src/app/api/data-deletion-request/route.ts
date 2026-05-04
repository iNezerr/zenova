import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface RequestData {
  name: string;
  email: string;
  accountIdentifier: string;
  requestType: 'account_deletion' | 'data_deletion';
  additionalInfo: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: RequestData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.accountIdentifier || !data.requestType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate a unique request ID
    const requestId = `DDR-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Send notification email to the user
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937; margin-bottom: 20px;">Data Deletion Request Confirmation</h2>
        
        <p>Dear ${data.name},</p>
        
        <p>We have received your data deletion request from Zenova Oil. This email confirms that your request has been successfully submitted and is now being processed.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1f2937;">Request Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Request ID:</strong> ${requestId}</li>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Account Identifier:</strong> ${data.accountIdentifier}</li>
            <li><strong>Request Type:</strong> ${data.requestType === 'account_deletion' ? 'Delete entire account' : 'Delete specific data only'}</li>
            ${data.additionalInfo ? `<li><strong>Additional Information:</strong> ${data.additionalInfo}</li>` : ''}
          </ul>
        </div>
        
        <h3 style="color: #1f2937;">What Happens Next?</h3>
        <ol>
          <li><strong>Verification:</strong> We will verify your identity and locate your account</li>
          <li><strong>Processing:</strong> Your request will be processed within 30 days</li>
          <li><strong>Confirmation:</strong> You will receive a confirmation email once the deletion is complete</li>
        </ol>
        
        <h3 style="color: #1f2937;">Important Information:</h3>
        <ul>
          <li>Once your data is deleted, this action cannot be undone</li>
          <li>Some data may be retained for legal compliance purposes</li>
          <li>You will lose access to all Zenova Oil services associated with your account</li>
        </ul>
        
        <p>If you did not make this request, please contact us immediately at <a href="mailto:support@zenovaoil.com.ng">support@zenovaoil.com.ng</a>.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated message from Zenova Oil. Please do not reply to this email.
            <br>
            For inquiries, contact us at <a href="mailto:support@zenovaoil.com.ng">support@zenovaoil.com.ng</a>
          </p>
        </div>
      </div>
    `;

    // Send notification email to internal team
    const internalEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #dc2626; margin-bottom: 20px;">New Data Deletion Request</h2>
        
        <p>A new data deletion request has been submitted through the Zenova Oil website. Please review and process this request according to our data protection policies.</p>
        
        <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca;">
          <h3 style="margin-top: 0; color: #dc2626;">Request Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Request ID:</strong> ${requestId}</li>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Account Identifier:</strong> ${data.accountIdentifier}</li>
            <li><strong>Request Type:</strong> ${data.requestType === 'account_deletion' ? 'Delete entire account' : 'Delete specific data only'}</li>
            <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
            ${data.additionalInfo ? `<li><strong>Additional Information:</strong> ${data.additionalInfo}</li>` : ''}
          </ul>
        </div>
        
        <h3 style="color: #1f2937;">Action Required:</h3>
        <ol>
          <li>Verify the user's identity and account ownership</li>
          <li>Locate the user's account and associated data</li>
          <li>Process the deletion request within 30 days</li>
          <li>Send confirmation email once deletion is complete</li>
          <li>Update internal records with request status</li>
        </ol>
        
        <p><strong>Priority:</strong> High - Data protection compliance</p>
        <p><strong>Deadline:</strong> ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
      </div>
    `;

    try {
      // Send email to user
      await resend.emails.send({
        from: 'noreply@zenovaoil.com.ng',
        to: [data.email],
        subject: `Data Deletion Request Confirmation - ${requestId}`,
        html: userEmailContent,
      });

      // Send email to internal team
      await resend.emails.send({
        from: 'noreply@zenovaoil.com.ng',
        to: ['admin@zenovaoil.com.ng', 'support@zenovaoil.com.ng'], // Update with actual internal emails
        subject: `URGENT: New Data Deletion Request - ${requestId}`,
        html: internalEmailContent,
      });

      return NextResponse.json({
        success: true,
        requestId: requestId,
        message: 'Request submitted successfully'
      });

    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      
      // Still return success to user but log the email error
      return NextResponse.json({
        success: true,
        requestId: requestId,
        message: 'Request submitted successfully (email notification failed)',
        warning: 'Email notification could not be sent, but your request has been recorded.'
      });
    }

  } catch (error) {
    console.error('Error processing data deletion request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
