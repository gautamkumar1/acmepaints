"use client"
import React from 'react'
import { motion, type Variants } from 'framer-motion'

function CoverdSection() {
  const container: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], when: 'beforeChildren', staggerChildren: 0.12 },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="space-y-10"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">We&apos;ve Got You Covered</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium finishes inside, lasting protection outside, and leak-free peace of mind.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[210px]">
          {/* Interior Painting - large card */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 md:row-span-2 h-[260px] md:h-auto"
          >
            <motion.img
              src="/Interior-wall-painting.jpg"
              alt="Interior wall painting in warm, vibrant shades"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="relative h-full p-6 flex flex-col justify-end">
              <motion.h3
                className="text-white text-2xl lg:text-3xl font-semibold"
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Interior Painting
              </motion.h3>
              <motion.p
                className="mt-2 text-white/85 max-w-xl"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                Give your walls a flawless finish with vibrant shades that bring warmth and style to your home.
              </motion.p>
            </div>
            <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-white/15 transition" />
          </motion.div>

          {/* Exterior Painting */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 h-[210px]"
          >
            <motion.img
              src="/House-exterior-painting.jpg"
              alt="Exterior house painting with durable weatherproof finish"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="relative h-full p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-semibold">Exterior Painting</h3>
              <p className="mt-2 text-white/85">
                Protect your home with durable, weatherproof paints that keep exteriors fresh and long-lasting.
              </p>
            </div>
            <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-white/15 transition" />
          </motion.div>

          {/* Waterproofing */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/50 h-[210px]"
          >
            <motion.img
              src="/Waterproofing.jpeg"
              alt="Professional waterproofing service being applied to wall"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="relative h-full p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-semibold">Water Proofing</h3>
              <p className="mt-2 text-white/85">
                Stop leaks and dampness with expert waterproofing for roofs, walls, bathrooms, and more.
              </p>
            </div>
            <span aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-white/15 transition" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default CoverdSection
