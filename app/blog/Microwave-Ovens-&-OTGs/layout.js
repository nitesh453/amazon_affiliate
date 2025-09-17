




export const metadata = {
  title: "Best Microwave Ovens & OTGs in India",
  description:
    " best microwave ovens and OTGs in India.Learn about the differences, top models, buying tips, and how to choose the right appliance for your cooking needs.",
    keywords: ["best microwave oven in India","microwave vs OTG","OTG for baking","convection microwave for Indian cooking",
"32L microwave under ₹10,000",
"Philips OTG review",
"baking oven for home"],
  openGraph: {
    title: "Best Microwave Ovens & OTGs in India",
    description: "Buying guides and reviews for Microwave Ovens & OTGs.",
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
