import { CheckCircle2, MessageSquare, Briefcase, Star } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Post or Browse",
      description: "Create a job posting or browse available professionals in your category",
      icon: Briefcase,
      gradient: "from-primary to-secondary",
    },
    {
      number: "02",
      title: "Connect & Discuss",
      description: "Message professionals directly to discuss requirements and budget",
      icon: MessageSquare,
      gradient: "from-secondary to-accent",
    },
    {
      number: "03",
      title: "Collaborate",
      description: "Work together on your project with secure payments and timelines",
      icon: CheckCircle2,
      gradient: "from-accent to-primary",
    },
    {
      number: "04",
      title: "Leave Reviews",
      description: "Rate and review professionals to build trust in the community",
      icon: Star,
      gradient: "from-primary to-accent",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10"></div>
      <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps and transform the way you work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center p-6 rounded-2xl border border-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Icon with gradient background */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${step.gradient} p-0.5 shadow-lg shadow-primary/20`}
                    >
                      <div className="h-full w-full rounded-2xl bg-card flex items-center justify-center">
                        <Icon className="h-9 w-9 text-primary" />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-xs font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connecting line for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
