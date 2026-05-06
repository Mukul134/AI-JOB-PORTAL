"use client"

import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { WorkerDashboard } from "@/components/dashboard/worker-dashboard"

export default function WorkerDashboardPage() {
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (isAuthenticated && user?.role !== "job_seeker") {
      console.log("[v0] User role:", user?.role, "Expected: job_seeker")
      router.push("/")
    }
  }, [isAuthenticated, user, router, mounted])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Loading...</h2>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return <WorkerDashboard />
}
