import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <Badge variant="secondary" className="w-fit px-4 py-1.5 text-sm font-medium">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 inline" />
              Connect with Top Talent
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl text-balance leading-[1.1]">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Professional Match
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl">
                Connect with verified skilled professionals across all industries. From tech experts to creative
                talents, find the right person for your project in minutes.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all group"
              >
                <Link href="/browse">
                  Explore Professionals
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base font-semibold border-2 bg-transparent">
                <Link href="/signup">Post a Project</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="text-3xl font-bold text-foreground">50K+</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Skilled Professionals</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <p className="text-3xl font-bold text-foreground">100K+</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-secondary" />
                  <p className="text-3xl font-bold text-foreground">4.9/5</p>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Floating cards with modern design */}
              <div className="relative w-full h-full">
                {/* Card 1 - Top Left */}
                <div className="absolute top-8 left-4 w-64 h-48 bg-card border border-border rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-700 delay-300 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      D
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">UI/UX Design</p>
                      <p className="text-xs text-muted-foreground">150+ Experts</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Avg Rate: $45/hr</span>
                      <span>4.8★</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Top Right */}
                <div className="absolute top-24 right-4 w-64 h-48 bg-card border border-border rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-700 delay-500 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-accent-foreground font-bold text-lg">
                      C
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">Development</p>
                      <p className="text-xs text-muted-foreground">280+ Developers</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Avg Rate: $65/hr</span>
                      <span>4.9★</span>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Bottom Center */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-52 bg-gradient-to-br from-card to-muted border border-border rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 hover:scale-105 transition-transform">
                  <div className="text-center mb-4">
                    <p className="text-2xl font-bold text-foreground mb-1">Join Today</p>
                    <p className="text-sm text-muted-foreground">Start your journey with us</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-16 w-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div className="h-16 w-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                    <div className="h-16 w-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <Button className="w-full font-semibold" size="sm">
                    Get Started Free
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-accent/10 blur-3xl animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
