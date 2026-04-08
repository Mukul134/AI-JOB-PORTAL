"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { WorkerSidebar } from "@/components/dashboard/worker-sidebar"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { ProfileSettings } from "@/components/dashboard/profile-settings"
import { MyApplications } from "@/components/dashboard/my-applications"
import { Portfolio } from "@/components/dashboard/portfolio"
import { Notifications } from "@/components/dashboard/notifications"
import { Messages } from "@/components/dashboard/messages"
import { Certifications } from "@/components/dashboard/certifications"
import { WalletComponent } from "@/components/dashboard/wallet"
import { MyBookings } from "@/components/dashboard/my-bookings"

export function WorkerDashboard() {
  const { user, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState<
    | "overview"
    | "profile"
    | "applications"
    | "portfolio"
    | "notifications"
    | "messages"
    | "certifications"
    | "wallet"
    | "bookings"
  >("overview")

  return (
    <div className="min-h-screen bg-background flex">
      <WorkerSidebar activeTab={activeTab} setActiveTab={setActiveTab} onSignOut={signOut} />

      <main className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-8">
          {activeTab === "overview" && <DashboardOverview />}
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "applications" && <MyApplications />}
          {activeTab === "bookings" && <MyBookings />}
          {activeTab === "portfolio" && <Portfolio />}
          {activeTab === "notifications" && <Notifications />}
          {activeTab === "messages" && <Messages />}
          {activeTab === "certifications" && <Certifications />}
          {activeTab === "wallet" && <WalletComponent />}
        </div>
      </main>
    </div>
  )
}
