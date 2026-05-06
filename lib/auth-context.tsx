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

// Demo users with secure credentials
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

// Session storage - simulates backend session management
const SESSION_STORAGE_KEY = "auth_session"
const SESSION_TOKEN_KEY = "auth_token"

function generateSessionToken(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

function getStoredSession(): User | null {
  if (typeof window === "undefined") return null
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      const token = localStorage.getItem(SESSION_TOKEN_KEY)
      // Verify token exists to ensure valid session
      if (token && parsed.email) {
        console.log("[v0] Session restored from storage for user:", parsed.email)
        return parsed
      }
    }
  } catch (error) {
    console.error("[v0] Error reading stored session:", error)
  }
  return null
}

function saveSession(user: User, token: string): void {
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user))
    localStorage.setItem(SESSION_TOKEN_KEY, token)
    // Set secure cookie for server-side verification
    document.cookie = `${SESSION_TOKEN_KEY}=${token}; path=/; max-age=604800; SameSite=Lax`
    console.log("[v0] Session saved for user:", user.email)
  } catch (error) {
    console.error("[v0] Error saving session:", error)
  }
}

function clearSession(): void {
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY)
    localStorage.removeItem(SESSION_TOKEN_KEY)
    // Clear cookie
    document.cookie = `${SESSION_TOKEN_KEY}=; path=/; max-age=0; SameSite=Lax`
    console.log("[v0] Session cleared")
  } catch (error) {
    console.error("[v0] Error clearing session:", error)
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Restore session from storage on mount
    const storedUser = getStoredSession()
    if (storedUser) {
      setUser(storedUser)
    } else {
      console.log("[v0] No existing session found")
    }
    setIsLoading(false)
  }, [])

  const signUp = useCallback(async (email: string, password: string, fullName: string, role: UserRole) => {
    setIsLoading(true)
    try {
      console.log("[v0] Signup attempt for email:", email, "Role:", role)
      
      // Simulate signup delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Check if user already exists
      if (DEMO_USERS[email]) {
        console.warn("[v0] Email already registered:", email)
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

      // Generate session token and save
      const token = generateSessionToken()
      saveSession(newUser, token)
      setUser(newUser)

      console.log("[v0] Signup successful for user:", email)
      
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
      console.log("[v0] Login attempt for email:", email)
      
      // Simulate login delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      const demoUser = DEMO_USERS[email]

      if (!demoUser) {
        console.warn("[v0] User not found:", email)
        throw new Error("Invalid email or password")
      }
      
      if (demoUser.password !== password) {
        console.warn("[v0] Invalid password for user:", email)
        throw new Error("Invalid email or password")
      }

      // Generate session token and save
      const token = generateSessionToken()
      saveSession(demoUser.user, token)
      setUser(demoUser.user)

      console.log("[v0] Login successful for user:", email, "Role:", demoUser.user.role, "Token:", token)

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
      clearSession()
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signOut = useCallback(() => {
    const logoutEmail = user?.email
    console.log("[v0] Logout initiated for user:", logoutEmail)
    clearSession()
    setUser(null)
    console.log("[v0] Logout complete, redirecting to home")
    window.location.href = "/"
  }, [user])

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
