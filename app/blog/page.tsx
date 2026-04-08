import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "How to Build a Winning Worker Profile",
      excerpt:
        "Learn the key elements of a professional profile that attracts top employers and increases your chances of getting hired.",
      category: "Tips & Guides",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      author: "MUKUL",
    },
    {
      title: "The Future of Skilled Work in India",
      excerpt:
        "Explore emerging trends in the gig economy and how technology is reshaping opportunities for skilled professionals.",
      category: "Industry Insights",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      author: "MUKUL",
    },
    {
      title: "Top 10 In-Demand Skills for 2025",
      excerpt:
        "Discover which skills are most sought after by employers and how you can develop them to advance your career.",
      category: "Career Development",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      author: "MUKUL",
    },
    {
      title: "How Employers Can Find Quality Talent",
      excerpt:
        "Best practices for writing job postings, screening candidates, and building a reliable team through SkillConnect.",
      category: "For Employers",
      date: "Dec 28, 2024",
      readTime: "8 min read",
      author: "MUKUL",
    },
    {
      title: "Success Stories: Workers Who Found Their Dream Jobs",
      excerpt: "Inspiring stories from professionals who transformed their careers using our platform.",
      category: "Success Stories",
      date: "Dec 20, 2024",
      readTime: "10 min read",
      author: "MUKUL",
    },
    {
      title: "Understanding Payment Protection on SkillConnect",
      excerpt: "How our secure payment system protects both workers and employers throughout the job process.",
      category: "Platform Features",
      date: "Dec 15, 2024",
      readTime: "4 min read",
      author: "MUKUL",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tips, insights, and stories to help you succeed on SkillConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-3">
                  {post.category}
                </Badge>
                <CardTitle className="mb-3">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">By {post.author}</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
