"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 sm:p-12 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Join Our Waitlist</h2>
            <p className="text-lg text-foreground/70">
              Be the first to know when ClearLedgers launches. Get early access and exclusive benefits.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-card border-border/50 focus:border-primary/50"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
              >
                Notify Me
              </Button>
            </div>
            {submitted && (
              <p className="text-center text-sm text-green-600 font-medium">✓ Thanks! We'll be in touch soon.</p>
            )}
          </form>

          <p className="text-center text-xs text-foreground/60 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </Card>
      </div>
    </section>
  )
}
