import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About SkillConnect</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connecting skilled professionals with opportunities across India. We're building the future of work, one
            connection at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Target className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>
                To empower skilled professionals across India by connecting them with meaningful opportunities and
                helping businesses find the talent they need to grow.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-10 w-10 mb-4 text-primary" />
              <CardTitle>Our Vision</CardTitle>
              <CardDescription>
                To become India's most trusted platform for skilled work, where every professional can build a
                sustainable career and every business can find reliable talent.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>10,000+</CardTitle>
              <CardDescription>Active Professionals</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>5,000+</CardTitle>
              <CardDescription>Jobs Posted</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>95%</CardTitle>
              <CardDescription>Success Rate</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              SkillConnect was founded with a simple belief: every skilled professional deserves access to quality
              opportunities, and every business deserves access to reliable talent.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We started by connecting workers with local businesses and have grown into a comprehensive platform
              serving thousands across India. Our AI-powered matching system ensures the right talent meets the right
              opportunity at the right time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, SkillConnect is trusted by professionals and businesses alike to build careers, grow teams, and
              create lasting partnerships.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
