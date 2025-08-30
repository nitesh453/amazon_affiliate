import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Truck, Shield, Headphones } from "lucide-react"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "Professional Chef Knife Set",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Non-Stick Cookware Set",
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Sale",
  },
  {
    id: 3,
    name: "Smart Kitchen Scale",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    badge: "New",
  },
  {
    id: 4,
    name: "Stainless Steel Mixing Bowls",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Popular",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Elevate Your
                <span className="text-orange-600"> Kitchen</span>
                <br />
                Experience
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Discover premium kitchen tools and appliances that transform cooking from a chore into a culinary
                adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Shop Now
                  <ShoppingCart className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Collections
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Kitchen Setup"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Quality Guarantee</h3>
              <p className="text-gray-600">30-day money back guarantee</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">Expert customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Handpicked essentials for the modern kitchen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-600">{product.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get the latest kitchen tips, recipes, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-300"
            />
            <Button className="bg-white text-orange-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
