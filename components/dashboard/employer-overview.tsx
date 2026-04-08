"use client"

import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DEMO_STATS } from "@/lib/demo-data"
import { AICandidateMatcher } from "@/components/ai/ai-candidate-matcher"

export function EmployerOverview() {
  const { user } = useAuth()

  const stats = [
    { label: "Active Jobs", value: DEMO_STATS.employer.activeJobs.toString() },
    { label: "Total Applications", value: DEMO_STATS.employer.totalApplications.toString() },
    { label: "Hired Workers", value: DEMO_STATS.employer.hiredWorkers.toString() },
    { label: "Total Spent", value: `$${DEMO_STATS.employer.totalSpent.toLocaleString()}` },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {user?.fullName || "Tech Solutions Inc."}</h1>
        <p className="text-muted-foreground">Manage your jobs, find talent, and grow your team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <AICandidateMatcher />

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">Post your first job and start finding qualified talent</p>
          <Button asChild>
            <Link href="#" onClick={(e) => e.preventDefault()}>
              Post a Job Now
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {DEMO_STATS.employer.recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                <div className="text-xs text-muted-foreground min-w-fit">{activity.date}</div>
                <div className="text-sm text-foreground">{activity.action}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
