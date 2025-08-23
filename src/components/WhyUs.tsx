"use client"

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ShieldCheck,
  Palette,
  Ruler,
  Sparkles,
  Users,
  Clock4,
} from 'lucide-react'

const features = [
  {
    title: '16+ Years of Trusted Expertise',
    icon: ShieldCheck,
    desc: 'Seasoned professionals delivering consistent quality and reliability.'
  },
  {
    title: 'Over 4,000 Colour Options',
    icon: Palette,
    desc: 'Endless palettes to match your style, space, and mood.'
  },
  {
    title: 'Comprehensive Site Assessment',
    icon: Ruler,
    desc: 'On‑site inspection for accurate planning and flawless execution.'
  },
  {
    title: 'Tailored Colour Consultation',
    icon: Sparkles,
    desc: 'Personalized guidance to select the perfect scheme and finish.'
  },
  {
    title: 'Skilled, Certified Professionals',
    icon: Users,
    desc: 'Trained crews following best practices and safety standards.'
  },
  {
    title: 'On‑Time, Clean Delivery',
    icon: Clock4,
    desc: 'Punctual schedules, neat workspaces, and zero surprises.'
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, duration: 0.4 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  },
}

function WhyUs() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Why Choose AcmePaints
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="mt-3 text-muted-foreground"
          >
            Premium finishes, expert execution, and a seamless experience from start to shine.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <Card className="h-full border border-border/70 bg-card/60 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="relative">
                      <motion.span
                        aria-hidden
                        className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>
                      <motion.span
                        aria-hidden
                        className="pointer-events-none absolute -inset-1 rounded-xl bg-primary/5 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <div className="pt-0.5">
                      <CardTitle className="text-base sm:text-lg">{f.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="-mt-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </>
  )
}

export default WhyUs
