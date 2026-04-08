"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Search } from "lucide-react"
import { demoWorkerData } from "@/lib/demo-data"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Messages() {
  const messages = demoWorkerData.messages

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Messages
        </h2>
        <p className="text-muted-foreground">Communicate with clients and employers</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search messages..." className="pl-9" />
      </div>

      <div className="grid gap-3">
        {messages.map((message) => (
          <Card key={message.id} className={message.unread ? "border-primary/50" : ""}>
            <CardContent className="p-4">
              <div className="flex gap-4 items-start">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    {message.sender.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{message.sender}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                      {message.unread && (
                        <Badge variant="default" className="h-5">
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{message.subject}</p>
                  <p className="text-sm text-muted-foreground/80 line-clamp-2">{message.preview}</p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
