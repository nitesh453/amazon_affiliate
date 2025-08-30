import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-600">kitchenStack</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about transforming kitchens into spaces where culinary dreams come to life. Since 2020,
              we've been curating the finest kitchen tools and appliances for home chefs worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                kitchenStack was born from a simple belief: every home cook deserves access to professional-quality
                tools. Our founders, both passionate chefs, noticed the gap between commercial kitchen equipment and
                what was available to home cooks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We started by sourcing the best knives, cookware, and gadgets from around the world, testing each
                product in our own kitchens before offering them to our customers. Today, we're proud to serve over
                50,000 satisfied customers globally.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Kitchen"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product is carefully tested and vetted.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">Customer Focused</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're here to support your culinary journey.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">Global Reach</h3>
                <p className="text-gray-600">Sourcing the best products from artisans and manufacturers worldwide.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">Passion Driven</h3>
                <p className="text-gray-600">Our love for cooking and great food drives everything we do.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The passionate people behind kitchenStack</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sarah Johnson"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-orange-600 mb-2">Co-Founder & CEO</p>
              <p className="text-gray-600">Former chef with 15 years of experience in Michelin-starred restaurants.</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Michael Chen"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-orange-600 mb-2">Co-Founder & CTO</p>
              <p className="text-gray-600">Tech entrepreneur passionate about bringing innovation to the kitchen.</p>
            </div>

            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Emma Rodriguez"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Emma Rodriguez</h3>
              <p className="text-orange-600 mb-2">Head of Product</p>
              <p className="text-gray-600">Culinary school graduate with expertise in kitchen equipment design.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
