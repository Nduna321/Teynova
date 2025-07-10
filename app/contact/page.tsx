"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, Info } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "info" | null
    message: string
  }>({ type: null, message: "" })

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Create email content
    const subject = `Contact Form Submission from ${formData.name}`
    const body = `Hello,

I would like to get a quote for your products and services.

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Service Interest: ${formData.service || "Not specified"}

Message:
${formData.message}

Please provide me with more information.

Thank you.`

    // Create mailto link
    const mailtoLink = `mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Small delay to show loading state
    setTimeout(() => {
      // Open email client
      window.location.href = mailtoLink

      setSubmitStatus({
        type: "info",
        message:
            "Your email client should now be open with a pre-filled message. Please click 'Send' in your email application to complete sending the message.",
      })

      // Reset form after opening email client
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })
      setErrors({})
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
    // Clear submit status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" })
    }
  }

  const handleGetQuote = () => {
    const subject = "Quote Request"
    const body =
        "Hello! I would like to get a quote for your products and services. Please provide me with more information."
    const mailtoLink = `mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
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
                        href="tel:+263788303009"
                        className="block text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                    >
                      +263 788 303 009
                    </a>
                    <a
                        href="tel:+263783260856"
                        className="block text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                    >
                      +263 78 326 0856
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
                      href="mailto:teynovapolychems1@gmail.com?subject=Quote%20Request&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information.%0D%0A%0D%0AThank%20you."
                      className="text-gray-600 hover:text-red-600 transition-colors touch-manipulation"
                  >
                    teynovapolychems1@gmail.com
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
                      href="https://wa.me/263788303009?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information"
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
                  <CardDescription>
                    Fill out the form below and we'll open your email client with a pre-filled message
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Status Messages */}
                  {submitStatus.type && (
                      <div
                          className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                              submitStatus.type === "success"
                                  ? "bg-green-50 text-green-800 border border-green-200"
                                  : submitStatus.type === "info"
                                      ? "bg-blue-50 text-blue-800 border border-blue-200"
                                      : "bg-red-50 text-red-800 border border-red-200"
                          }`}
                      >
                        {submitStatus.type === "success" ? (
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        ) : submitStatus.type === "info" ? (
                            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        ) : (
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        )}
                        <p>{submitStatus.message}</p>
                      </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className={`touch-manipulation ${errors.name ? "border-red-500" : ""}`}
                            disabled={isSubmitting}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className={`touch-manipulation ${errors.email ? "border-red-500" : ""}`}
                            disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                            disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Your Name</Label>
                        <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="touch-manipulation"
                            placeholder="Company name or your name"
                            disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => handleChange("service", value)} disabled={isSubmitting}>
                        <SelectTrigger className="touch-manipulation">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laboratory">Laboratory Equipment</SelectItem>
                          <SelectItem value="safety">Safety Equipment</SelectItem>
                          <SelectItem value="cosmetics">Cosmetic Products</SelectItem>
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
                          className={`touch-manipulation ${errors.message ? "border-red-500" : ""}`}
                          disabled={isSubmitting}
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <Button type="submit" size="lg" className="w-full touch-manipulation" disabled={isSubmitting}>
                      {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Opening Email Client...
                          </>
                      ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                      )}
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
                        <a href="tel:+263788303009" className="flex items-center justify-center">
                          <Phone className="h-5 w-5 mr-2" />
                          Call Now
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent touch-manipulation" size="lg">
                        <a
                            href="https://wa.me/263788303009?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20products%20and%20services.%20Please%20provide%20me%20with%20more%20information"
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
                <a href="tel:+263788303009" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  +263 78 830 3009
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="touch-manipulation bg-transparent">
                <a
                    href="https://wa.me/263788303009?text=Hello!%20I%20need%20urgent%20assistance.%20Please%20provide%20me%20with%20more%20information%20about%20your%20products%20and%20services."
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

