import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "READY SHADE Premium Emulsion",
    category: "Interior & Exterior",
    description: "Premium quality emulsion paint for both interior and exterior use with 5-year performance guarantee.",
    image: "/product1.jpg",
    features: ["Interior & Exterior", "20L Net", "5 Year Warranty"],
    type: "Premium Emulsion",
  },
  {
    id: 2,
    name: "NIVA Acrylic Emulsion",
    category: "Interior & Exterior",
    description: "High-quality acrylic emulsion with excellent coverage and vibrant color retention.",
    image: "/product2.jpg",
    features: ["Interior & Exterior", "20L Net", "High Shine"],
    type: "Acrylic Emulsion",
  },
  {
    id: 3,
    name: "LAVISH Shine Luxury Emulsion",
    category: "Luxury Interior",
    description: "Luxury emulsion paint with superior finish and long-lasting shine for premium interiors.",
    image: "/product3.jpg",
    features: ["Luxury Emulsion", "Premium Finish", "Long Lasting"],
    type: "Luxury Paint",
  },
  {
    id: 4,
    name: "FINE COAT Water Base Primer",
    category: "Primer",
    description: "Interior & exterior water base primer for complete two coat hide and coverage.",
    image: "/product4.jpg",
    features: ["Water Base", "Two Coat Hide", "Complete Coverage"],
    type: "Primer",
  },
  {
    id: 5,
    name: "RIO SHINE Exterior Emulsion",
    category: "Exterior",
    description: "Weather-resistant exterior emulsion with 5-year performance guarantee.",
    image: "/product5.jpg",
    features: ["Exterior Use", "5 Year Warranty", "Weather Resistant"],
    type: "Exterior Paint",
  },
  {
    id: 6,
    name: "NIVA Acrylic Distemper",
    category: "Interior",
    description: "100% acrylic distemper with excellent coverage and smooth finish.",
    image: "/product6.jpg",
    features: ["100% Acrylic", "Excellent Coverage", "Smooth Finish"],
    type: "Distemper",
  },
  {
    id: 7,
    name: "DESIRE SHINE Interior Emulsion",
    category: "Interior",
    description: "Premium interior emulsion paint with beautiful shine and smooth application.",
    image: "/product7.jpg",
    features: ["Interior Use", "High Shine", "Smooth Application"],
    type: "Interior Paint",
  },
  {
    id: 8,
    name: "DAMP PROTECT",
    category: "Specialty",
    description: "Advanced damp protection solution for walls and surfaces up to 5°C temperature resistance.",
    image: "/product8.jpg",
    features: ["Damp Protection", "Up to 5°C", "Advanced Formula"],
    type: "Specialty Paint",
  },
  {
    id: 9,
    name: "RIO ULTRA Weatherproof",
    category: "Exterior",
    description: "Ultra weatherproof exterior emulsion with 8-year performance guarantee.",
    image: "/product9.jpg",
    features: ["Weatherproof", "8 Year Warranty", "Ultra Protection"],
    type: "Exterior Paint",
  },
  {
    id: 10,
    name: "RIO Exterior Emulsion",
    category: "Exterior",
    description: "Reliable exterior emulsion paint with economical protection and good coverage.",
    image: "/product10.jpg",
    features: ["Economical Protection", "Good Coverage", "Exterior Use"],
    type: "Exterior Paint",
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 text-balance">
            Perfect Colors for Every Home
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From interiors to exteriors, Aceme Paints brings style, durability, and a premium finish to make your home shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.type}
                  </Badge>
                </div>

                <CardTitle className="text-lg mb-4 text-card-foreground">{product.name}</CardTitle>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
