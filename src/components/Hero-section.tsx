import { CheckCircle, Phone, Star } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

function HeroSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                  Licensed • Insured • Bonded
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Southern California's
                  <span className="text-primary block">Premier Painting</span>
                  Contractor
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Delivering exceptional residential and commercial painting services throughout Southern California for
                  over 16 years. Quality craftsmanship, reliable service, and complete customer satisfaction guaranteed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Free Estimate
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (888) 990-9194
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-muted-foreground">500+ Happy Customers</div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/modern-painted-house.png"
                alt="Professional house painting project"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">16+ Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HeroSection