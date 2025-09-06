import HeroSection from "@/components/Hero-section";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import CoverdSection from "@/components/CoverdSection";
import PaintingPlanSection from "@/components/PaintingPlanSection";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ActualFaqSection from "@/components/ActualFaqSection";
import Footer from "@/components/Footer";
import ColourGuide from "@/components/ColourGuide";
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
       <ColourGuide />
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

      {/* Floating WhatsApp Button */}
      <a
        href={
          `https://wa.me/919422117922?text=${encodeURIComponent(
            "Hello! I'm interested in your painting services."
          )}`
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.68.15-.2.29-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.08-.79.37-.27.29-1.04 1.02-1.04 2.5 0 1.47 1.06 2.89 1.21 3.09.15.2 2.08 3.17 5.03 4.45.7.3 1.25.48 1.68.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.18-1.42-.07-.13-.26-.21-.56-.36z"/>
          <path d="M26.65 5.35C23.85 2.55 20.09 1 16.1 1 8.24 1 1.93 7.31 1.93 15.17c0 2.49.65 4.93 1.9 7.08L1 31l8.96-2.79c2.08 1.14 4.43 1.74 6.84 1.74h.01c7.86 0 14.17-6.31 14.17-14.17 0-3.78-1.47-7.34-4.33-10.43zM16.81 27.05h-.01c-2.16 0-4.28-.58-6.13-1.68l-.44-.26-5.32 1.66 1.73-5.19-.29-.46c-1.18-1.93-1.8-4.15-1.8-6.46 0-6.91 5.62-12.53 12.54-12.53 3.35 0 6.49 1.3 8.86 3.67 2.37 2.38 3.67 5.51 3.67 8.86 0 6.91-5.62 12.53-12.51 12.53z"/>
        </svg>
        <span className="sr-only">WhatsApp</span>
      </a>
    </div>
  );
}
