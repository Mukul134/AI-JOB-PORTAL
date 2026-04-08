"use client"

import { LoginForm } from "@/components/auth/login-form"
import { Navbar } from "@/components/navbar"

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>
    </>
  )
}
