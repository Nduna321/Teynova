import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Headphones, Award, Clock, Users, Settings } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-red-600" />,
      title: "Nationwide Delivery",
      description: "Fast and reliable delivery across all provinces of Zimbabwe",
      image: "/images/safety-equipment-new.jpg",
      features: [
        "Same-day delivery in Harare",
        "2-3 day delivery nationwide",
        "Secure packaging and handling",
        "Real-time tracking",
        "Bulk order logistics",
      ],
    },
    {
      icon: <Headphones className="h-12 w-12 text-red-600" />,
      title: "Technical Support",
      description: "Expert guidance and technical assistance for all products",
      image: "/images/complete-chemistry-set.jpg",
      features: [
        "Product selection guidance",
        "Installation support",
        "Training and workshops",
        "Troubleshooting assistance",
        "Maintenance advice",
      ],
    },
    {
      icon: <Award className="h-12 w-12 text-red-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and product certification",
      image: "/images/lab-glassware-new.jpg",
      features: [
        "International standards compliance",
        "Product testing and validation",
        "Quality certificates",
        "Batch tracking",
        "Return and exchange policy",
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-red-600" />,
      title: "Consultation Services",
      description: "Professional consultation for laboratory setup and safety planning",
      image: "/images/advanced-lab-equipment.jpg",
      features: [
        "Laboratory design consultation",
        "Safety assessment and planning",
        "Equipment recommendations",
        "Budget planning assistance",
        "Compliance guidance",
      ],
    },
    {
      icon: <Settings className="h-12 w-12 text-red-600" />,
      title: "Custom Solutions",
      description: "Tailored solutions for specific industry requirements",
      image: "/images/lab-heating-equipment.jpg",
      features: [
        "Custom product sourcing",
        "Bulk order discounts",
        "Specialized packaging",
        "Private labeling options",
        "Industry-specific solutions",
      ],
    },
    {
      icon: <Clock className="h-12 w-12 text-red-600" />,
      title: "After-Sales Support",
      description: "Comprehensive support after purchase",
      image: "/images/teyne-mask-new-3.jpg",
      features: [
        "Warranty support",
        "Replacement parts",
        "Maintenance services",
        "Product updates",
        "Customer feedback system",
      ],
    },
  ]

  const industries = [
    {
      name: "Education",
      description: "Schools, universities, and training institutions",
      image: "/images/complete-chemistry-set.jpg",
      services: ["Laboratory setup", "Safety equipment", "Educational materials", "Training programs"],
    },
    {
      name: "Healthcare",
      description: "Hospitals, clinics, and medical laboratories",
      image: "/images/safety-equipment-new.jpg",
      services: ["Medical equipment", "Safety supplies", "Diagnostic tools", "Consumables"],
    },
    {
      name: "Research",
      description: "Research institutions and development centers",
      image: "/images/advanced-lab-equipment.jpg",
      services: ["Analytical instruments", "Research chemicals", "Specialized equipment", "Technical support"],
    },
    {
      name: "Industry",
      description: "Manufacturing and processing companies",
      image: "/images/lab-heating-equipment.jpg",
      services: ["Industrial safety", "Process chemicals", "Quality control", "Compliance solutions"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive support services to ensure your success with our products
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">
              Beyond products, we provide comprehensive services to support your operations
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow touch-manipulation">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
            <p className="text-gray-600 text-lg">Specialized services tailored to different industry needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group touch-manipulation">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{industry.name}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg">Our streamlined process ensures you get exactly what you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your requirements and provide expert recommendations</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quotation</h3>
              <p className="text-gray-600">Receive detailed quotes with competitive pricing and delivery terms</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Fast, secure delivery with real-time tracking and updates</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Ongoing support, training, and maintenance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and discover how we can support your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="touch-manipulation">
              <a href="/contact">Contact Us</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="touch-manipulation bg-transparent">
              <a
                href="https://wa.me/263778855787?text=Hello%2C%20I%20would%20like%20to%20discuss%20my%20requirements%20and%20get%20support."
                className="text-white border-white hover:bg-white hover:text-red-600"
              >
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
