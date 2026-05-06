"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function LoginForm() {
  const router = useRouter()
  const { signIn, isLoading, user } = useAuth()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await signIn(formData.email, formData.password)
    } catch (err: any) {
      console.error("[v0] Login error:", err)
      setError(err.message || "Invalid email or password. Please check your credentials and try again.")
    }
  }

  const fillDemoCredentials = (role: "admin" | "employer" | "worker") => {
    const credentials: Record<string, { email: string; password: string }> = {
      admin: { email: "admin@example.com", password: "admin123" },
      employer: { email: "employer@example.com", password: "employer123" },
      worker: { email: "worker@example.com", password: "worker123" },
    }
    const creds = credentials[role]
    setFormData(creds)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">{error}</div>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase">Demo Credentials</p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full text-sm" onClick={() => fillDemoCredentials("admin")}>
              Admin Demo
            </Button>
            <Button variant="outline" className="w-full text-sm" onClick={() => fillDemoCredentials("employer")}>
              Employer Demo
            </Button>
            <Button variant="outline" className="w-full text-sm" onClick={() => fillDemoCredentials("worker")}>
              Job Seeker Demo
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary hover:underline font-semibold">
            Create one
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
