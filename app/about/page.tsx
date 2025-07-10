import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in all our products and services, ensuring reliability and performance.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-600" />,
      title: "Innovation",
      description:
        "We continuously seek new and better ways to serve our customers and improve our products and services.",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Reliability",
      description:
        "Count on us for consistent, dependable service and products that you can trust for your critical operations.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Teynova Polychems</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner for quality skincare products, chemical supplies, laboratory equipment,
            and safety solutions across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Teynova Polychems was founded with a vision to provide Zimbabwe with access to high-quality laboratory
                equipment, safety gear, chemical solutions and cosmetic product. We recognized the need for reliable
                suppliers who could serve educational institutions, healthcare facilities, research organizations, and
                industries with products that meet international standards.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have built strong relationships with leading manufacturers worldwide, enabling us to
                offer our customers the best products at competitive prices. Our commitment to excellence has made us a
                trusted name in the industry.
              </p>
              <p className="text-gray-600">
                Today, we continue to expand our product range and improve our services, always with the goal of
                supporting our customers' success and contributing to Zimbabwe's development in education, healthcare,
                and industry.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/marketing-flyer.jpg"
                alt="Teynova Polychems Story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-center p-8 touch-manipulation">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To provide Zimbabwe with access to high-quality laboratory equipment, safety solutions,chemical supplies, and  cosmetic
                  products that enable progress in education, healthcare, research, and industry
                  while maintaining the highest standards of service and reliability.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 touch-manipulation">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  To be Zimbabwe's leading supplier of scientific equipment and chemical solutions, recognized for our
                  commitment to quality, innovation, and customer satisfaction, while contributing to the advancement of
                  science, education, and industry in our nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationships with customers, partners, and
              communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow touch-manipulation">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-gray-600 text-lg">
              We proudly serve a diverse range of institutions and industries across Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md touch-manipulation">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Educational Institutions</h3>
                <p className="text-gray-600">
                  Schools, universities, and colleges requiring laboratory equipment and safety gear for science
                  education.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md touch-manipulation">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Cosmetic Businesses</h3>
                <p className="text-gray-600">
                  Salons, spas, beauty studios, and retailers needing high-quality cosmetic products,
                  skincare essentials, and beauty tools.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md touch-manipulation">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Research Institutions</h3>
                <p className="text-gray-600">
                  Research centers and laboratories requiring precision instruments and analytical chemicals.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md touch-manipulation">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Industrial Companies</h3>
                <p className="text-gray-600">
                  Manufacturing and processing companies needing safety equipment and chemical solutions.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md touch-manipulation">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Government Agencies</h3>
                <p className="text-gray-600">
                  Government departments and agencies requiring specialized equipment and supplies.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md touch-manipulation">
                <h3 className="text-xl font-semibold mb-3 text-red-600">Private Consumers</h3>
                <p className="text-gray-600">
                  Individuals seeking quality cosmetic products and personal care solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
