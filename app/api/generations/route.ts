// Create a generation of images

import { NextResponse } from 'next/server';

const url = 'https://cloud.leonardo.ai/api/rest/v1/generations';
const token = process.env.LEONARDO_API_TOKEN;

export async function POST(request: Request) {
  const data = await request.json();
  const apiResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return forwardResponse(apiResponse);
}

// Helper function to forward the response from the API
async function forwardResponse(apiResponse: Response) {
  const data = await apiResponse.json();
  const status = apiResponse.ok ? 200 : apiResponse.status;
  return new NextResponse(JSON.stringify(data), {
    status: status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
