import { type NextRequest, NextResponse } from "next/server"

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Check if user has a valid session token
  const authToken = request.cookies.get("auth_token")
  const isAuthenticated = !!authToken?.value

  console.log("[v0] Middleware check for path:", request.nextUrl.pathname, "Authenticated:", isAuthenticated)

  // Protected routes
  const protectedPaths = ["/dashboard", "/admin"]
  const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))

  // Redirect to login if accessing protected route without auth
  if (isProtectedPath && !isAuthenticated) {
    console.log("[v0] Redirecting to login for protected route:", request.nextUrl.pathname)
    const redirectUrl = new URL("/login", request.url)
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Redirect authenticated users away from login/signup
  if ((request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") && isAuthenticated) {
    console.log("[v0] Redirecting authenticated user away from auth pages")
    return NextResponse.redirect(new URL("/", request.url))
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
