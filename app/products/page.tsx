"use client"
import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Beaker, Shield, Sparkles, Award, Users } from "lucide-react"
import { useState } from "react"
import ExpandedProducts from "./expanded-products"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    // Scroll to top of page instead of filtered-products section
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const allFeaturedProducts = {
    cosmetics: [
      {
        name: "Teyne Acne Treatment Mask - Premium",
        image: "/images/face.jpg",
        description: "Premium acne treatment mask with natural ingredients for clear, healthy skin",
        category: "Cosmetics",
      },
      {
        name: "Teyne Acne Treatment Mask - Classic",
        image: "/images/skin.jpg",
        description: "Classic formula acne treatment mask for effective blemish control",
        category: "Cosmetics",
      },
      {
        name: "Teyne Acne Treatment Mask - Original",
        image: "/images/teyne-mask-new-1.jpg",
        description: "Original formula acne treatment mask for all skin types",
        category: "Cosmetics",
      },
      {
        name: "Teyne Acne Treatment Mask - Sensitive",
        image: "/images/teyne-mask-new-2.jpg",
        description: "Gentle formula designed for sensitive skin with effective treatment",
        category: "Cosmetics",
      },
      {
        name: "Teynoc Dreadloc Cleanser",
        image: "/images/teyne-mask-3.jpg",
        description: "Professional dreadlock cleanser with natural ingredients",
        category: "Cosmetics",
      },
      {
        name: "Teyne Anti-Aging Serum",
        image: "/images/teyne-mask-2.jpg",
        description: "Advanced anti-aging serum with natural peptides and antioxidants",
        category: "Cosmetics",
      },
      {
        name: "Natural Hair Strengthening Oil",
        image: "/images/teyne-mask-1.jpg",
        description: "Nourishing hair oil blend with essential oils for hair protection",
        category: "Cosmetics",
      },
      {
        name: "Teyne Moisturizing Face Cream",
        image: "/images/teyne-mask-3.jpg",
        description: "Deep moisturizing cream for dry and sensitive skin",
        category: "Cosmetics",
      },
      {
        name: "Teynoc Hair Growth Treatment",
        image: "/images/teyne-mask-2.jpg",
        description: "Advanced hair growth treatment with natural botanicals",
        category: "Cosmetics",
      },
      {
        name: "Teyne Exfoliating Face Scrub",
        image: "/images/face.jpg",
        description: "Gentle exfoliating scrub for smooth and radiant skin",
        category: "Cosmetics",
      },
    ],
    "industrial-safety": [
      {
        name: "Professional Safety Equipment Kit",
        image: "/images/sf1.jpg",
        description: "Complete PPE package with respirators, goggles, and protective gear",
        category: "Industrial Safety",
      },
      {
        name: "Industrial Safety Gear Set",
        image: "/images/sf2.jpg",
        description: "Comprehensive safety equipment for industrial workers",
        category: "Industrial Safety",
      },
      {
        name: "High-Visibility Safety Clothing",
        image: "/images/safety-equipment-new.jpg",
        description: "ANSI compliant high-visibility clothing for construction sites",
        category: "Industrial Safety",
      },
      {
        name: "Chemical Resistant Safety Suits",
        image: "/images/safety-equipment-2.jpg",
        description: "Professional chemical resistant suits for hazardous environments",
        category: "Industrial Safety",
      },
      {
        name: "Safety Goggles and Face Shields",
        image: "/images/safety googles.jpg",
        description: "Eye and face protection equipment for various industries",
        category: "Industrial Safety",
      },
      {
        name: "Respiratory Protection Equipment",
        image: "/images/respitory.jpg",
        description: "N95 and P100 respirator masks for airborne protection",
        category: "Industrial Safety",
      },
      {
        name: "Hard Hats and Safety Helmets",
        image: "/images/safety-equipment-new.jpg",
        description: "OSHA compliant hard hats for construction and industrial use",
        category: "Industrial Safety",
      },
      {
        name: "Safety Gloves Collection",
        image: "/images/safety-equipment-2.jpg",
        description: "Cut-resistant and chemical-resistant safety gloves",
        category: "Industrial Safety",
      },
      {
        name: "Fall Protection Equipment",
        image: "/images/fall.jpg",
        description: "Harnesses and fall arrest systems for height work",
        category: "Industrial Safety",
      },

    ],
    "lab-equipment": [
      {
        name: "Complete Chemistry Laboratory Set",
        image: "/images/chemistry.jpg",
        description: "Comprehensive laboratory equipment set with microscopes and glassware",
        category: "Laboratory",
      },
      {
        name: "Advanced Laboratory Instruments",
        image: "/images/Laboratory Heating Equipment - Advanced.jpg",
        description: "Professional heating equipment, scales, and precision instruments",
        category: "Laboratory",
      },
      {
        name: "Laboratory Glassware Collection",
        image: "/images/labglass.jpg",
        description: "High-quality borosilicate glassware for precise measurements",
        category: "Laboratory",
      },
      {
        name: "Chemistry Lab Complete Setup",
        image: "/images/chemlab.jpg",
        description: "Complete chemistry laboratory setup with safety equipment",
        category: "Laboratory",
      },
      {
        name: "Laboratory Heating Equipment",
        image: "/images/lab-heating-equipment.jpg",
        description: "Professional hot plates, stirrers, and heating apparatus",
        category: "Laboratory",
      },
      {
        name: "Precision Laboratory Scales",
        image: "/images/advanced-lab-equipment.jpg",
        description: "High-precision digital scales for accurate measurements",
        category: "Laboratory",
      },
      {
        name: "Educational Lab Equipment Set",
        image: "/images/complete-chemistry-set.jpg",
        description: "Perfect laboratory equipment set for educational institutions",
        category: "Laboratory",
      },
      {
        name: "Professional Glassware Set",
        image: "/images/lab-glassware-new.jpg",
        description: "Professional grade laboratory glassware collection",
        category: "Laboratory",
      },
      {
        name: "Laboratory Safety Equipment",
        image: "/images/WhatsApp Image 2025-07-02 at 18.28.29_141d0055.jpg",
        description: "Essential safety equipment for laboratory environments",
        category: "Laboratory",
      },
      {
        name: "Analytical Instruments Package",
        image: "/images/WhatsApp Image 2025-07-02 at 18.28.32_15731971.jpg",
        description: "Complete analytical instruments for research facilities",
        category: "Laboratory",
      },
    ],
    all: [
      {
        name: "Complete Chemistry Laboratory Set",
        image: "/images/complete-chemistry-set.jpg",
        description: "Comprehensive laboratory equipment set with microscopes and glassware",
        category: "Laboratory",
      },
      {
        name: "Advanced Laboratory Instruments",
        image: "/images/advanced-lab-equipment.jpg",
        description: "Professional heating equipment, digital scales, and precision instruments",
        category: "Laboratory",
      },

      {
        name: "Laboratory Glassware Collection",
        image: "/images/lab-glassware-new.jpg",
        description: "High-quality beakers, flasks, test tubes, and precision measuring equipment",
        category: "Laboratory",
      },
      {
        name: "Laboratory Heating Equipment",
        image: "/images/lab.jpg",
        description: "Professional hot plates, magnetic stirrers, and heating apparatus for laboratory use",
        category: "Laboratory",
      },
      {
        name: "Safety Equipment",
        image: "/images/safetyshoe.jpg",
        description: "Protective gear including gloves, goggles, face shields, and safety cabinets for secure lab operations",
        category: "Safety",
      },
      {
        name: "Professional Safety Equipment Kit",
        image: "/images/safety-equipment-new.jpg",
        description: "Complete PPE package including respirators, safety goggles, and protective gear",
        category: "Safety",
      },
      {
        name: "Facial Care Products",
        image: "/images/face.jpg",
        description: "Soothing cleansers, exfoliants, and moisturizers designed for glowing, healthy skin",
        category: "Cosmetics",
      },
      {
        name: "Teyne Acne Treatment Mask",
        image: "/images/teyne-mask-new-1.jpg",
        description: "Premium acne treatment mask for clear, healthy skin with natural ingredients",
        category: "Cosmetics",
      },
    ],
  }

  const getFeaturedProducts = () => {
    if (selectedCategory === "lab-equipment") return allFeaturedProducts["lab-equipment"]
    if (selectedCategory === "industrial-safety") return allFeaturedProducts["industrial-safety"]
    if (selectedCategory === "cosmetics") return allFeaturedProducts.cosmetics

    return allFeaturedProducts.all
  }

  const productCategories = [

    {
      icon: <Beaker className="h-12 w-12 text-red-600" />,
      title: "Lab Equipment & Accessories",
      description: "Professional scientific instruments and apparatus",
      image: "/images/advanced-lab-equipment.jpg",
      products: [
        "Microscopes and magnifiers",
        "Beakers, flasks, and glassware",
        "Measuring instruments",
        "Heating and cooling equipment",
        "pH meters and electrodes",
        "Centrifuges and mixers",
        "Digital precision scales",
        "Laboratory furniture",
        "Sample containers",
        "Calibration standards",
      ],
    },

    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Industrial Safety Wear",
      description: "Complete range of personal protective equipment",
      image: "/images/safety-equipment-new.jpg",
      products: [
        "Safety goggles and face shields",
        "Protective gloves and clothing",
        "Hard hats and helmets",
        "Respirators and masks",
        "Safety boots and footwear",
        "First aid kits and supplies",
        "High-visibility clothing",
        "Fall protection equipment",
        "Hearing protection devices",
        "Chemical resistant suits",
      ],
    },

    {
      icon: <Sparkles className="h-12 w-12 text-red-600" />,
      title: "Cosmetics",
      description: "Premium personal care and beauty solutions",
      image: "/images/skin.jpg",
      subcategories: [
        {
          name: "Hair Care",
          products: [
            "Teynoc Dreadloc Cleanser",
            "Hair growth treatments",
            "Scalp care products",
            "Natural hair oils",
            "Hair strengthening masks",
            "Protective styling products",
          ],
        },
        {
          name: "Facial Care",
          products: [
            "Teyne acne treatment masks",
            "Anti-aging serums",
            "Moisturizing creams",
            "Cleansing products",
            "Exfoliating treatments",
            "Natural face masks",
          ],
        },
      ],
    },
  ]

  //email handling Quote
  const handleGetQuote = () => {
    const subject = "Quote Request"
    const body = "Hello! I would like to get a quote for your products and services. Please provide me with more information."

    window.open(`mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank")
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

        {/* Category Navigation Dropdown */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
              <div className="max-w-md mx-auto">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="lab-equipment">Lab Equipment & Accessories</SelectItem>
                    <SelectItem value="industrial-safety">Industrial Safety Wear</SelectItem>
                    <SelectItem value="cosmetics">Cosmetics (Hair care & Facial care)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-gray-600 text-lg">
                {selectedCategory === "cosmetics"
                    ? "Discover our most popular cosmetic and beauty products"
                    : selectedCategory === "industrial-safety"
                        ? "Discover our most trusted safety equipment and protective gear"
                        : selectedCategory === "lab-equipment"
                            ? "Discover our most popular laboratory equipment and instruments"
                            : "Discover our most popular and trusted products"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {getFeaturedProducts().map((product, index) => (
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
                      <CardTitle className="text-sm">{product.name}</CardTitle>
                      <CardDescription className="text-xs">{product.description}</CardDescription>
                    </CardHeader>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="filtered-products">
          <ExpandedProducts selectedCategory={selectedCategory} />
        </section>

        {/* Product Categories */}
        <section id="category-products" className="py-16 bg-gray-50">
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

                        {category.subcategories ? (
                            <div className="space-y-4 mb-4">
                              {category.subcategories.map((subcategory, subIndex) => (
                                  <div key={subIndex}>
                                    <h4 className="font-semibold text-sm text-red-600 mb-2">{subcategory.name}</h4>
                                    <ul className="space-y-1 text-sm text-gray-600">
                                      {subcategory.products.slice(0, 3).map((product, productIndex) => (
                                          <li key={productIndex} className="flex items-center">
                                            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                            {product}
                                          </li>
                                      ))}
                                    </ul>
                                  </div>
                              ))}
                            </div>
                        ) : (
                            <ul className="space-y-1 text-sm text-gray-600 mb-4">
                              {category.products.slice(0, 6).map((product, productIndex) => (
                                  <li key={productIndex} className="flex items-center">
                                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                    {product}
                                  </li>
                              ))}
                            </ul>
                        )}

                        <Button
                            variant="outline"
                            size="sm"
                            className="touch-manipulation bg-transparent"
                            onClick={() => {
                              if (category.title === "Lab Equipment & Accessories") {
                                setSelectedCategory("lab-equipment")
                              } else if (category.title === "Industrial Safety Wear") {
                                setSelectedCategory("industrial-safety")
                              } else if  (category.title === "Cosmetics") {
                              setSelectedCategory("cosmetics")
                              }
                              // Scroll to top of page instead of filtered-products section
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }}
                        >
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
