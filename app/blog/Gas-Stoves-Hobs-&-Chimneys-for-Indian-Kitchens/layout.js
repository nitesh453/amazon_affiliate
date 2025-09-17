




export const metadata = {
  title: "Gas Stoves, Hobs & Chimneys for Indian Kitchens (2025)",
  description:
    "A modern Indian kitchen is incomplete without efficient and stylish cooking appliances like gas stoves, auto-ignition cooktops, built-in hobs, and chimneys. ",
    keywords: ["2 burner vs 3 burner gas stove","best auto ignition stove India","built-in hob price in India","filterless chimney vs baffle filter chimney",
"kitchen cooktop buying guide India",
],
  openGraph: {
    title: "Gas Stoves, Hobs & Chimneys for Indian Kitchens",
    description: "Buying guides and reviews for Gas Stoves, Hobs & Chimneys.",
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
