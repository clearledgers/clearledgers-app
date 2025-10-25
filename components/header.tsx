"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header({ onWaitlistClick }: { onWaitlistClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isNotHome = pathname !== "/"

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">CL</span>
          </div>
          <span className="font-bold text-lg text-foreground">ClearLedgers</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
            <Home size={18} />
            Home
          </Link>
          <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-foreground">
            Sign In
          </Button>
          <Button onClick={onWaitlistClick} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Join Our Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground/70 hover:text-foreground flex items-center gap-1">
              <Home size={18} />
              Home
            </Link>
            <Link href="/about" className="block text-foreground/70 hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="block text-foreground/70 hover:text-foreground">
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full text-foreground">
                Sign In
              </Button>
              <Button
                onClick={onWaitlistClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Join Our Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
