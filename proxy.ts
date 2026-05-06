import { type NextRequest, NextResponse } from "next/server"

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Check if user is authenticated via demo auth (stored in a header or client cookie)
  const demoUserCookie = request.cookies.get("demo_user")
  const isAuthenticated = !!demoUserCookie

  // Protected routes
  const protectedPaths = ["/dashboard", "/admin"]
  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  // Redirect to login if accessing protected route without auth
  if (isProtectedPath && !isAuthenticated) {
    const redirectUrl = new URL("/login", request.url)
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect authenticated users away from login/signup
  if ((request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
