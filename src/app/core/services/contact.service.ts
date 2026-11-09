import { Injectable } from '@angular/core';

/**
 * Google Apps Script web app URL (ends in /exec).
 * Each submission is appended to the "Portfolio Contact Messages" Google Sheet
 * and a notification email is sent. Paste the deployment URL here.
 */
export const CONTACT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwEcLgAB7ORgri5xm8kfMhKRV6RkrV4Tz16Bne904y4VVNyYUcGdmnwcNFynqKXNpyI/exec';

/** Must match LIMITS in the Apps Script */
export const CONTACT_LIMITS = { name: 100, email: 254, message: 3000 } as const;

/** Thrown when the Apps Script rejects a message because of rate limiting */
export class RateLimitedError extends Error {}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  /** Honeypot field: real visitors leave it empty, bots tend to fill it */
  website: string;
  page: string;
}

/**
 * Contact Service
 * Sends contact-form messages to the Apps Script endpoint
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  async send(data: ContactMessage): Promise<void> {
    if (!CONTACT_ENDPOINT) {
      throw new Error('CONTACT_ENDPOINT is not configured');
    }

    // text/plain keeps this a "simple" CORS request (no preflight),
    // which Apps Script web apps cannot answer.
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });

    const result = await response.json().catch(() => null);
    if (result?.error === 'rate_limited') {
      throw new RateLimitedError('rate_limited');
    }
    if (!response.ok || result?.ok !== true) {
      throw new Error(result?.error ?? `Request failed (${response.status})`);
    }
  }
}
