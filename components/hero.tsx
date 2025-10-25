"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero({ onWaitlistClick }: { onWaitlistClick: () => void }) {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary">Trusted by 500+ accountants</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Simplifying Compliances
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              All in One Dashboard
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 mb-8 leading-relaxed">
            ClearLedgers helps accountants and businesses manage returns, reconcile ledgers, and stay compliant —
            effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onWaitlistClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Join Our Waitlist
              <ArrowRight size={18} />
            </Button>
          </div>

          {/* Hero Image with Animated Dashboard */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-3xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-8 sm:p-12">
              <style>{`
                @keyframes slideIn {
                  from {
                    opacity: 0;
                    transform: translateY(10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                @keyframes chartBounce {
                  0%, 100% {
                    height: 30%;
                  }
                  50% {
                    height: 100%;
                  }
                }
                
                @keyframes lineSlide {
                  0%, 100% {
                    width: 100%;
                    opacity: 1;
                  }
                  50% {
                    width: 70%;
                    opacity: 0.7;
                  }
                }
                
                @keyframes pulse-glow {
                  0%, 100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.6;
                  }
                }
                
                .animate-slide-in {
                  animation: slideIn 0.6s ease-out forwards;
                }
                
                .chart-bar-1 {
                  animation: chartBounce 2s ease-in-out infinite;
                }
                
                .chart-bar-2 {
                  animation: chartBounce 2s ease-in-out infinite 0.2s;
                }
                
                .chart-bar-3 {
                  animation: chartBounce 2s ease-in-out infinite 0.4s;
                }
                
                .line-animate {
                  animation: lineSlide 2.5s ease-in-out infinite;
                }
                
                .pulse-indicator {
                  animation: pulse-glow 2s ease-in-out infinite;
                }
              `}</style>

              <div className="bg-card rounded-lg p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between animate-slide-in" style={{ animationDelay: "0.1s" }}>
                  <div className="h-3 w-24 bg-muted rounded line-animate" />
                  <div className="flex gap-2">
                    <div className="h-3 w-3 bg-primary/60 rounded-full pulse-indicator" />
                    <div
                      className="h-3 w-3 bg-secondary/60 rounded-full pulse-indicator"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>

                {/* Animated Entries */}
                <div className="space-y-3">
                  <div className="h-4 w-full bg-muted rounded line-animate" style={{ animationDelay: "0s" }} />
                  <div className="h-4 w-5/6 bg-muted rounded line-animate" style={{ animationDelay: "0.3s" }} />
                  <div className="h-4 w-4/6 bg-muted rounded line-animate" style={{ animationDelay: "0.6s" }} />
                </div>

                {/* Animated Chart Bars */}
                <div className="grid grid-cols-3 gap-4 pt-4 items-end h-24">
                  <div className="flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg chart-bar-1" />
                  </div>
                  <div className="flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-secondary to-secondary/60 rounded-t-lg chart-bar-2" />
                  </div>
                  <div className="flex flex-col items-center justify-end h-full">
                    <div className="w-full bg-gradient-to-t from-accent to-accent/60 rounded-t-lg chart-bar-3" />
                  </div>
                </div>

                {/* Compliance Status Indicators */}
                <div className="flex gap-2 pt-4 justify-center">
                  <div
                    className="px-3 py-1 bg-green-500/20 text-green-700 text-xs rounded-full font-medium animate-slide-in"
                    style={{ animationDelay: "1.1s" }}
                  >
                    ✓ GST Compliant
                  </div>
                  <div
                    className="px-3 py-1 bg-blue-500/20 text-blue-700 text-xs rounded-full font-medium animate-slide-in"
                    style={{ animationDelay: "1.3s" }}
                  >
                    ✓ TDS Filed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
