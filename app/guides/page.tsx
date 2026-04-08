import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Briefcase, Wallet, Shield, Star } from "lucide-react"

export default function GuidesPage() {
  const guides = [
    {
      icon: FileText,
      title: "Complete Profile Setup Guide",
      description: "Step-by-step instructions to create a professional profile that stands out",
      category: "Getting Started",
      duration: "10 min",
    },
    {
      icon: Briefcase,
      title: "How to Find the Right Jobs",
      description: "Use filters, search, and AI matching to discover opportunities that fit your skills",
      category: "For Workers",
      duration: "8 min",
    },
    {
      icon: Users,
      title: "Hiring Best Practices",
      description: "Write effective job postings and screen candidates efficiently",
      category: "For Employers",
      duration: "12 min",
    },
    {
      icon: Wallet,
      title: "Managing Your Wallet",
      description: "Add funds, withdraw earnings, and track your transaction history",
      category: "Payments",
      duration: "6 min",
    },
    {
      icon: Shield,
      title: "Safety and Security Tips",
      description: "Protect yourself from scams and work safely on the platform",
      category: "Safety",
      duration: "7 min",
    },
    {
      icon: Star,
      title: "Building Your Reputation",
      description: "Get positive reviews and increase your visibility on the platform",
      category: "Success Tips",
      duration: "9 min",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">User Guides</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive guides to help you make the most of SkillConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <guide.icon className="h-10 w-10 mb-3 text-primary" />
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{guide.category}</Badge>
                  <Badge variant="outline">{guide.duration}</Badge>
                </div>
                <CardTitle className="mb-2">{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
