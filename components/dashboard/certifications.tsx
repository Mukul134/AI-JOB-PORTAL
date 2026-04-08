"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Plus, ExternalLink } from "lucide-react"
import { demoWorkerData } from "@/lib/demo-data"

export function Certifications() {
  const certifications = demoWorkerData.certifications

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Certifications
          </h2>
          <p className="text-muted-foreground">Showcase your professional credentials</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Certification
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                {cert.verified && (
                  <Badge variant="default" className="bg-green-500">
                    Verified
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Issued:</span>
                  <span className="font-medium">{cert.issueDate}</span>
                </div>
                {cert.expiryDate && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expires:</span>
                    <span className="font-medium">{cert.expiryDate}</span>
                  </div>
                )}
                {cert.credentialId && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ID:</span>
                    <span className="font-mono text-xs">{cert.credentialId}</span>
                  </div>
                )}
                <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
