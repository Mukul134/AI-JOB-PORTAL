"use client"

import { Navbar } from "@/components/navbar"
import { WorkerProfileView } from "@/components/worker-profile/worker-profile-view"

export default function WorkerProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <WorkerProfileView />
    </main>
  )
}
