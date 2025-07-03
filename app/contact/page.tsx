"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission via WhatsApp
    const message = `Hello! I would like to get a quote for your products and services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interest: ${formData.service}
Message: ${formData.message}

Please provide me with more information.`

    const whatsappUrl = `https://wa.me/263778855787?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleGetQuote = () => {
    const message =
      "Hello! I would like to get a quote for your products and services. Please provide me with more information"
    window.open(`https://wa.me/263778855787?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team for quotes, support, or any questions about our products and services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow touch-manipulation">
              <CardHeader>
                <div className="mx-auto mb-4 bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a
                    href="tel:+263783030009"
                    className="block text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                  >
                    +263 783 030 009
                  </a>
                  <a
                    href="tel:+263778855787"
                    className="block text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                  >
                    +263 77 885 5787
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow touch-manipulation">
              <CardHeader>
                <div className="mx-auto mb-4 bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:info@teynova.co.zw?subject=Quote%20Request&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information.%0D%0A%0D%0AThank%20you."
                  className="text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                >
                  info@teynova.co.zw
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow touch-manipulation">
              <CardHeader>
                <div className="mx-auto mb-4 bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/263778855787?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                >
                  Chat with us
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow touch-manipulation">
              <CardHeader>
                <div className="mx-auto mb-4 bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://maps.google.com/?q=Harare,Zimbabwe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                >
                  Harare, Zimbabwe
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="touch-manipulation">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="touch-manipulation"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="touch-manipulation"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="touch-manipulation"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="touch-manipulation"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="touch-manipulation">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laboratory">Laboratory Equipment</SelectItem>
                        <SelectItem value="safety">Safety Equipment</SelectItem>
                        <SelectItem value="cosmetics">Cosmetic Products</SelectItem>
                        <SelectItem value="chemicals">Chemical Supplies</SelectItem>
                        <SelectItem value="pest-control">Pest Control</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Please describe your requirements or questions..."
                      required
                      className="touch-manipulation"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full touch-manipulation">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="touch-manipulation">
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-gray-600">8:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="text-gray-600">Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="touch-manipulation">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button asChild className="w-full touch-manipulation" size="lg">
                      <a href="tel:+263778855787" className="flex items-center justify-center">
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent touch-manipulation" size="lg">
                      <a
                        href="https://wa.me/263778855787?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      onClick={handleGetQuote}
                      variant="outline"
                      className="w-full bg-transparent touch-manipulation"
                      size="lg"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="touch-manipulation">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Fast response within 24 hours
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Competitive pricing and quotes
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Expert technical support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Nationwide delivery service
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Quality guaranteed products
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Urgent Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            For urgent orders or emergency support, contact us directly via phone or WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="touch-manipulation">
              <a href="tel:+263778855787" className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +263 77 885 5787
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="touch-manipulation bg-transparent">
              <a
                href="https://wa.me/263778855787?text=Hello!%20I%20need%20urgent%20assistance.%20Please%20provide%20me%20with%20more%20information%20about%20your%20products%20and%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white border-white hover:bg-white hover:text-red-600"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
