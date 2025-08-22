import HeroSection from "@/components/Hero-section";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
       {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-foreground">ProPaint</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>

            <Button className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              (888) 990-9194
            </Button>
          </div>
        </div>
      </header>
       {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <HeroSection />
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <ServicesSection />
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-foreground">ProPaint</span>
            </div>
            <p className="text-muted-foreground">© 2024 ProPaint. Licensed, Insured, and Bonded Painting Contractor.</p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>License #123456</span>
              <span>•</span>
              <span>Fully Insured</span>
              <span>•</span>
              <span>Bonded</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
