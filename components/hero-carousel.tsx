"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/images/marketing-flyer.jpg",
    title: "Professional Laboratory Equipment",
    subtitle: "Quality scientific instruments for research and education",
  },
  {
    image: "/images/safety-equipment-new.jpg",
    title: "Complete Safety Solutions",
    subtitle: "Protect your team with our comprehensive PPE range",
  },
  {
    image: "/images/complete-chemistry-set.jpg",
    title: "Complete Chemistry Laboratory Sets",
    subtitle: "Everything you need for comprehensive scientific education",
  },
  {
    image: "/images/lab-glassware-new.jpg",
    title: "Professional Laboratory Glassware",
    subtitle: "Precision glassware for accurate scientific measurements",
  },
  {
    image: "/images/teyne-mask-new-1.jpg",
    title: "Premium Cosmetic Products",
    subtitle: "Natural and effective personal care solutions",
  },
  {
    image: "/images/advanced-lab-equipment.jpg",
    title: "Advanced Laboratory Instruments",
    subtitle: "Professional-grade equipment for precise analysis",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500) // 3.5 seconds between slide changes
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleGetQuote = () => {
    const subject = "Quote Request"
    const body =
        "Hello! I would like to get a quote for your products and services. Please provide me with more information"
    const mailtoUrl = `mailto:teynovapolychems1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }


  return (
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 transition-transform duration-[800ms] ease-in-out ${
                    index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                }}
            >
              <div className="relative h-full">
                <Image
                    src={slide.image || "/images/logo1.jpg"} // place holder image
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">{slide.subtitle}</p>
                    <div className="space-x-4 animate-fade-in-delay-2">
                      <Button size="lg" asChild className="touch-manipulation">
                        <a href="/products">View Products</a>
                      </Button>
                      <Button
                          size="lg"
                          variant="outline"
                          onClick={handleGetQuote}
                          className="touch-manipulation bg-transparent"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
        {/* Navigation buttons */}
        <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors touch-manipulation"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors touch-manipulation"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
              <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-colors touch-manipulation ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
              />
          ))}
        </div>
      </div>
  )
}
