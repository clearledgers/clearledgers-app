import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "ClearLedgers has saved us 15+ hours every month on GST filing. Highly recommended!",
    author: "Rajesh Kumar",
    role: "CA, Mumbai",
  },
  {
    quote: "The reconciliation feature is a game-changer. Errors have dropped to nearly zero.",
    author: "Priya Sharma",
    role: "Finance Manager, Delhi",
  },
  {
    quote: "Finally, a platform built for Indian compliance. This is exactly what we needed.",
    author: "Amit Patel",
    role: "Chartered Accountant, Bangalore",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Accountants</h2>
          <p className="text-lg text-foreground/70">See what professionals are saying about ClearLedgers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
