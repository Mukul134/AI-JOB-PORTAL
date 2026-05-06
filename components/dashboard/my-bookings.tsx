"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Briefcase, Clock } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

interface Booking {
  id: string
  job_title: string
  employer_name: string
  start_date: string
  end_date: string
  rate: number
  rate_type: string
  status: string
  total_earned: number
  hours_worked: number
}

const DEMO_BOOKINGS: Booking[] = [
  {
    id: "demo-1",
    job_title: "E-commerce Website Development",
    employer_name: "Tech Solutions Ltd.",
    start_date: "2024-01-15",
    end_date: "2024-02-28",
    rate: 50000,
    rate_type: "fixed",
    status: "active",
    total_earned: 35000,
    hours_worked: 120,
  },
  {
    id: "demo-2",
    job_title: "Mobile App UI/UX Design",
    employer_name: "StartupCo",
    start_date: "2024-02-01",
    end_date: "2024-02-15",
    rate: 1500,
    rate_type: "hourly",
    status: "active",
    total_earned: 45000,
    hours_worked: 30,
  },
  {
    id: "demo-3",
    job_title: "Content Writing for Blog",
    employer_name: "Digital Marketing Agency",
    start_date: "2023-12-10",
    end_date: "2024-01-10",
    rate: 25000,
    rate_type: "fixed",
    status: "completed",
    total_earned: 25000,
    hours_worked: 40,
  },
]

export function MyBookings() {
  const { user } = useAuth()
  const [bookings] = useState<Booking[]>(DEMO_BOOKINGS)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "paused":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
        <p className="text-muted-foreground">Track your active and completed work contracts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Bookings</p>
                <p className="text-3xl font-bold text-foreground">
                  {bookings.filter((b) => b.status === "active").length}
                </p>
              </div>
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Earned</p>
                <p className="text-3xl font-bold text-foreground">
                  ₹{bookings.reduce((sum, b) => sum + b.total_earned, 0).toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Hours Worked</p>
                <p className="text-3xl font-bold text-foreground">
                  {bookings.reduce((sum, b) => sum + b.hours_worked, 0)}h
                </p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bookings List */}
      {bookings.length === 0 ? (
        <Card>
          <CardContent className="p-12">
            <div className="text-center">
              <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">No bookings yet</p>
              <p className="text-sm text-muted-foreground">Apply to jobs and get hired to see your bookings here</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card key={booking.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{booking.job_title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{booking.employer_name}</p>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Rate</p>
                    <p className="text-lg font-semibold text-foreground">
                      ₹{booking.rate.toLocaleString()}
                      {booking.rate_type === "hourly" ? "/hr" : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Earned</p>
                    <p className="text-lg font-semibold text-green-600">₹{booking.total_earned.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Hours</p>
                    <p className="text-lg font-semibold text-foreground">{booking.hours_worked}h</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Duration</p>
                    <p className="text-sm font-medium text-foreground">
                      {new Date(booking.start_date).toLocaleDateString("en-IN", { month: "short", day: "numeric" })} -{" "}
                      {new Date(booking.end_date).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
                    </p>
                  </div>
                </div>

                {booking.status === "active" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Schedule
                    </Button>
                    <Button size="sm" variant="outline">
                      Message Client
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
