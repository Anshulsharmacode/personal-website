import { NextResponse } from 'next/server';
import { ContactFormSchema } from './validation';
import { sendEmail } from './email';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input
    const result = ContactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: result.error.issues 
        },
        { status: 400 }
      );
    }

    // Send email
    await sendEmail(result.data);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}