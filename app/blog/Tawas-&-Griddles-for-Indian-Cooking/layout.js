




export const metadata = {
  title: "Best Tawas & Griddles for Indian Cooking crispy dosas, soft chapatis, or golden-brown parathas, a quality tawa or griddle is essential in your kitchen.",
  description:
    " Tawas come in various materials, sizes, and finishes—each serving different cooking needs.",
    keywords: ["best tawa in India","non-stick dosa tawa","cast iron tawa for roti","tawa vs griddle",
"hard anodized tawa",
"induction tawa",
"tawa maintenance tips"],
  openGraph: {
    title: "Best Tawas & Griddles for Indian Cooking",
    description: "Buying guides and reviews for .",
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
