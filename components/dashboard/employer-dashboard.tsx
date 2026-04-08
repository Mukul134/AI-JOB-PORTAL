"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { EmployerSidebar } from "@/components/dashboard/employer-sidebar"
import { EmployerOverview } from "@/components/dashboard/employer-overview"
import { PostJob } from "@/components/dashboard/post-job"
import { MyJobs } from "@/components/dashboard/my-jobs"
import { ApplicantTracking } from "@/components/dashboard/applicant-tracking"
import { WalletComponent } from "@/components/dashboard/wallet"

export function EmployerDashboard() {
  const { signOut } = useAuth()
  const [activeTab, setActiveTab] = useState<"overview" | "post-job" | "my-jobs" | "applicant-tracking" | "wallet">(
    "overview",
  )

  return (
    <div className="min-h-screen bg-background flex">
      <EmployerSidebar activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={signOut} />

      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-8">
          {activeTab === "overview" && <EmployerOverview />}
          {activeTab === "post-job" && <PostJob />}
          {activeTab === "my-jobs" && <MyJobs />}
          {activeTab === "applicant-tracking" && <ApplicantTracking />}
          {activeTab === "wallet" && <WalletComponent />}
        </div>
      </main>
    </div>
  )
}
