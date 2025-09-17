




export const metadata = {
  title: "Kitchen Tools for Every Indian Home",
  description:
    " The top kitchen tools every Indian household should have in 2025 — from knives and chopping boards to measuring spoons, spatulas, and more.",
    keywords: ["best kitchen tools in India","must-have kitchen gadgets India","knives graters spatulas chopping board","kitchen accessories for Indian cooking",
"buy cooking tools online India",
],
  openGraph: {
    title: "Kitchen Tools for Every Indian Home",
    description: "Buying guides and reviews for Kitchen Tools.",
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
