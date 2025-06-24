import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for contact requests (in production, use a database)
const contactRequests: Array<{
  id: string;
  name: string;
  phone: string;
  message: string;
  timestamp: Date;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Create new contact request
    const newRequest = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone.trim(),
      message: message?.trim() || '',
      timestamp: new Date(),
    };

    // Store the request (in production, save to database)
    contactRequests.push(newRequest);

    // Log the request (in production, send email notification)
    console.log('New contact request:', newRequest);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact request submitted successfully',
        id: newRequest.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all contact requests (in production, add authentication)
    return NextResponse.json({
      success: true,
      data: contactRequests.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    });
  } catch (error) {
    console.error('Error fetching contact requests:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 