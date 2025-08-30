"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, Menu, ChefHat, TrendingUp, Utensils, Coffee } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-600 rounded-lg">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              kitchen<span className="text-orange-600">Stack</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/50 to-orange-700/50 p-6 no-underline outline-none focus:shadow-md"
                          href="/tranding"
                        >
                          <TrendingUp className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">Trending Now</div>
                          <p className="text-sm leading-tight text-orange-100">
                            Discover the hottest kitchen products everyone's talking about.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-1">
                      <Link
                        href="cookware"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <Utensils className="h-4 w-4" />
                          Cookware
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional-grade pots, pans, and cooking essentials.
                        </p>
                      </Link>
                      <Link
                        href="/appliances"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <Coffee className="h-4 w-4" />
                          Appliances
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Smart kitchen appliances for modern cooking.
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/tranding" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Trending
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

             
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="search" placeholder="Search products..." className="pl-10 pr-4" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-orange-600">
                3
              </Badge>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  <Link
                    href="/"
                    className="text-lg font-medium hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/trending"
                    className="text-lg font-medium hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Trending
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="text-lg font-medium hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
