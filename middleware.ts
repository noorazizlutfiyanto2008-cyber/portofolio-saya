import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  // KITA TULIS LANGSUNG DI SINI BIAR NGGAK ERROR LAGI
  const supabaseUrl = "https://ydhfpommjtfgtvtayabv.supabase.co";
  const supabaseAnonKey = "sb_publishable_YTEtAmauuynmFvcgqUP7LA_YNyxsqvY";

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Cek user yang login
  const { data: { user } } = await supabase.auth.getUser()

  // Kalau user belum login DAN mencoba buka halaman admin
  if (!user && request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url) // Tendang paksa!
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin/dashboard/:path*'], // Hanya jalankan satpam di halaman ini
}