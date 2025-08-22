"use client"

import React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const NAVBAR_OFFSET_PX = 96 // pt-24 -> 6rem -> 96px
    const ids = navLinks.map((l) => l.href.replace('#', ''))

    const handleScroll = () => {
      const scrollY = window.scrollY
      let current: string | null = null

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        if (scrollY + NAVBAR_OFFSET_PX >= top) {
          current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-white rounded-sm" />
            </motion.div>
            <span className="text-xl font-bold text-foreground">AcmePaints</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault()
                  const id = link.href.replace('#', '')
                  const el = document.getElementById(id)
                  if (el) {
                    const NAVBAR_OFFSET_PX = 96
                    const target = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX + 1
                    window.scrollTo({ top: target, behavior: 'smooth' })
                  }
                }}
                className={`relative px-3 py-2 transition-colors group ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10 font-medium">{link.label}</span>
                <AnimatePresence>
                  {activeSection === link.href.replace('#', '') && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-y-1 inset-x-2 rounded-md bg-primary/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-primary/80"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          </nav>

          {/* Phone CTA (Desktop) */}
          <div className="hidden md:block">
            <Button asChild className="relative overflow-hidden bg-primary hover:bg-primary/90">
              <a href="tel:+91-9422117922" aria-label="Call us">
                <motion.span
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex items-center"
                >
                  <motion.span
                    className="relative mr-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="absolute inset-0 rounded-full" />
                  </motion.span>
                  +91-94221 17922
                </motion.span>
                {/* Soft pulse ring */}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-md ring-2 ring-primary/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <AnimatePresence initial={false} mode="wait">
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden origin-top border-t bg-background/95 backdrop-blur"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                    onClick={(e) => {
                      e.preventDefault()
                      const id = link.href.replace('#', '')
                      const el = document.getElementById(id)
                      if (el) {
                        const NAVBAR_OFFSET_PX = 96
                        const target = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX + 1
                        window.scrollTo({ top: target, behavior: 'smooth' })
                      }
                      setMenuOpen(false)
                    }}
                    className={`block rounded-md px-3 py-2 text-base transition-colors ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-foreground bg-accent'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="tel:+919422117922" aria-label="Call us">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


