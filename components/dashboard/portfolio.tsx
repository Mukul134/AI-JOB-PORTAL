"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DEMO_WORKS } from "@/lib/demo-data"

export function Portfolio() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Portfolio</h1>
        <p className="text-muted-foreground">Showcase of completed projects and client work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEMO_WORKS.map((work) => (
          <Card key={work.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-muted">
              <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-full object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{work.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{work.description}</p>

              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground">Completed</p>
                  <p className="text-sm font-semibold text-foreground">{work.completedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Earnings</p>
                  <p className="text-sm font-semibold text-primary">₹{work.earnings.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
