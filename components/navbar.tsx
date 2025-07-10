"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const handleGetQuote = () => {
    const subject = "Quote Request"
    const message =
        "Hello! I would like to get a quote for your products and services. Please provide me with more information."
    const mailtoUrl = `mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.open(mailtoUrl, "_blank")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+263788303009" className="flex items-center space-x-1 hover:text-red-200 touch-manipulation">
              <Phone className="h-3 w-3" />
              <span>+263788303009</span>
            </a>
            <a
              href="mailto:teynovapolychems1@gmail.com"
              className="flex items-center space-x-1 hover:text-red-200 touch-manipulation"
            >
              <Mail className="h-3 w-3" />
              <span>teynovapolychems1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="https://wa.me/263788303009?text=May%20I%20get%20More%20Information%20about%20this?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-red-200 touch-manipulation"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 touch-manipulation">
            <Image src="/images/logo2.jpg" alt="Teynova Polychems" width={140} height={30} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors touch-manipulation"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={handleGetQuote} className="touch-manipulation">
              Get Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="touch-manipulation">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-red-600 transition-colors touch-manipulation"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    handleGetQuote()
                    setIsOpen(false)
                  }}
                  className="mt-4 touch-manipulation"
                >
                  Get Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
