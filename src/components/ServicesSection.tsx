'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardList, Palette, Droplet, CalendarClock, Wrench, Scissors, Shield, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

function ServicesSection() {
  const services = [
    {
      title: 'Initial Assessment',
      description: 'Evaluate your spaces, preferences, and needs to craft the perfect plan.',
      icon: ClipboardList,
    },
    {
      title: 'Colour Suggestion',
      description: 'Suggest colours and finishes tailored to your style, lighting, and mood.',
      icon: Palette,
    },
    {
      title: 'Sample Review',
      description: 'Offer real paint samples and boards to help you choose confidently.',
      icon: Droplet,
    },
    {
      title: 'Project Planning',
      description: 'Discuss timelines, cost, and site preparations for a smooth project.',
      icon: CalendarClock,
    },
    {
      title: 'Surface Prep & Repairs',
      description: 'Fill cracks, sand, and prime for a flawless, long-lasting finish.',
      icon: Wrench,
    },
    {
      title: 'Wallpaper Removal',
      description: 'Safely remove old wallpaper and prepare walls for fresh paint.',
      icon: Scissors,
    },
    {
      title: 'Protective Coatings',
      description: 'Apply durable, washable coats to protect high-traffic areas.',
      icon: Shield,
    },
    {
      title: 'Final Inspection',
      description: 'Walkthrough and touch-ups to ensure everything meets expectations.',
      icon: CheckCircle,
    },
  ]

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative text-center space-y-3 mb-14">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary">
          Our Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Comprehensive painting solutions for residential and commercial properties
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2, margin: '0px 0px -80px 0px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="h-full border-border/60 hover:border-foreground/30 transition-colors">
                <CardHeader className="space-y-3">
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default ServicesSection