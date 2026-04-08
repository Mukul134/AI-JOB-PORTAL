"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { UserRole } from "@/lib/auth-context"

interface RoleSelectorProps {
  onSelectRole: (role: UserRole) => void
}

export function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  const roles: { id: UserRole; title: string; description: string; icon: string }[] = [
    {
      id: "job_seeker",
      title: "I'm Looking for Work",
      description: "Find projects and build your career as a freelancer or service provider",
      icon: "👤",
    },
    {
      id: "employer",
      title: "I'm Looking to Hire",
      description: "Post jobs and hire talented professionals to complete your projects",
      icon: "🏢",
    },
    {
      id: "admin",
      title: "Admin Access",
      description: "Manage the platform, users, and monitor system analytics",
      icon: "⚙️",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-background">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Join SkillHub</h1>
          <p className="text-muted-foreground">What describes you best?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {roles.map((role) => (
            <Card
              key={role.id}
              className="cursor-pointer hover:border-primary hover:shadow-lg transition-all"
              onClick={() => onSelectRole(role.id)}
            >
              <CardHeader>
                <div className="text-4xl mb-3">{role.icon}</div>
                <CardTitle className="text-lg">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{role.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
