
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "kitchenStack - Premium Kitchen Tools & Appliances",
  description:
    "Discover premium kitchen tools and appliances that transform cooking from a chore into a culinary adventure. Shop the best cookware, knives, and kitchen gadgets.",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
