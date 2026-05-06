"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Bar, BarChart, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface Stats {
  totalUsers: number
  totalJobs: number
  completedProjects: number
  platformRevenue: number
  jobSeekers: number
  employers: number
  admins: number
}

export function AdminOverview() {
  const stats: Stats = {
    totalUsers: 156,
    totalJobs: 42,
    completedProjects: 28,
    platformRevenue: 125000,
    jobSeekers: 98,
    employers: 45,
    admins: 3,
  }

  const metrics = [
    { label: "Total Users", value: stats.totalUsers.toString(), change: "+12%" },
    { label: "Total Jobs", value: stats.totalJobs.toString(), change: "+8%" },
    { label: "Completed Projects", value: stats.completedProjects.toString(), change: "+15%" },
    { label: "Platform Revenue", value: `$${stats.platformRevenue.toLocaleString()}`, change: "+5%" },
  ]

  const userGrowthData = [
    { name: "Jan", users: Math.max(Math.floor(stats.totalUsers * 0.5), 5) },
    { name: "Feb", users: Math.max(Math.floor(stats.totalUsers * 0.6), 8) },
    { name: "Mar", users: Math.max(Math.floor(stats.totalUsers * 0.7), 12) },
    { name: "Apr", users: Math.max(Math.floor(stats.totalUsers * 0.8), 15) },
    { name: "May", users: Math.max(Math.floor(stats.totalUsers * 0.9), 18) },
    { name: "Jun", users: Math.max(stats.totalUsers, 20) },
  ]

  const jobsData = [
    { name: "Jan", jobs: Math.max(Math.floor(stats.totalJobs * 0.4), 3) },
    { name: "Feb", jobs: Math.max(Math.floor(stats.totalJobs * 0.5), 5) },
    { name: "Mar", jobs: Math.max(Math.floor(stats.totalJobs * 0.6), 8) },
    { name: "Apr", jobs: Math.max(Math.floor(stats.totalJobs * 0.75), 10) },
    { name: "May", jobs: Math.max(Math.floor(stats.totalJobs * 0.85), 12) },
    { name: "Jun", jobs: Math.max(stats.totalJobs, 15) },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Platform Analytics</h1>
        <p className="text-muted-foreground">Monitor platform performance and key metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-green-600">{metric.change}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                users: {
                  label: "Users",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
                  <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Users"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Jobs Posted</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                jobs: {
                  label: "Jobs",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={jobsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
                  <YAxis stroke="hsl(var(--muted-foreground))" style={{ fontSize: "12px" }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="jobs" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Jobs" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Job Seekers</p>
                <p className="text-sm text-muted-foreground">{stats.jobSeekers}</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(stats.jobSeekers / stats.totalUsers) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Employers</p>
                <p className="text-sm text-muted-foreground">{stats.employers}</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(stats.employers / stats.totalUsers) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Admins</p>
                <p className="text-sm text-muted-foreground">{stats.admins}</p>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${(stats.admins / stats.totalUsers) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
