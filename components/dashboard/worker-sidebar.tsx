"use client"

import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { DEMO_WORKER } from "@/lib/demo-data"
import { Home, User, FileText, Briefcase, Bell, MessageSquare, Award, Wallet, Calendar } from "lucide-react"

interface WorkerSidebarProps {
  activeTab:
    | "overview"
    | "profile"
    | "applications"
    | "bookings"
    | "portfolio"
    | "notifications"
    | "messages"
    | "certifications"
    | "wallet"
  setActiveTab: (
    tab:
      | "overview"
      | "profile"
      | "applications"
      | "bookings"
      | "portfolio"
      | "notifications"
      | "messages"
      | "certifications"
      | "wallet",
  ) => void
  onSignOut: () => void
}

export function WorkerSidebar({ activeTab, setActiveTab, onSignOut }: WorkerSidebarProps) {
  const { user } = useAuth()
  const displayUser = user || DEMO_WORKER

  return (
    <div className="w-64 bg-card border-r border-border p-6 flex flex-col h-screen sticky top-0">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-primary"></div>
        <span className="text-xl font-semibold text-foreground">SkillConnect</span>
      </Link>

      <div className="mb-8 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">Logged in as</p>
        <p className="font-semibold text-foreground">{displayUser.fullName}</p>
        <p className="text-xs text-muted-foreground">{displayUser.email}</p>
      </div>

      <nav className="space-y-2 flex-1 overflow-y-auto">
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
          onClick={() => setActiveTab("profile")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "profile" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <User className="h-4 w-4" />
          Profile Settings
        </button>
        <button
          onClick={() => setActiveTab("applications")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "applications" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <FileText className="h-4 w-4" />
          My Applications
        </button>
        <button
          onClick={() => setActiveTab("bookings")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "bookings" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Calendar className="h-4 w-4" />
          My Bookings
        </button>
        <button
          onClick={() => setActiveTab("portfolio")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "portfolio" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Briefcase className="h-4 w-4" />
          Portfolio
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "notifications" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Bell className="h-4 w-4" />
          Notifications
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "messages" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <MessageSquare className="h-4 w-4" />
          Messages
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`w-full text-left px-4 py-2 rounded-lg transition flex items-center gap-2 ${
            activeTab === "certifications" ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
          }`}
        >
          <Award className="h-4 w-4" />
          Certifications
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
          href="/browse"
          className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted text-foreground transition flex items-center gap-2"
        >
          <Briefcase className="h-4 w-4" />
          Browse Jobs
        </Link>
      </nav>

      <button
        onClick={async () => {
          console.log("[v0] Worker sidebar sign out clicked")
          await onSignOut()
        }}
        className="w-full px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition"
      >
        Sign Out
      </button>
    </div>
  )
}
