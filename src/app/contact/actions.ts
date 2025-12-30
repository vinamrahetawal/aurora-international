'use server';

import * as z from 'zod';
import nodemailer from 'nodemailer';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email.' }),
    organization: z.string().optional(),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  });
  
type FormData = z.infer<typeof formSchema>;

function getMissingSmtpEnvNames() {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const;
  return required.filter((name) => !process.env[name]);
}

function buildTransporter() {
  const host = process.env.SMTP_HOST!;
  const port = Number.parseInt(process.env.SMTP_PORT!, 10);
  if (!Number.isFinite(port)) {
    throw new Error('SMTP_PORT must be a valid number');
  }

  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;

  // If SMTP_SECURE is not set, default to common behavior: port 465 => secure
  const secureEnv = process.env.SMTP_SECURE;
  const secure = typeof secureEnv === 'string'
    ? secureEnv.toLowerCase() === 'true'
    : port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function submitContactForm(data: FormData) {
  const parsed = formSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: 'Please check the form fields and try again.' };
  }

  const { name, email, organization, message } = parsed.data;

  const missing = getMissingSmtpEnvNames();
  if (missing.length > 0) {
    console.error('Contact form SMTP is not configured. Missing:', missing);
    return {
      success: false,
      message: 'Email service is not configured yet. Please try again later.',
    };
  }

  const to = process.env.CONTACT_TO ?? 'contact@auroraint.org';
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;

  const subject = `New contact form message from ${name}`;
  const text = [
    'New message received from the Aurora website contact form.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Organization: ${organization || '-'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <p><strong>New message received</strong> from the Aurora website contact form.</p>
    <p>
      <strong>Name:</strong> ${escapeHtml(name)}<br />
      <strong>Email:</strong> ${escapeHtml(email)}<br />
      <strong>Organization:</strong> ${escapeHtml(organization || '-')}
    </p>
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${escapeHtml(message)}</pre>
  `.trim();

  try {
    const transporter = buildTransporter();
    await transporter.sendMail({
      to,
      from,
      subject,
      text,
      html,
      replyTo: email,
    });

    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Contact form email send failed:', error);
    return { success: false, message: 'Failed to send your message. Please try again later.' };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
