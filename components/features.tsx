import { Card } from "@/components/ui/card"
import { FileText, TrendingUp, CheckCircle, Scale } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "GST Compliances",
    description: "Automate GST compliance with real-time validation and error detection.",
  },
  {
    icon: TrendingUp,
    title: "TDS Compliances",
    description: "Stay on top of TDS deadlines and compliance requirements automatically.",
  },
  {
    icon: CheckCircle,
    title: "Bookkeeping & Accounting",
    description: "Reconcile accounts in minutes with intelligent matching algorithms.",
  },
  {
    icon: Scale,
    title: "Labour Law Compliances",
    description: "Ensure full compliance with labour laws and regulations.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Accounting
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to streamline compliance and accounting workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/30"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
