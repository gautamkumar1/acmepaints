import HeroSection from "@/components/Hero-section";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import CoverdSection from "@/components/CoverdSection";
import PaintingPlanSection from "@/components/PaintingPlanSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ActualFaqSection from "@/components/ActualFaqSection";
import Footer from "@/components/Footer";
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
        <section className="scroll-mt-24 py-20 bg-muted/30">
        <WhyUs />
        </section>
        <section className="scroll-mt-24 py-20 bg-muted/30">
        <Testimonials />
        </section>
        <section className="scroll-mt-24 py-20 bg-muted/30">
        <ActualFaqSection />
        </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
