import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  // preventing caching by adding NextRequest
  return NextResponse.json([
    { id: 1, name: 'Hom' },
    { id: 2, name: 'Sash' },
  ]);
}
