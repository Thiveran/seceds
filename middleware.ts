import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Log the request URL
  console.log('Request URL:', request.url);

  // Detect the country of the visitor
  const country = request.geo?.country || 'unknown';
  console.log('Visitor Country:', country);

  // Redirect visitors from India
  if (country === 'IN') {
    return NextResponse.redirect(new URL('/india-page', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Applies middleware to homepage (extend with more routes as needed)
};
