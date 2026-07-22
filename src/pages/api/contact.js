// Astro API route (server-rendered) — handles POSTs from the /contact form
// and relays them through Resend to conner@listeraero.com. Fully owned: no
// third party sees submissions except Resend, which just relays the email.
//
// Required environment variables (set in the Cloudflare dashboard for this
// Worker, or in .dev.vars for local `wrangler dev` testing):
//   RESEND_API_KEY    — secret, from resend.com
//   CONTACT_TO_EMAIL  — optional, defaults to conner@listeraero.com
//   CONTACT_FROM_EMAIL — optional, defaults to Resend's shared test sender;
//                        set this to an address on a domain verified in
//                        Resend (e.g. "Lister Aerospace <notify@mail.listeraero.com>")
//                        once that domain is verified.

import { env } from 'cloudflare:workers';

export const prerender = false;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST({ request }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: 'Could not read the submitted form.' }, 400);
  }

  // Honeypot: a field real visitors never see or fill. Bots that fill every
  // field trip it; treat their submission as accepted and drop it silently.
  if (readField(form, 'company_website')) {
    return jsonResponse({ ok: true });
  }

  const name = readField(form, 'name');
  const email = readField(form, 'email');
  const message = readField(form, 'message');
  const company = readField(form, 'company');
  const phone = readField(form, 'phone');
  const projectType = readField(form, 'project_type');

  const fieldErrors = [];
  if (!name) fieldErrors.push({ field: 'name', message: 'Name is required.' });
  if (!email || !EMAIL_PATTERN.test(email)) {
    fieldErrors.push({ field: 'email', message: 'A valid email is required.' });
  }
  if (!message) fieldErrors.push({ field: 'message', message: 'Message is required.' });

  if (fieldErrors.length) {
    return jsonResponse({ ok: false, fieldErrors }, 422);
  }

  const toEmail = env.CONTACT_TO_EMAIL || 'conner@listeraero.com';
  const fromEmail = env.CONTACT_FROM_EMAIL || 'Lister Aerospace Website <onboarding@resend.dev>';

  const bodyLines = [
    `Name: ${name}`,
    company && `Company: ${company}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    projectType && `Project type: ${projectType}`,
    '',
    message,
  ].filter((line) => line !== false && line !== '');

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject: `Quote request from ${name}${company ? ` (${company})` : ''}`,
        text: bodyLines.join('\n'),
      }),
    });
  } catch {
    return jsonResponse({ ok: false, error: 'Could not reach the mail service.' }, 502);
  }

  if (!resendResponse.ok) {
    return jsonResponse({ ok: false, error: 'Delivery failed on our end.' }, 502);
  }

  return jsonResponse({ ok: true });
}

function readField(form, key) {
  return (form.get(key) || '').toString().trim();
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
