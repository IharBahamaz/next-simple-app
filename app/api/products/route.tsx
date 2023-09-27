import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export function GET(request: NextRequest) {
  // preventing caching by adding NextRequest
  return NextResponse.json([
    { id: 1, name: 'iphone', price: 2.5 },
    { id: 2, name: 'glove', price: 3.5 },
    { id: 3, name: 'hammer', price: 99.99 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) return NextResponse.json(validation.error.errors);
  return NextResponse.json(
    { id: 10, name: body.name, price: body.price },
    { status: 201 }
  );
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {}
