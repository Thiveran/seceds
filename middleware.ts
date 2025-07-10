import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log the full request URL to the console
  console.log('Request URL:', request.url);

  // Detect visitor's country via Vercel's geo property
  const country = request.geo?.country || 'unknown';
  console.log('Visitor Country:', country);

  // Redirect users from India to a custom page
  if (country === 'IN') {
    return NextResponse.redirect(new URL('/india-page', request.url));
  }

  // Allow all other requests to continue as normal
  return NextResponse.next();
}

// Apply this middleware only to specific paths
export const config = {
  matcher: ['/'], // You can add more paths like ['/about', '/contact']
};
