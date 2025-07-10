"use client"
import HeroCarousel from "@/components/hero-carousel"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Beaker, Sparkles, Phone, Mail, MessageCircle } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <Beaker className="h-12 w-12 text-red-600" />,
      title: "Laboratory Equipment",
      description: "Professional scientific instruments for schools, universities, and research institutions.",
      image: "/images/lab-equipment-1.jpg",
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Safety Equipment",
      description: "Complete range of PPE and safety gear to protect your workforce.",
      image: "/images/safety-equipment-2.jpg",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-red-600" />,
      title: "Cosmetic - Hair Care",
      description: "Premium hair care products for healthy, beautiful hair.",
      image: "/images/skin.jpg",
    },
    {
      icon: <Sparkles className="h-12 w-12 text-red-600" />,
      title: "Cosmetic - Facial Care",
      description: "Advanced facial care products for all skin types and concerns.",
      image: "/images/face.jpg",
    },
  ]

  const featuredProducts = [
    {
      name: "Complete Chemistry Laboratory Set",
      image: "/images/complete-chemistry-set.jpg",
      description: "Comprehensive laboratory equipment set with microscopes, glassware, and chemicals",
    },
    {
      name: "Advanced Laboratory Instruments",
      image: "/images/advanced-lab-equipment.jpg",
      description: "Professional heating equipment, scales, and precision instruments",
    },

    {
      name: "Laboratory Heating Equipment",
      image: "/images/lab-heating-equipment.jpg",
      description: "Professional hot plates, stirrers, and heating apparatus",
    },

    {
      name: "Laboratory Glassware Collection",
      image: "/images/lab-glassware-new.jpg",
      description: "High-quality beakers, flasks, test tubes, and measuring equipment",
    },
    {
      name: "Professional Safety Equipment",
      image: "/images/safety-equipment-new.jpg",
      description: "Complete PPE package including respirators, goggles, and protective gear",
    },
    {
      name: "Teyne Acne Treatment Mask",
      image: "/images/teyne-mask-new-2.jpg",
      description: "Effective acne treatment mask for clear, healthy skin",
    },
  ]

  const handleGetQuote = () => {
    const subject = "Quote Request"
    const body =
        "Hello! I would like to get a quote for your products and services. Please provide me with more information"
    const mailtoUrl = `mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroCarousel />

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading Chemical & Equipment Supplier in Zimbabwe</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Teynova Polychems is your trusted partner for high-quality laboratory equipment, safety gear, chemical solutions, and cosmetic
                  products. We serve schools, universities, research institutions, hospitals, and
                  industries across Zimbabwe.
                </p>
                <p className="text-gray-600 mb-8">
                  With years of experience and a commitment to excellence, we provide reliable products that meet
                  international standards and support your success.
                </p>
                <Button size="lg" asChild className="touch-manipulation">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                    src="/images/marketing-flyer.jpg"
                    alt="Teynova Polychems Services"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We provide comprehensive solutions across multiple industries with quality products and expert support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow group touch-manipulation">
                    <CardHeader>
                      <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                      <div className="relative h-32 mb-4 overflow-hidden rounded-md">
                        <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-gray-600 text-lg">Discover our most popular and trusted products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group touch-manipulation">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                  </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild className="touch-manipulation">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a quote or to discuss your specific requirements. Our team is ready to help you find
              the perfect solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="touch-manipulation">
                <a href="tel:+263788303009" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="touch-manipulation bg-transparent">
                <a
                    href="https://wa.me/263788303009?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white border-white hover:bg-white hover:text-red-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </Button>
              <Button size="lg" variant="secondary" onClick={handleGetQuote} className="touch-manipulation">
                <Mail className="h-5 w-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </section>
      </div>
  )
}
