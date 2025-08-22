"use client"

import { CheckCircle, Phone, Star, X } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { motion, type Variants, AnimatePresence } from 'framer-motion'
import { Typewriter } from './ui/typewriter'

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const container: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren', staggerChildren: 0.12 },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  const imageEntrance: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.h1 variants={item} className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Protecting & Beautifying
                  <span className="text-primary block">Your Home Through</span>
                  <Typewriter
          text={[
            "Interior Painting",
            "Exterior Painting",
            "Water Proofing",
            "Wall Textures",
          ]}
          speed={70}
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
                </motion.h1>
                <motion.p variants={item} className="text-lg text-muted-foreground leading-relaxed">
                AcmePaints brings you premium solutions for every surface – interiors, exteriors, wood, and metal. 
                From weather-proof durability to eco-friendly finishes, we’ve got the perfect paint for your home.
                </motion.p>
              </div>

              <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <motion.button
                    whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(0,0,0,0.12)' }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book your Free Consultation
                  </motion.button>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:text-primary hover:bg-primary/10 hover:border-primary/70 bg-transparent"
                  asChild
                >
                  <motion.button
                    whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919422117922">+91-94221 17922</a>
                  </motion.button>
                </Button>
              </motion.div>

              <motion.div variants={item} className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, rotate: -15, opacity: 0 }}
                      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, type: 'spring', stiffness: 500, damping: 24 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.span>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-muted-foreground">500+ Happy Customers</div>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              variants={imageEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.img
                src="/modern-painted-house.png"
                alt="Professional house painting project"
                className="rounded-2xl shadow-2xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -16, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">16+ Years</div>
                    <div className="text-sm text-muted-foreground">Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black/40" />
              <motion.div
                key="dialog"
                role="dialog"
                aria-modal="true"
                className="relative w-full max-w-lg rounded-2xl bg-background p-6 shadow-2xl"
                initial={{ y: 24, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 16, opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  aria-label="Close"
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50"
                >
                  <X className="w-4 h-4" />
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  )
}

export default HeroSection