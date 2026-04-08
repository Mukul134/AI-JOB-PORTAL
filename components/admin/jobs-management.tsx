"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { INDIA_CATEGORIES } from "@/lib/india-data"

interface Job {
  id: string
  title: string
  category: string
  budget: number
  status: "active" | "completed" | "cancelled"
  postedBy: string
  applications: number
}

export function JobsManagement() {
  const [jobs] = useState<Job[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const categoryNames = INDIA_CATEGORIES.map((cat) => cat.name)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Jobs Management</h1>
        <p className="text-muted-foreground">Monitor and manage all job postings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Job Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search by title or category"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-64 px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Categories</option>
              {categoryNames.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
            <select className="px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {jobs.length === 0 ? (
        <Card>
          <CardContent className="p-12">
            <div className="text-center">
              <p className="text-muted-foreground">No jobs found</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Title</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Budget</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Posted By</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Applications</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-border hover:bg-muted/50 transition">
                  <td className="py-3 px-4 text-foreground font-medium">{job.title}</td>
                  <td className="py-3 px-4 text-muted-foreground">{job.category}</td>
                  <td className="py-3 px-4 text-foreground">₹{job.budget.toLocaleString("en-IN")}</td>
                  <td className="py-3 px-4 text-muted-foreground">{job.postedBy}</td>
                  <td className="py-3 px-4 text-foreground">{job.applications}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        job.status === "active"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : job.status === "completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">
                      {job.status === "active" ? "Cancel" : "Restore"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
