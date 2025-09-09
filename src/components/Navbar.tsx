"use client"

import React from "react"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Menu, X, CalendarCheck, Paintbrush2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "/contact" },
  { label: "Paint Guide", href: "/paint-guide" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const NAVBAR_OFFSET_PX = 96 // pt-24 -> 6rem -> 96px
    const ids = navLinks
      .filter((l) => l.href.startsWith('#'))
      .map((l) => l.href.slice(1))

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
    <header className="fixed inset-x-0 top-0 z-[100] border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-16 gap-2 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image src="/logo.jpg" alt="Acme Paints Logo" className="mix-blend-multiply" width={32} height={32} />
            <span className="text-xl font-bold text-foreground"><span className="text-[#fd1717]">Acme</span>Paints</span>
          </Link>

          {/* Middle nav (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center gap-1 whitespace-nowrap">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={link.href.startsWith('#') && activeSection === link.href.slice(1) ? 'page' : undefined}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      const id = link.href.slice(1)
                      const el = document.getElementById(id)
                      if (el) {
                        const NAVBAR_OFFSET_PX = 96
                        const target = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX + 1
                        window.scrollTo({ top: target, behavior: 'smooth' })
                      }
                    }
                  }}
                  className={`relative px-3 py-2 transition-colors group ${link.href.startsWith('#') && activeSection === link.href.slice(1)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className="relative z-10 font-medium">{link.label}</span>
                  <AnimatePresence>
                    {link.href.startsWith('#') && activeSection === link.href.slice(1) && (
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
                </Link>
              ))}
            </nav>
          </div>

          {/* Right CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-2 ml-auto shrink-0">
            <Button asChild className="relative overflow-hidden bg-primary hover:bg-primary/90">
              <a href="tel:+919422117922" aria-label="Call us">
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
                  <span>Call Us</span>
                </motion.span>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-md ring-2 ring-primary/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            </Button>

            <Button
              asChild
              className="relative overflow-hidden bg-amber-600 hover:bg-amber-700 text-white shadow-sm"
            >
              <a
                href="#consultation"
                aria-label="Book free consultancy"
                onClick={(e) => {
                  e.preventDefault()
                  window.dispatchEvent(new Event('open-consultation-modal'))
                }}
                className="flex items-center"
              >
                <CalendarCheck className="w-4 h-4 mr-2" />
                Book Free Consultancy
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ml-auto shrink-0 text-foreground border border-border bg-white shadow-sm hover:text-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
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
            className="md:hidden origin-top border-t bg-background/95 backdrop-blur w-full overflow-x-hidden"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={link.href.startsWith('#') && activeSection === link.href.slice(1) ? 'page' : undefined}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        const id = link.href.slice(1)
                        const el = document.getElementById(id)
                        if (el) {
                          const NAVBAR_OFFSET_PX = 96
                          const target = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET_PX + 1
                          window.scrollTo({ top: target, behavior: 'smooth' })
                        }
                      }
                      setMenuOpen(false)
                    }}
                    className={`block rounded-md px-3 py-2 text-base transition-colors ${link.href.startsWith('#') && activeSection === link.href.slice(1)
                      ? 'text-foreground bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                  >
                    {link.label}
                  </Link>
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


