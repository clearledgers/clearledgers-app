"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function About() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About ClearLedgers</h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              ClearLedgers is a modern accounting and compliance platform designed to simplify financial management for
              accountants and businesses. Founded in 2023, we're committed to making compliance effortless through
              innovative technology and user-centric design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Team</h3>
              <p className="text-foreground/70">
                A dedicated team of accounting experts, software engineers, and compliance specialists working together
                to solve real-world accounting challenges.
              </p>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/70">
                To empower accountants and businesses with intelligent tools that automate compliance, reduce errors,
                and save time on routine accounting tasks.
              </p>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Values</h3>
              <p className="text-foreground/70">
                We believe in transparency, reliability, and continuous innovation. Your success is our success, and
                we're committed to your growth.
              </p>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 sm:p-12 border border-border/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Why Choose ClearLedgers?</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Bank-grade security with end-to-end encryption</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Automated compliance tracking and reporting</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">24/7 customer support from accounting experts</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Seamless integration with popular accounting tools</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">✓</span>
                <span className="text-foreground/70">Regular updates to stay compliant with regulations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  )
}
