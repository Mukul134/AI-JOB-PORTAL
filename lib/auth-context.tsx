"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"

export type UserRole = "job_seeker" | "employer" | "admin"

export interface User {
  id: string
  email: string
  fullName: string
  role: UserRole
  avatar?: string
  createdAt: Date
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  signUp: (email: string, password: string, fullName: string, role: UserRole) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
  selectRole: (role: UserRole) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo users
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  "admin@skillconnect.com": {
    password: "admin123",
    user: {
      id: "admin-1",
      email: "admin@skillconnect.com",
      fullName: "Admin User",
      role: "admin",
      avatar: undefined,
      createdAt: new Date(),
    },
  },
  "employer@skillconnect.com": {
    password: "employer123",
    user: {
      id: "employer-1",
      email: "employer@skillconnect.com",
      fullName: "Employer User",
      role: "employer",
      avatar: undefined,
      createdAt: new Date(),
    },
  },
  "worker@skillconnect.com": {
    password: "worker123",
    user: {
      id: "worker-1",
      email: "worker@skillconnect.com",
      fullName: "Job Seeker User",
      role: "job_seeker",
      avatar: undefined,
      createdAt: new Date(),
    },
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("demo_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("[v0] Error parsing stored user:", error)
        localStorage.removeItem("demo_user")
      }
    }
    setIsLoading(false)
  }, [])

  const signUp = useCallback(async (email: string, password: string, fullName: string, role: UserRole) => {
    setIsLoading(true)
    try {
      // Simulate signup delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Check if user already exists
      if (DEMO_USERS[email]) {
        throw new Error("This email is already registered. Please sign in instead.")
      }

      // Create new demo user
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        fullName,
        role,
        avatar: undefined,
        createdAt: new Date(),
      }

      // Store in memory (in production, this would be a database)
      DEMO_USERS[email] = {
        password,
        user: newUser,
      }

      // Store user in localStorage
      localStorage.setItem("demo_user", JSON.stringify(newUser))
      setUser(newUser)

      // Navigate after a short delay
      setTimeout(() => {
        if (role === "admin") {
          window.location.href = "/admin"
        } else if (role === "employer") {
          window.location.href = "/dashboard/employer"
        } else {
          window.location.href = "/dashboard/worker"
        }
      }, 600)
    } catch (error) {
      console.error("[v0] Signup error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate login delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const demoUser = DEMO_USERS[email]

      if (!demoUser || demoUser.password !== password) {
        throw new Error("Invalid email or password")
      }

      // Store user in localStorage
      localStorage.setItem("demo_user", JSON.stringify(demoUser.user))
      setUser(demoUser.user)

      // Navigate after a short delay
      setTimeout(() => {
        if (demoUser.user.role === "admin") {
          window.location.href = "/admin"
        } else if (demoUser.user.role === "employer") {
          window.location.href = "/dashboard/employer"
        } else {
          window.location.href = "/dashboard/worker"
        }
      }, 600)
    } catch (error) {
      console.error("[v0] Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem("demo_user")
    setUser(null)
    window.location.href = "/"
  }, [])

  const selectRole = useCallback((role: UserRole) => {
    if (user) {
      const updatedUser = { ...user, role }
      setUser(updatedUser)
      localStorage.setItem("demo_user", JSON.stringify(updatedUser))
    }
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        signUp,
        signIn,
        signOut,
        selectRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
