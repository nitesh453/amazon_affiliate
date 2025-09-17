




export const metadata = {
  title: "best air fryer in India",
  description:
    " Discover the best air fryers in India for 2025! Learn how air fryers work, health benefits, top brands, and what to look for before buying. Perfect for oil-free cooking lovers.",
    keywords: ["best air fryer in India","air fryer for Indian cooking","oil-free fryer","Philips air fryer review",
"4L digital air fryer",
"air fryer under ₹5000",
"air fryer vs oven"],
  openGraph: {
    title: "best air fryer in India",
    description: "Buying guides and reviews for air fryer.",
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
