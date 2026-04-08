import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Heart, Zap, TrendingUp } from "lucide-react"

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Bangalore",
      type: "Full-time",
      description: "Build scalable features for our platform using Next.js, React, and Node.js.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Mumbai",
      type: "Full-time",
      description: "Lead product strategy and execution for our job matching platform.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences for workers and employers.",
    },
    {
      title: "Customer Success Manager",
      department: "Operations",
      location: "Delhi",
      type: "Full-time",
      description: "Help our users succeed and grow their businesses on our platform.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Help us build the future of work in India. We're looking for passionate people to join our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Great Culture</CardTitle>
              <CardDescription>Work with passionate people who care about making an impact</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Fast Growth</CardTitle>
              <CardDescription>Join a rapidly growing startup and grow your career</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Ownership</CardTitle>
              <CardDescription>Take ownership of projects and see real impact</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline" className="gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                      <CardDescription>{job.description}</CardDescription>
                    </div>
                    <Button>Apply</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
