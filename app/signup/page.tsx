"use client"

import { RoleSelector } from "@/components/auth/role-selector"
import { SignUpForm } from "@/components/auth/signup-form"
import { Navbar } from "@/components/navbar"
import { useState } from "react"
import type { UserRole } from "@/lib/auth-context"

export default function SignUpPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)

  return (
    <>
      <Navbar />
      {!selectedRole ? (
        <RoleSelector onSelectRole={setSelectedRole} />
      ) : (
        <SignUpForm role={selectedRole} onBackClick={() => setSelectedRole(null)} />
      )}
    </>
  )
}
