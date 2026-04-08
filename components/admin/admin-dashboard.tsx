"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminOverview } from "@/components/admin/admin-overview"
import { UsersManagement } from "@/components/admin/users-management"
import { JobsManagement } from "@/components/admin/jobs-management"
import { Reports } from "@/components/admin/reports"

export function AdminDashboard() {
  const { signOut } = useAuth()
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "jobs" | "reports">("overview")

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={signOut} />

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-8">
          {activeTab === "overview" && <AdminOverview />}
          {activeTab === "users" && <UsersManagement />}
          {activeTab === "jobs" && <JobsManagement />}
          {activeTab === "reports" && <Reports />}
        </div>
      </main>
    </div>
  )
}
