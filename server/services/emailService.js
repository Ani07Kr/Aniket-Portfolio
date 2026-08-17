const nodemailer = require('nodemailer');

/**
 * Creates and configures the Nodemailer transporter.
 * Supports standard Gmail SMTP or custom SMTP relays.
 */
const getTransporter = () => {
  const rawUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const rawPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

  if (!rawUser || !rawPass || rawPass.trim() === '') {
    return null;
  }

  const user = rawUser.trim();
  const pass = rawPass.replace(/\s+/g, '');

  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass },
    });
  }

  // Default Gmail Transport
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
};

/**
 * Sends a notification email to Aniket when someone submits the contact form.
 *
 * @param {Object} messageData - The submitted message details
 * @param {string} messageData.name - Sender name
 * @param {string} messageData.email - Sender email
 * @param {string} messageData.subject - Subject line
 * @param {string} messageData.message - Message body
 * @param {string} messageData.senderType - Role (Recruiter, Hiring Manager, etc.)
 */
const sendContactNotificationEmail = async ({ name, email, subject, message, senderType }) => {
  const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'aniket07kr2000@gmail.com';
  const transporter = getTransporter();

  if (!transporter) {
    console.log(`\n📬 [EMAIL NOTIFICATION PREVIEW]`);
    console.log(`To: ${recipientEmail}`);
    console.log(`From: "${name} (${senderType})" <${email}>`);
    console.log(`Subject: [Portfolio Contact] ${subject || 'New Inquiry'}`);
    console.log(`Message:\n${message}`);
    console.log(`💡 Note: To deliver live emails directly to your Gmail inbox, add SMTP_USER and SMTP_PASS (Gmail App Password) in your server/.env file.\n`);
    return { delivered: false, reason: 'SMTP credentials not configured in .env' };
  }

  const senderUser = process.env.SMTP_USER || process.env.GMAIL_USER;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
          .header { background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); padding: 24px 32px; color: #ffffff; }
          .header h2 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; }
          .header p { margin: 0; font-size: 13px; opacity: 0.9; }
          .body { padding: 32px; }
          .badge { display: inline-block; padding: 4px 12px; background: #eff6ff; color: #3b82f6; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid #bfdbfe; margin-bottom: 16px; }
          .meta-box { background: #f8fafc; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; border: 1px solid #e2e8f0; font-size: 14px; }
          .meta-row { display: flex; margin-bottom: 8px; }
          .meta-row:last-child { margin-bottom: 0; }
          .meta-label { width: 90px; color: #64748b; font-weight: 600; }
          .meta-value { color: #0f172a; font-weight: 500; }
          .message-box { background: #ffffff; border-left: 4px solid #4f46e5; padding: 16px 20px; border-radius: 0 12px 12px 0; background-color: #f1f5f9; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
          .cta-wrap { margin-top: 28px; text-align: center; }
          .cta-btn { display: inline-block; background: #4f46e5; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 10px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25); }
          .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; text-align: center; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📬 New Portfolio Inquiry</h2>
            <p>You received a new message from your portfolio website</p>
          </div>
          <div class="body">
            <span class="badge">${senderType || 'Recruiter'}</span>
            
            <div class="meta-box">
              <div class="meta-row">
                <span class="meta-label">From:</span>
                <span class="meta-value"><strong>${name}</strong> (${email})</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Subject:</span>
                <span class="meta-value">${subject || 'Portfolio Inquiry'}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Date:</span>
                <span class="meta-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
              </div>
            </div>

            <div style="font-weight: 600; font-size: 13px; color: #475569; margin-bottom: 8px;">Message:</div>
            <div class="message-box">${message}</div>

            <div class="cta-wrap">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" class="cta-btn">
                ✉️ Reply to ${name}
              </a>
            </div>
          </div>
          <div class="footer">
            Sent automatically by Aniket Kumar's Portfolio Server
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: `"Aniket Portfolio Alert" <${senderUser}>`,
    to: recipientEmail,
    replyTo: `"${name}" <${email}>`,
    subject: `⚡ New Message from ${name} [${senderType || 'Inquiry'}]: ${subject || 'Portfolio Contact'}`,
    text: `New message from ${name} (${email}) [${senderType}]:\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Notification email sent to ${recipientEmail} (ID: ${info.messageId})`);
    return { delivered: true, messageId: info.messageId };
  } catch (err) {
    console.error('❌ Failed to send notification email:', err.message);
    return { delivered: false, error: err.message };
  }
};

module.exports = { sendContactNotificationEmail };
