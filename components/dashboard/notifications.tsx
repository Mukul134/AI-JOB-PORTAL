"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, BriefcaseIcon, MessageSquare, TrendingUp, Award, CheckCircle } from "lucide-react"
import { demoWorkerData } from "@/lib/demo-data"

export function Notifications() {
  const notifications = demoWorkerData.notifications

  const getIcon = (type: string) => {
    switch (type) {
      case "job":
        return <BriefcaseIcon className="h-5 w-5 text-primary" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-accent" />
      case "achievement":
        return <Award className="h-5 w-5 text-secondary" />
      case "update":
        return <TrendingUp className="h-5 w-5 text-primary" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Notifications
        </h2>
        <p className="text-muted-foreground">Stay updated with your latest activities</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          {notifications.filter((n) => !n.read).length} unread notifications
        </p>
        <Button variant="outline" size="sm">
          <CheckCircle className="h-4 w-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <Card key={notification.id} className={notification.read ? "opacity-60" : ""}>
            <CardContent className="p-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1">{getIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{notification.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <Badge variant="default" className="shrink-0">
                        New
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
