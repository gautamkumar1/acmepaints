"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

interface StepCardProps {
  step: number
  title: string
  description: string
  icon: React.ReactNode
  revealDelay?: number
}

// Minimal scroll reveal hook using IntersectionObserver
function useScrollReveal(options?: { rootMargin?: string; threshold?: number; once?: boolean }) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (options?.once !== false) {
            observer.unobserve(node)
          }
        }
      },
      {
        root: null,
        rootMargin: options?.rootMargin ?? '0px',
        threshold: options?.threshold ?? 0.2
      }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options?.rootMargin, options?.threshold, options?.once])

  return { ref: elementRef, isVisible }
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, icon, revealDelay }) => {
  const { ref, isVisible } = useScrollReveal({ once: true })
  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${revealDelay ?? 0}ms` }}
    >
      <Card className="relative overflow-hidden border border-border/60 bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8 text-center relative">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-dashed border-primary/60 bg-primary/5 text-primary flex items-center justify-center text-2xl font-bold">
                {step}
              </div>
              <div className="pointer-events-none absolute inset-0 -rotate-6">
                <div className="w-20 h-20 mx-auto rounded-[2.75rem] border-2 border-dashed border-primary/30" />
              </div>
            </div>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 rounded-xl border border-primary/10 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {icon}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

const PaintingPlanSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const headerReveal = useScrollReveal({ once: true })
  const ctaReveal = useScrollReveal({ once: true })
  const steps = [
    {
      step: 1,
      title: "Book Free Consultation",
      description: "Fill out the form to get started with your painting journey. Our team will review your requirements.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: 2,
      title: "Connect on a Call",
      description: "Finalize your home painting requirement and consultation details with our expert team.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: 3,
      title: "Schedule Free On-site Visit",
      description: "Plan a free site visit to evaluate your space and provide accurate estimates.",
      icon: <MapPin className="w-8 h-8" />
    }
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerReveal.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-3 text-primary">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Get Your Painting Plan in <span className="text-primary">3 Easy Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your space with our professional painting services. Follow these simple steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard key={index} revealDelay={index * 120} {...step} />
          ))}
        </div>

        <div
          ref={ctaReveal.ref}
          className={`text-center transition-all duration-700 ease-out ${
            ctaReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Start Your Free Consultation
            <span className="ml-2 inline-flex">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No commitment required • Free consultation • Expert advice
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg rounded-2xl bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              ✕
            </button>
            <div className="mb-6 pb-4 border-b">
              <h3 className="text-xl font-semibold text-foreground">Book your free consultation</h3>
              <p className="text-sm text-muted-foreground">Fill in your details and we’ll get back to you shortly.</p>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const data = Object.fromEntries(new FormData(form).entries())
                console.log('Consultation form submitted:', data)
                setIsModalOpen(false)
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-input bg-background/60 p-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground" htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className="h-10 rounded-md border border-primary bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground" htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className="h-10 rounded-md border border-primary bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="Doe"
                  />
                </div>
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-sm text-muted-foreground" htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="h-10 rounded-md border border-primary bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground" htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    required
                    className="h-10 rounded-md border border-primary bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="(+91) 94221 17922"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-muted-foreground" htmlFor="pin">Pin code</label>
                  <input
                    id="pin"
                    name="pin"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    className="h-10 rounded-md border border-primary bg-background px-3 text-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                    placeholder="400001"
                  />
                </div>
              </div>
              <div className="pt-4 border-t flex items-center justify-end gap-2">
                <Button variant="ghost" onClick={() => setIsModalOpen(false)} type="button">Cancel</Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default PaintingPlanSection

