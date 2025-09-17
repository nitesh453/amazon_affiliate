




export const metadata = {
  title: "7 Must-Have Small Kitchen Appliances for Modern Indian Homes",
  description:
    "Indian kitchens are evolving with smart, compact appliances that simplify cooking devices like rice cookers, yogurt makers, egg boilers, and more can transform your daily routine. ",
    keywords: ["buy electric rice cooker online India","automatic yogurt maker price","portable ice cube maker machine","best electric egg boiler India",
"roti maker machine reviews",
"popcorn maker for home use",
"mini chopper for Indian cooking"],
  openGraph: {
    title: "7 Must-Have Small Kitchen Appliances for Modern Indian Homes",
    description: "Buying guides and reviews for Small Kitchen Appliances.",
    url: "https://kitchenstack.in",
    siteName: "KitchenStack",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitchen Appliances",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KitchenStack - Best Kitchen Appliances",
    description: "Discover top kitchen essentials and guides.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://kitchenstack.in",
  }
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        
        <main>{children}</main>
        
      </body>
    </html>
  )
}
