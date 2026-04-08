"use client"

import { Navbar } from "@/components/navbar"
import { JobBrowser } from "@/components/job-browser/job-browser"

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <JobBrowser />
    </main>
  )
}
