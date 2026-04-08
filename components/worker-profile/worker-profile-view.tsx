"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WorkerProfileView() {
  const worker = {
    id: "1",
    name: "Raj Kumar Singh",
    title: "Full-Stack Web Developer",
    avatar: "👨‍💻",
    bio: "Experienced full-stack developer with 5+ years building web applications using React, Node.js, and TypeScript. Based in Bangalore, passionate about clean code and user experience. Specialized in fintech and e-commerce platforms.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "UI/UX Design"],
    hourlyRate: 750,
    completedProjects: 42,
    rating: 4.9,
    reviewCount: 128,
    responseTime: "2 hours",
    memberSince: "2019",
    location: "Bangalore, Karnataka",
    portfolio: [
      {
        title: "E-commerce Platform",
        description: "Full-stack platform for digital products with payment integration",
      },
      { title: "Analytics Dashboard", description: "Real-time analytics with data visualization for SaaS" },
      { title: "Mobile App API", description: "RESTful API for fitness tracking app with user authentication" },
    ],
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl">{worker.avatar}</div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground">{worker.name}</h1>
                <p className="text-lg text-primary font-semibold">{worker.title}</p>
                <p className="text-sm text-muted-foreground mt-1">📍 {worker.location}</p>

                <div className="flex flex-wrap gap-6 my-6">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{worker.rating}</p>
                    <p className="text-sm text-muted-foreground">({worker.reviewCount} reviews)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">
                      ₹{worker.hourlyRate.toLocaleString("en-IN")}/hr
                    </p>
                    <p className="text-sm text-muted-foreground">Hourly Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{worker.completedProjects}</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{worker.responseTime}</p>
                    <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button>Send Message</Button>
                  <Button variant="outline">View Proposals</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{worker.bio}</p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {worker.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {worker.portfolio.map((project, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="text-lg font-semibold text-foreground">{worker.memberSince}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Average Response Time</p>
                <p className="text-lg font-semibold text-foreground">{worker.responseTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
