import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">Quick answers to questions you may have.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="workers">For Workers</TabsTrigger>
            <TabsTrigger value="employers">For Employers</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                    <AccordionTrigger>What is SkillConnect?</AccordionTrigger>
                    <AccordionContent>
                      SkillConnect is a platform connecting skilled professionals with employers across India. We use
                      AI-powered matching to connect the right talent with the right opportunities.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>Is SkillConnect free to use?</AccordionTrigger>
                    <AccordionContent>
                      Creating an account and browsing jobs is completely free. We charge a small service fee on
                      completed transactions to maintain the platform.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>How secure is my data?</AccordionTrigger>
                    <AccordionContent>
                      We use industry-standard encryption and security measures to protect your personal information. We
                      never share your data with third parties without your consent.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q4">
                    <AccordionTrigger>How do I contact support?</AccordionTrigger>
                    <AccordionContent>
                      You can reach us through the Support page or email us at mukulverma12321@gmail.com. We typically
                      respond within 24 hours.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workers">
            <Card>
              <CardHeader>
                <CardTitle>Questions for Workers</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="w1">
                    <AccordionTrigger>How do I create a strong profile?</AccordionTrigger>
                    <AccordionContent>
                      Include detailed information about your skills, experience, and certifications. Add portfolio
                      items and keep your profile updated. Complete profiles get 3x more job offers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="w2">
                    <AccordionTrigger>How do I get paid?</AccordionTrigger>
                    <AccordionContent>
                      Once you complete a job and the employer approves it, payment is transferred to your wallet. You
                      can withdraw funds to your bank account anytime.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="w3">
                    <AccordionTrigger>Can I work multiple jobs at once?</AccordionTrigger>
                    <AccordionContent>
                      Yes! You can accept as many jobs as you can handle. Just make sure you can meet all deadlines and
                      maintain quality work.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="w4">
                    <AccordionTrigger>What if an employer doesn't pay?</AccordionTrigger>
                    <AccordionContent>
                      All payments are held securely until work is completed. If there's a dispute, our support team
                      will mediate to ensure fair resolution.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employers">
            <Card>
              <CardHeader>
                <CardTitle>Questions for Employers</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="e1">
                    <AccordionTrigger>How do I post a job?</AccordionTrigger>
                    <AccordionContent>
                      Go to your employer dashboard, click "Post New Job", fill in the details including title,
                      description, budget, and requirements. Your job will be live immediately.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="e2">
                    <AccordionTrigger>How does AI matching work?</AccordionTrigger>
                    <AccordionContent>
                      Our AI analyzes your job requirements and automatically suggests the most qualified candidates
                      based on skills, experience, and past performance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="e3">
                    <AccordionTrigger>Can I hire the same worker again?</AccordionTrigger>
                    <AccordionContent>
                      You can save favorite workers and invite them directly to new jobs. Building long-term
                      relationships is encouraged.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="e4">
                    <AccordionTrigger>What if the work quality is poor?</AccordionTrigger>
                    <AccordionContent>
                      You can request revisions or open a dispute if work doesn't meet agreed standards. Payment is only
                      released when you're satisfied.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </main>
  )
}
