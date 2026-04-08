"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X, LogOut, User } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, signOut } = useAuth()
  const { t } = useLanguage()

  const getUserInitials = () => {
    if (!user?.fullName) return "U"
    const names = user.fullName.split(" ")
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase()
    }
    return user.fullName[0].toUpperCase()
  }

  const getDashboardLink = () => {
    if (!user) return "/"
    switch (user.role) {
      case "admin":
        return "/admin"
      case "employer":
        return "/dashboard/employer"
      case "job_seeker":
        return "/dashboard/worker"
      default:
        return "/"
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/50 to-secondary/50 blur-sm"></div>
              <div className="absolute inset-2 rounded-lg bg-background flex items-center justify-center">
                <span className="text-lg font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  S
                </span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              SkillConnect
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/browse"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {t('nav.browseJobs')}
            </Link>
            <Link
              href="/#how-it-works"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {t('nav.howItWorks')}
            </Link>
          </div>

          <div className="hidden gap-3 sm:flex items-center">
            <ThemeToggle />
            <LanguageSwitcher />
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getUserInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.fullName}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={getDashboardLink()} className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    {t('nav.dashboard')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  {t('nav.logout')}
                </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild className="font-medium">
                  <Link href="/login">{t('nav.signIn')}</Link>
                </Button>
                <Button
                  asChild
                  className="font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                >
                  <Link href="/signup">{t('nav.getStarted')}</Link>
                </Button>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border/40 py-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              <Link
                href="/browse"
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                {t('nav.browseJobs')}
              </Link>
              <Link
                href="/#how-it-works"
                className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                {t('nav.howItWorks')}
              </Link>
            </div>
            <div className="mt-6 space-y-3 px-4">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">{t('nav.theme')}</span>
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">Language</span>
                <LanguageSwitcher />
              </div>
              {isAuthenticated && user ? (
                <>
                  <div className="py-3 px-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <Button variant="outline" className="w-full font-medium bg-transparent" asChild>
                    <Link href={getDashboardLink()}>
                      <User className="mr-2 h-4 w-4" />
                      {t('nav.dashboard')}
                    </Link>
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full font-medium"
                    onClick={() => {
                      setIsOpen(false)
                      signOut()
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('nav.logout')}
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full font-medium bg-transparent" asChild>
                    <Link href="/login">{t('nav.signIn')}</Link>
                  </Button>
                  <Button className="w-full font-medium shadow-lg shadow-primary/25" asChild>
                    <Link href="/signup">{t('nav.getStarted')}</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
