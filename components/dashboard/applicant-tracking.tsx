"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Eye, MessageSquare, CheckCircle, XCircle, Clock } from "lucide-react"
import { demoEmployerData } from "@/lib/demo-data"

export function ApplicantTracking() {
  const applications = demoEmployerData.applicantTracking

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reviewing":
        return "bg-blue-500"
      case "interviewed":
        return "bg-purple-500"
      case "shortlisted":
        return "bg-green-500"
      case "rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "reviewing":
        return <Clock className="h-4 w-4" />
      case "shortlisted":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Applicant Tracking
        </h2>
        <p className="text-muted-foreground">Manage and track all job applications</p>
      </div>

      <div className="grid gap-4">
        {applications.map((app) => (
          <Card key={app.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{app.jobTitle}</CardTitle>
                <Badge variant="outline">{app.applicantCount} Applicants</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {app.recentApplicants.map((applicant, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                          {applicant.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{applicant.name}</p>
                        <p className="text-sm text-muted-foreground">{applicant.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(applicant.status)}>
                        {getStatusIcon(applicant.status)}
                        <span className="ml-1 capitalize">{applicant.status}</span>
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
