import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo.jpg"
              alt="Teynova Polychems"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">
              Leading supplier of cosmetics, chemicals, and pest control solutions across Zimbabwe. Quality products for
              laboratories, industries, and personal care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors touch-manipulation">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors touch-manipulation">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors touch-manipulation">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors touch-manipulation">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors touch-manipulation">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors touch-manipulation">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors touch-manipulation">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors touch-manipulation">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors touch-manipulation">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Laboratory Equipment</li>
              <li className="text-gray-300">Safety Equipment</li>
              <li className="text-gray-300">Cosmetic Products</li>
              <li className="text-gray-300">Chemical Supplies</li>
              <li className="text-gray-300">Pest Control</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <a
                    href="https://maps.google.com/?q=Harare,Zimbabwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors touch-manipulation"
                  >
                    Harare, Zimbabwe
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <div>
                  <a
                    href="tel:+263783030009"
                    className="text-gray-300 hover:text-white transition-colors touch-manipulation block"
                  >
                    +263 783 030 009
                  </a>
                  <a
                    href="tel:+263778855787"
                    className="text-gray-300 hover:text-white transition-colors touch-manipulation block"
                  >
                    +263 77 885 5787
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <a
                  href="mailto:info@teynova.co.zw?subject=Inquiry%20about%20Teynova%20Products&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20get%20more%20information%20about%20your%20products%20and%20services.%0D%0A%0D%0AThank%20you."
                  className="text-gray-300 hover:text-white transition-colors touch-manipulation"
                >
                  info@teynova.co.zw
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Teynova Polychems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
