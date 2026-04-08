"use client"

import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { DEMO_ADMIN } from "@/lib/demo-data"
import { Home, Users, Briefcase, BarChart3 } from "lucide-react"

interface AdminSidebarProps {
  activeTab: "overview" | "users" | "jobs" | "reports"
  setActiveTab: (tab: "overview" | "users" | "jobs" | "reports") => void
  onSignOut: () => void
}

export function AdminSidebar({ activeTab, setActiveTab, onSignOut }: AdminSidebarProps) {
  const { user } = useAuth()
  const displayUser = user || DEMO_ADMIN

  return (
    <div className="w-64 bg-card border-r border-border p-6 flex flex-col h-screen sticky top-0">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary"></div>
        <span className="text-xl font-semibold text-foreground">SkillConnect</span>
      </Link>

      <div className="mb-8 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">Admin Account</p>
        <p className="font-semibold text-foreground">{displayUser.fullName}</p>
        <p className="text-xs text-muted-foreground">{displayUser.email}</p>
      </div>

      <nav className="space-y-2 flex-1">
        <button
          onClick={() => setActiveTab("overview")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "overview" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Home className="h-4 w-4" />
          Analytics
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "users" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Users className="h-4 w-4" />
          Users Management
        </button>
        <button
          onClick={() => setActiveTab("jobs")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "jobs" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Briefcase className="h-4 w-4" />
          Jobs Management
        </button>
        <button
          onClick={() => setActiveTab("reports")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "reports" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <BarChart3 className="h-4 w-4" />
          Reports
        </button>
      </nav>

      <button
        onClick={async (e) => {
          e.preventDefault()
          console.log("[v0] Admin sidebar sign out clicked")
          await onSignOut()
        }}
        className="w-full px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
      >
        Sign Out
      </button>
    </div>
  )
}
