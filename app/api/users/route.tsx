import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  // preventing caching by adding NextRequest
  return NextResponse.json([
    { id: 1, name: 'Hom' },
    { id: 2, name: 'Sash' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: 'Name is required', status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
