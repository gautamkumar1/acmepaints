import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

function ServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive painting solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Painting",
                description: "Interior and exterior painting for homes, condos, and apartments",
                icon: "🏠",
              },
              {
                title: "Commercial Painting",
                description: "Professional painting services for offices, retail, and industrial spaces",
                icon: "🏢",
              },
              {
                title: "Color Consultation",
                description: "Expert color matching and design consultation services",
                icon: "🎨",
              },
              {
                title: "Pressure Washing",
                description: "Complete surface preparation and cleaning services",
                icon: "💧",
              },
              {
                title: "Drywall Repair",
                description: "Professional drywall patching and texture matching",
                icon: "🔧",
              },
              {
                title: "Cabinet Refinishing",
                description: "Transform your kitchen with professional cabinet painting",
                icon: "🚪",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  )
}

export default ServicesSection