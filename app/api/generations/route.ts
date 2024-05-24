import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_API_KEY = process.env.VAN_GOGH_WEBHOOK_API_KEY;

export const POST = async (req: NextRequest) => {
  try {
    console.log('Request received');

    // Print all headers for debugging
    req.headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Check for the Authorization header
    const authorizationHeader = req.headers.get('authorization');
    console.log('Authorization header received:', authorizationHeader);

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      console.log('Unauthorized request: Missing or invalid Authorization header');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Extract the token from the Authorization header
    const apiKey = authorizationHeader.slice(7); // Remove "Bearer " prefix
    console.log('API key extracted:', apiKey);

    // Validate the API key
    if (apiKey !== WEBHOOK_API_KEY) {
      console.log('Unauthorized request: Invalid API key');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Process the request if the API key is valid
    const data = await req.json();
    console.log('Webhook received data:', data);

    return NextResponse.json(
      { message: 'Webhook received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Error processing webhook' },
      { status: 500 }
    );
  }
};
