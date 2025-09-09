import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, Shield, Leaf, Users } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-card to-background py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/modern-painted-interior-room-with-colorful-walls.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 text-balance">About Acme Paints</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Adding color, durability, and style to every home with premium quality paints that transform spaces and
            inspire creativity.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Acme Paints has been a trusted name in the paint industry for over three decades. We specialize in
                creating high-quality, innovative paint solutions that bring your vision to life while ensuring lasting
                beauty and protection for your spaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From residential homes to commercial buildings, our paints have transformed countless spaces across the
                country, earning the trust of homeowners, contractors, and builders alike.
              </p>
            </div>
            <div className="relative">
              <img
                src="/happy-family-painting-colorful-wall-together.jpg"
                alt="Happy family painting together"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6 italic">
            To provide exceptional paint products that combine superior quality, environmental responsibility, and
            innovative color solutions, empowering our customers to create beautiful, lasting spaces that reflect their
            unique style and personality.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Why Choose Acme Paints</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us the preferred choice for quality-conscious customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Palette className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Wide Range of Colors</h3>
                <p className="text-muted-foreground">
                  Over 2,000 premium colors and custom matching services to bring any vision to life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Long-lasting Durability</h3>
                <p className="text-muted-foreground">
                  Advanced formulations that resist fading, cracking, and wear for years of lasting beauty.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Leaf className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Eco-Friendly & Safe</h3>
                <p className="text-muted-foreground">
                  Low-VOC and zero-VOC options that are safe for your family and the environment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Trusted by Professionals</h3>
                <p className="text-muted-foreground">
                  The preferred choice of contractors, builders, and design professionals nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Commitment to Customers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Our Commitment</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We stand behind every can of paint with our satisfaction guarantee. Our dedicated customer support team and
            extensive network of authorized dealers ensure you receive the guidance and service you deserve throughout
            your painting journey.
          </p>
          <div className="bg-card rounded-lg p-8">
            <img
              src="/smiling-customer-service-team-with-painted-home-ba.jpg"
              alt="Customer service team"
              className="rounded-lg mx-auto mb-6 max-w-md w-full"
            />
            <p className="text-lg text-muted-foreground italic">
              "Your satisfaction is our success. We're here to support you every step of the way."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-balance">
            Bring Your Walls to Life with Acme Paints Today!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Ready to transform your space? Explore our extensive collection of premium paints and find the perfect
            colors for your next project.
          </p>
          <Link href="/products">
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4 font-semibold hover:scale-105 transition-transform"
          >
            Explore Our Collection
          </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
