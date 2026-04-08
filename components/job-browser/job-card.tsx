"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

interface JobCardProps {
  job: {
    id: string
    title: string
    category: string
    description: string
    budget: number
    duration: string
    experienceLevel: string
    employer: string
    applications: number
    postedDate: string
  }
}

export function JobCard({ job }: JobCardProps) {
  const { isAuthenticated } = useAuth()

  const durationLabels = {
    "short-term": "Short-term",
    "medium-term": "Medium-term",
    "long-term": "Long-term",
  }

  const experienceLabelMap = {
    entry: "Entry-level",
    intermediate: "Intermediate",
    expert: "Expert",
  }

  return (
    <Card className="hover:shadow-lg hover:border-primary/50 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">by {job.employer}</p>
          </div>
          <p className="text-2xl font-bold text-primary whitespace-nowrap">₹{job.budget.toLocaleString("en-IN")}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{job.category}</span>
          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
            {durationLabels[job.duration as keyof typeof durationLabels]}
          </span>
          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
            {experienceLabelMap[job.experienceLevel as keyof typeof experienceLabelMap]}
          </span>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <p>{job.applications} applications</p>
            <p>Posted {job.postedDate}</p>
          </div>
          {isAuthenticated ? (
            <Button size="sm">View Details</Button>
          ) : (
            <Button size="sm" asChild>
              <Link href="/signup">Sign In to Apply</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
