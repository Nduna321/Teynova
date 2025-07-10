"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MessageCircle } from "lucide-react"

interface ProductProps {
  name: string
  image: string
  description: string
  category: string
  features?: string[]
  price?: string
}

export default function IndividualProduct({ name, image, description, category, features, price }: ProductProps) {
  const handleWhatsAppInquiry = () => {
    const message = `Hello! I would like to get a quote for ${name}. Please provide me with more information about pricing, availability, and specifications.`
    window.open(`https://wa.me/263788303009?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEmailInquiry = () => {
    const subject = `Quote Request for ${name}`
    const body = `Hello,\n\nI would like to get a quote for ${name}.\n\nPlease provide me with more information about:\n- Pricing\n- Availability\n- Specifications\n- Delivery options\n\nThank you.`
    window.open(
        `mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_blank",
    )
  }

  const handleGetQuote = () => {
    const message =
        "Hello! I would like to get a quote for your products and services. Please provide me with more information"
    window.open(`https://wa.me/263788303009?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow touch-manipulation">
        <div className="relative h-64 overflow-hidden">
          <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover hover:scale-105 transition-transform"
          />
          <Badge className="absolute top-2 right-2 bg-red-600 text-white">{category}</Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
          {price && <div className="text-lg font-semibold text-red-600">{price}</div>}
        </CardHeader>
        <CardContent>
          {features && (
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  {features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                  ))}
                </ul>
              </div>
          )}
          <div className="flex flex-col space-y-2">
            <Button onClick={handleGetQuote} className="w-full touch-manipulation">
              <MessageCircle className="h-4 w-4 mr-2" />
              Get Quote
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" asChild className="touch-manipulation bg-transparent">
                <a href="tel:+263788303009">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </a>
              </Button>
              <Button
                  variant="outline"
                  size="sm"
                  onClick={handleEmailInquiry}
                  className="touch-manipulation bg-transparent"
              >
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
  )
}
