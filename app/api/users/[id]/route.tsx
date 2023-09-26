import { NextRequest, NextResponse } from 'next/server';

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch data from a db
  //If not found, return 404 error
  //Else return data
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Sam' });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate the request body
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  // If invalid , return 400
  // Fetch the user with the given id
  // If doesn't exist, return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  // Return the updated user
  // Update the user
  return NextResponse.json({ id: 1, name: body.name });
}
