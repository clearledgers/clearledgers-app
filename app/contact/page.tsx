"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Contact() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions about ClearLedgers? We'd love to hear from you. Reach out to our team and we'll get back to
              you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-border/50 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">support@clearledgers.com</p>
            </Card>

            <Card className="p-8 border-border/50 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">+1 (555) 123-4567</p>
            </Card>

            <Card className="p-8 border-border/50 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
              <p className="text-foreground/70">123 Finance Street, New York, NY 10001</p>
            </Card>
          </div>

          <Card className="p-8 sm:p-12 border-border/50">
            <h2 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  )
}
