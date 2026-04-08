"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  const fetchUserProfile = useCallback(
    async (authUser: SupabaseUser) => {
      try {
        const { data, error } = await supabase.from("users").select("*").eq("id", authUser.id).single()

        if (error) {
          // If no profile exists, user might need to complete signup
          console.log("[v0] No user profile found, might need to complete signup")
          return null
        }

        if (data) {
          setUser({
            id: data.id,
            email: data.email,
            fullName: data.full_name,
            role: data.role as UserRole,
            avatar: data.avatar_url,
            createdAt: new Date(data.created_at),
          })
          return data
        }
      } catch (error) {
        console.error("[v0] Error fetching user profile:", error)
      }
      return null
    },
    [supabase],
  )

  useEffect(() => {
    const initAuth = async () => {
      try {
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser()

        if (authUser) {
          await fetchUserProfile(authUser)
        }
      } catch (error) {
        console.error("[v0] Error initializing auth:", error)
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("[v0] Auth state changed:", event)
      if (session?.user) {
        await fetchUserProfile(session.user)
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, fetchUserProfile])

  const signUp = useCallback(
    async (email: string, password: string, fullName: string, role: UserRole) => {
      setIsLoading(true)
      try {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || window.location.origin,
            data: {
              full_name: fullName,
              role: role,
            },
            emailConfirmation: false,
          },
        })

        if (authError) throw authError
        if (!authData.user) throw new Error("No user returned from signup")

        const { error: profileError } = await supabase.from("users").insert({
          id: authData.user.id,
          email: email,
          full_name: fullName,
          role: role,
        })

        if (profileError) {
          console.error("[v0] Error creating profile:", profileError)
          // If profile already exists, just continue
          if (!profileError.message.includes("duplicate")) {
            throw profileError
          }
        }

        // Fetch the created profile
        await fetchUserProfile(authData.user)
      } catch (error) {
        console.error("[v0] Signup error:", error)
        throw error
      } finally {
        setIsLoading(false)
      }
    },
    [supabase, fetchUserProfile],
  )

  const signIn = useCallback(
    async (email: string, password: string) => {
      setIsLoading(true)
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error
        if (!data.user) throw new Error("No user returned from login")

        const profile = await fetchUserProfile(data.user)

        // Navigate to appropriate dashboard based on role
        if (profile) {
          if (profile.role === "admin") {
            window.location.href = "/admin"
          } else if (profile.role === "employer") {
            window.location.href = "/dashboard/employer"
          } else {
            window.location.href = "/dashboard/worker"
          }
        }
      } catch (error) {
        console.error("[v0] Login error:", error)
        throw error
      } finally {
        setIsLoading(false)
      }
    },
    [supabase, fetchUserProfile],
  )

  const signOut = useCallback(async () => {
    console.log("[v0] Signing out...")
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error("[v0] Signout error:", error)
      }
      setUser(null)
      // Force a hard navigation to clear all state
      window.location.href = "/"
    } catch (error) {
      console.error("[v0] Signout error:", error)
      // Even if there's an error, still redirect
      setUser(null)
      window.location.href = "/"
    } finally {
      setIsLoading(false)
    }
  }, [supabase])

  const selectRole = useCallback(
    async (role: UserRole) => {
      if (user) {
        try {
          const { error } = await supabase.from("users").update({ role }).eq("id", user.id)

          if (error) throw error

          setUser({ ...user, role })
        } catch (error) {
          console.error("[v0] Error updating role:", error)
        }
      }
    },
    [user, supabase],
  )

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
