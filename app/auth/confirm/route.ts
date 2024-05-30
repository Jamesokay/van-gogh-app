import { createClient } from '@/app/utils/supabase/server'
import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')

  if (token_hash && type) {
    console.log("doing stuff")
    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    console.error(error)
    if (!error) {
      console.log("hello")
      console.log(redirectTo)
      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }
  }
  console.log("no token_hash etc")

  // return the user to an error page with some instructions
  // To-do: error page
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}