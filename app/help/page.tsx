import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, BookOpen, MessageCircle, HelpCircle } from "lucide-react"

export default function HelpPage() {
  const popularTopics = [
    { icon: BookOpen, title: "Getting Started", description: "Learn the basics of using SkillConnect" },
    { icon: MessageCircle, title: "Account & Settings", description: "Manage your profile and preferences" },
    { icon: HelpCircle, title: "Payments & Billing", description: "Understand how payments work" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Find answers to common questions and get the support you need.
          </p>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for help..." className="pl-10 h-12" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {popularTopics.map((topic, index) => (
            <Card key={index} className="cursor-pointer hover:border-primary transition-colors">
              <CardHeader>
                <topic.icon className="h-10 w-10 mb-3 text-primary" />
                <CardTitle className="text-lg">{topic.title}</CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  Click the "Sign Up" button in the top right corner. Choose whether you're a worker or employer, fill
                  in your details, and verify your email address.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do payments work?</AccordionTrigger>
                <AccordionContent>
                  Workers receive payments directly to their wallet after completing jobs. Employers can fund their
                  accounts and payments are held securely until work is completed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I apply for jobs?</AccordionTrigger>
                <AccordionContent>
                  Browse available jobs, click on any listing that interests you, and submit your application with a
                  cover letter. Employers will review and contact you if you're a good fit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I edit my profile?</AccordionTrigger>
                <AccordionContent>
                  Yes! Go to your dashboard and click on "Profile" to update your information, skills, portfolio, and
                  certifications at any time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I have a dispute?</AccordionTrigger>
                <AccordionContent>
                  Contact our support team through the "Support" page. We have a dedicated dispute resolution process to
                  ensure fair outcomes for all parties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
