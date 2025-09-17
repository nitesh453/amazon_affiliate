




export const metadata = {
  title: "Best Water Purifiers in India",
  description:
    " Water purifier at home has become essential, especially in Indian households where municipal and borewell water often carry harmful contaminants.",
    keywords: ["Best water purifier in India ","RO water purifier for home","Water purifier for borewell water","UV UF water purifier",
"TDS in water",
"Copper RO purifier India",
],
  openGraph: {
    title: "Best Water Purifiers in India",
    description: "Buying guides and reviews for Water Purifiers.",
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
