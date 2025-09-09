import { Mail, Phone, MapPin, Paintbrush2, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/logo.jpg" alt="Acme Paints Logo" className="mix-blend-multiply" width={36} height={36} />
              <h3 className="font-serif font-bold text-xl text-foreground"><span className="text-[#fd1717]">Acme</span>Paints</h3>
            </div>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Professional paint solutions for all your residential and commercial needs. Quality products, expert
              service.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919422117922"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:text-accent transition-colors" />
                <span className="font-sans text-sm">+91 94221 17922</span>
              </a>
              <a
                href="mailto:info@acmepaints.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 group-hover:text-accent transition-colors" />
                <span className="font-sans text-sm">info@acmepaints.com</span>
              </a>
              <a
                href="https://maps.app.goo.gl/iLwpodD9tpe9cMc79?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <MapPin className="h-4 w-4 mt-0.5 group-hover:text-accent transition-colors flex-shrink-0" />
                <span className="font-sans text-sm">View Our Location</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
                Home
              </Link>
              <a href="#services" className="block text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
                Our Services
              </a>
              <Link href="/contact" className="block text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-foreground">Stay in the loop</h4>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Get paint tips, color inspiration, and exclusive offers. No spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input id="newsletter-email" type="email" placeholder="Enter your email" className="sm:flex-1" />
              <Button type="button" className="sm:self-auto">Subscribe</Button>
            </div>
            <p className="text-[12px] text-muted-foreground">You can unsubscribe at any time.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground font-sans text-sm">© 2025 Acme Paints. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-sans text-sm">
                Terms of Service
              </a>
              <div className="hidden md:block h-4 w-px bg-border mx-1" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Visit our Instagram"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
