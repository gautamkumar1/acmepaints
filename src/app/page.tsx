import HeroSection from "@/components/Hero-section";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import CoverdSection from "@/components/CoverdSection";
import PaintingPlanSection from "@/components/PaintingPlanSection";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
       {/* Header */}
      <Navbar />
       {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 pt-24 pb-20">
        <HeroSection />
      </section>
      {/* Services Section */}
      <section id="services" className="scroll-mt-24 py-20 bg-muted/30">
        <ServicesSection />
      </section>
      <section className="scroll-mt-24 py-20 bg-muted/30">
       <CoverdSection />
      </section>
      <section className="scroll-mt-24 py-20 bg-muted/30">
       <PaintingPlanSection />
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-foreground">AcmePaints</span>
            </div>
            <p className="text-muted-foreground">© 2024 AcmePaints. Licensed, Insured, and Bonded Painting Contractor.</p>
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
