import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, TrendingUp, FlameIcon as Fire, Eye } from "lucide-react"
import Image from "next/image"

const trendingProducts = [
  {
    id: 1,
    name: "Air Fryer Pro Max",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 342,
    image: "/placeholder.svg?height=300&width=300",
    badge: "🔥 Hot",
    trend: "+45%",
    views: "2.3k views today",
  },
  {
    id: 2,
    name: "Smart Coffee Maker",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.7,
    reviews: 189,
    image: "/placeholder.svg?height=300&width=300",
    badge: "📈 Rising",
    trend: "+32%",
    views: "1.8k views today",
  },
  {
    id: 3,
    name: "Ceramic Knife Set",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 267,
    image: "/placeholder.svg?height=300&width=300",
    badge: "⚡ Viral",
    trend: "+67%",
    views: "3.1k views today",
  },
  {
    id: 4,
    name: "Bamboo Cutting Board Set",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    badge: "🌟 Popular",
    trend: "+28%",
    views: "1.2k views today",
  },
  {
    id: 5,
    name: "Silicone Baking Mats",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 423,
    image: "/placeholder.svg?height=300&width=300",
    badge: "💎 Premium",
    trend: "+51%",
    views: "2.7k views today",
  },
  {
    id: 6,
    name: "Stainless Steel Cookware",
    price: 349.99,
    originalPrice: 449.99,
    rating: 4.9,
    reviews: 198,
    image: "/placeholder.svg?height=300&width=300",
    badge: "👑 Luxury",
    trend: "+39%",
    views: "1.9k views today",
  },
]

const categories = [
  { name: "Kitchen Appliances", count: 45, trend: "+23%" },
  { name: "Cookware", count: 32, trend: "+18%" },
  { name: "Knives & Tools", count: 28, trend: "+41%" },
  { name: "Bakeware", count: 19, trend: "+15%" },
  { name: "Storage", count: 24, trend: "+29%" },
]

export default function TrendingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="h-8 w-8 text-red-600" />
              <Fire className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-red-600">Appliances</span> Now
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover what's hot in the kitchen! These are the most popular products that everyone is talking about
              right now.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  <p className="text-2xl font-bold text-orange-600">{category.count}</p>
                  <div className="flex items-center justify-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{category.trend}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Most Popular Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These kitchen essentials are flying off our shelves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-2 right-2 z-10">
                  <Badge className="bg-red-600 text-white">{product.badge}</Badge>
                </div>

                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
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

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-medium">{product.trend}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>{product.views}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 group-hover:scale-105 transition-transform">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Alert */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Fire className="h-8 w-8 text-white animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Don't Miss Out!</h2>
              <Fire className="h-8 w-8 text-white animate-pulse" />
            </div>
            <p className="text-xl text-red-100 mb-8">
              These trending items are selling fast. Get yours before they're gone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Shop All Trending
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                Set Price Alerts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
