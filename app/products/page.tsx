"use client"

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Beaker, Shield, Sparkles, Bug, Microscope, FlaskConical, Award, Users } from "lucide-react"
import ExpandedProducts from "./expanded-products"

export default function ProductsPage() {
  const featuredProducts = [
    {
      name: "Complete Chemistry Laboratory Set",
      image: "/images/complete-chemistry-set.jpg",
      description:
        "Comprehensive laboratory equipment set with microscopes, glassware, and chemicals for educational institutions",
      category: "Laboratory",
    },
    {
      name: "Advanced Laboratory Instruments",
      image: "/images/advanced-lab-equipment.jpg",
      description: "Professional heating equipment, digital scales, and precision measuring instruments",
      category: "Laboratory",
    },
    {
      name: "Professional Safety Equipment Kit",
      image: "/images/safety-equipment-new.jpg",
      description: "Complete PPE package including respirators, safety goggles, and protective gear",
      category: "Safety",
    },
    {
      name: "Laboratory Glassware Collection",
      image: "/images/lab-glassware-new.jpg",
      description: "High-quality beakers, flasks, test tubes, and precision measuring equipment",
      category: "Laboratory",
    },
    {
      name: "Laboratory Heating Equipment",
      image: "/images/lab-heating-equipment.jpg",
      description: "Professional hot plates, magnetic stirrers, and heating apparatus for laboratory use",
      category: "Laboratory",
    },
    {
      name: "Teyne Acne Treatment Mask",
      image: "/images/teyne-mask-new-1.jpg",
      description: "Premium acne treatment mask for clear, healthy skin with natural ingredients",
      category: "Cosmetics",
    },
  ]

  const productCategories = [
    {
      icon: <Beaker className="h-12 w-12 text-red-600" />,
      title: "Laboratory Equipment",
      description: "Professional scientific instruments and apparatus",
      image: "/images/complete-chemistry-set.jpg",
      products: [
        "Microscopes and magnifiers",
        "Beakers, flasks, and glassware",
        "Measuring instruments",
        "Heating and cooling equipment",
        "pH meters and electrodes",
        "Centrifuges and mixers",
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Safety Equipment",
      description: "Complete range of personal protective equipment",
      image: "/images/safety-equipment-new.jpg",
      products: [
        "Safety goggles and face shields",
        "Protective gloves and clothing",
        "Hard hats and helmets",
        "Respirators and masks",
        "Safety boots and footwear",
        "First aid kits and supplies",
      ],
    },
    {
      icon: <FlaskConical className="h-12 w-12 text-red-600" />,
      title: "Analytical Chemicals",
      description: "High-purity chemicals for research and analysis",
      image: "/images/lab-glassware-new.jpg",
      products: [
        "Reagent grade chemicals",
        "Buffer solutions",
        "Indicators and dyes",
        "Solvents and acids",
        "Standards and references",
        "Specialty chemicals",
      ],
    },
    {
      icon: <Sparkles className="h-12 w-12 text-red-600" />,
      title: "Cosmetic Products",
      description: "Premium personal care and beauty solutions",
      image: "/images/teyne-mask-new-2.jpg",
      products: [
        "Teyne acne treatment masks",
        "Teynoc hair care products",
        "Skin care treatments",
        "Natural beauty products",
        "Anti-aging solutions",
        "Specialized treatments",
      ],
    },
    {
      icon: <Bug className="h-12 w-12 text-red-600" />,
      title: "Pest Control",
      description: "Effective solutions for pest management",
      image: "/images/safety-equipment-2.jpg",
      products: [
        "Insecticides and pesticides",
        "Rodent control solutions",
        "Fumigation chemicals",
        "Biological control agents",
        "Application equipment",
        "Monitoring devices",
      ],
    },
    {
      icon: <Microscope className="h-12 w-12 text-red-600" />,
      title: "Medical Consumables",
      description: "Essential supplies for healthcare facilities",
      image: "/images/lab-equipment-1.jpg",
      products: [
        "Disposable gloves and masks",
        "Syringes and needles",
        "Test tubes and containers",
        "Bandages and dressings",
        "Disinfectants and cleaners",
        "Diagnostic test kits",
      ],
    },
  ]

  const handleGetQuote = () => {
    const message =
      "Hello! I would like to get a quote for your products and services. Please provide me with more information."
    window.open(`https://wa.me/263778855787?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive range of laboratory equipment, safety gear, cosmetics, and chemical solutions
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Discover our most popular and trusted products</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group touch-manipulation">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                    {product.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ExpandedProducts />

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive range of products across different categories
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow touch-manipulation">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-1 text-sm text-gray-600 mb-4">
                      {category.products.map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="touch-manipulation bg-transparent">
                      View Products
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              All our products meet international quality standards and are sourced from reputable manufacturers. We
              ensure that every item we supply is tested, certified, and ready for professional use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Products</h3>
              <p className="text-gray-600">All products meet international quality and safety standards</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Testing</h3>
              <p className="text-gray-600">Rigorous testing ensures product reliability and performance</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional guidance and technical support for all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us for custom orders and specialized requirements.
          </p>
          <Button size="lg" variant="secondary" onClick={handleGetQuote} className="touch-manipulation">
            Get Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
