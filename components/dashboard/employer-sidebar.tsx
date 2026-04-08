"use client"

import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { DEMO_EMPLOYER } from "@/lib/demo-data"
import { Home, PlusCircle, Briefcase, Users, Search, Wallet } from "lucide-react"

interface EmployerSidebarProps {
  activeTab: "overview" | "post-job" | "my-jobs" | "applicant-tracking" | "wallet"
  setActiveTab: (tab: "overview" | "post-job" | "my-jobs" | "applicant-tracking" | "wallet") => void
  onSignOut: () => void
}

export function EmployerSidebar({ activeTab, setActiveTab, onSignOut }: EmployerSidebarProps) {
  const { user } = useAuth()
  const displayUser = user || DEMO_EMPLOYER

  return (
    <div className="w-64 bg-card border-r border-border p-6 flex flex-col h-screen sticky top-0">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary"></div>
        <span className="text-xl font-semibold text-foreground">SkillConnect</span>
      </Link>

      <div className="mb-8 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">Company Account</p>
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
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("post-job")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "post-job" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <PlusCircle className="h-4 w-4" />
          Post a Job
        </button>
        <button
          onClick={() => setActiveTab("my-jobs")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "my-jobs" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Briefcase className="h-4 w-4" />
          My Jobs
        </button>
        <button
          onClick={() => setActiveTab("applicant-tracking")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "applicant-tracking" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Users className="h-4 w-4" />
          Applicants
        </button>
        <button
          onClick={() => setActiveTab("wallet")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "wallet" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Wallet className="h-4 w-4" />
          Wallet
        </button>
        <Link
          href="/find-talent"
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted text-foreground transition flex items-center gap-2"
        >
          <Search className="h-4 w-4" />
          Find Talent
        </Link>
      </nav>

      <button
        onClick={async () => {
          console.log("[v0] Employer sidebar sign out clicked")
          await onSignOut()
        }}
        className="w-full px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
      >
        Sign Out
      </button>
    </div>
  )
}
