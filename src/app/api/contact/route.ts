import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and work email are required.' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName || ''}`.trim();
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    console.log(`[New School Inquiry Received] ${fullName} (${email}) at ${timestamp}`);
    console.log(`Message: ${message || '(No message provided)'}`);

    // If Resend API Key is configured in environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Curioso Inquiries <notifications@curioso.school>',
        to: ['jeetesh@curioso.school'],
        replyTo: email,
        subject: `🚨 New School Partnership Inquiry: ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; rounded: 12px;">
            <h2 style="color: #E84118; margin-bottom: 8px;">New School Inquiry</h2>
            <p style="color: #666; font-size: 13px; margin-top: 0;">Received on ${timestamp} (IST)</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.5; color: #333;">
              ${message ? message.replace(/\n/g, '<br/>') : '<em>No message provided.</em>'}
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">This inquiry was submitted via the contact form on <a href="https://www.curioso.school">curioso.school</a>.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try scheduling a call directly.' },
      { status: 500 }
    );
  }
}
