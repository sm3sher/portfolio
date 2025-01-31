import { NextRequest, NextResponse } from 'next/server';
import { redirect } from '@/i18n/routing';
import supabaseClient from '@/app/lib/supabase/client';

type Params = {
  params: Promise<{ locale: string }>;
};

export async function GET(request: NextRequest, { params }: Params) {
  const { locale } = await params;
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json(
      { success: false, error: 'Invalid token' },
      { status: 400 },
    );
  }

  const { data, error } = await supabaseClient()
    .from('contacts')
    .update({ verified: true })
    .match({ verification_token: token })
    .select()
    .single();

  if (error || !data) {
    return NextResponse.json(
      { success: false, error: 'Verification failed' },
      { status: 500 },
    );
  }

  return redirect({ href: '/thank-you', locale });
}
