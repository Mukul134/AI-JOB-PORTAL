"use client"

import { useAuth } from "@/lib/auth-context"
import { Card, CardContent } from "@/components/ui/card"
import { DEMO_STATS } from "@/lib/demo-data"
import { AIJobRecommender } from "@/components/ai/ai-job-recommender"
import { AIProfileAnalyzer } from "@/components/ai/ai-profile-analyzer"

export function DashboardOverview() {
  const { user } = useAuth()

  const stats = [
    {
      label: "Applications",
      value: DEMO_STATS.worker.applications.toString(),
      color: "bg-blue-50 dark:bg-blue-950",
    },
    {
      label: "Proposals Sent",
      value: DEMO_STATS.worker.proposalsSent.toString(),
      color: "bg-green-50 dark:bg-green-950",
    },
    {
      label: "Earnings",
      value: `₹${DEMO_STATS.worker.earnings.toLocaleString()}`,
      color: "bg-purple-50 dark:bg-purple-950",
    },
    {
      label: "Completion Rate",
      value: `${DEMO_STATS.worker.completionRate}%`,
      color: "bg-orange-50 dark:bg-orange-950",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome, {user?.fullName || "Alex"}</h1>
        <p className="text-muted-foreground">Here's what's happening on your profile today</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIJobRecommender />
        <AIProfileAnalyzer />
      </div>
    </div>
  )
}
