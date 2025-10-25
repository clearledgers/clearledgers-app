"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <Features />
      <Testimonials />
      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </main>
  )
}
