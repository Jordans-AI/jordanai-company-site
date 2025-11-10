import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  console.log('========================================');
  console.log('📧 Contact form submission received');
  console.log('========================================');

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    console.log('📋 Form Data:', { name, email, phone, message: message ? 'provided' : 'empty' });

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not configured!');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('✅ API Key found:', process.env.RESEND_API_KEY.substring(0, 10) + '...');

    // Validation
    if (!name || !email) {
      console.log('❌ Validation failed: Missing name or email');
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'shaylee@jordan-ai.com';

    console.log('📤 Sending email...');
    console.log('   From:', fromEmail);
    console.log('   To:', toEmail);

    // Send email using Resend
    console.log('🔧 Calling Resend API...');
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'shaylee@jordan-ai.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border: 1px solid #e0e0e0;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 0.5px;
              }
              .value {
                color: #555;
                font-size: 16px;
              }
              .footer {
                background: #1a1a1a;
                color: #999;
                padding: 20px 30px;
                font-size: 12px;
                border-radius: 0 0 8px 8px;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Jordan-AI Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #1a1a1a;">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #1a1a1a;">${phone}</a></div>
              </div>
              ` : ''}
              ${message ? `
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              Sent from Jordan-AI contact form
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${message ? `\nMessage:\n${message}` : ''}
      `,
    });

    console.log('📊 Resend API Response:', JSON.stringify(result, null, 2));

    if (result.error) {
      console.error('❌ Resend returned an error:', result.error);
      throw new Error(`Resend error: ${JSON.stringify(result.error)}`);
    }

    console.log('✅ Email sent successfully!');
    console.log('   Email ID:', result.data?.id);
    console.log('========================================\n');

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', id: result.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('========================================');
    console.error('❌ ERROR sending email:');
    console.error('Error details:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    console.error('========================================\n');

    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
