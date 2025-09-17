




export const metadata = {
  title: "Best Roti Makers in India",
  description:
    "That’s where a roti maker comes in handy. With the press of a button, you can prepare soft, round rotis in minutes—without needing a rolling pin or tawa! ",
    keywords: ["Best roti maker in India","Electric chapati maker","How to use a roti maker","Bajaj roti maker review",
"Chapati maker price in India",
"Non-stick roti maker",
"Automatic roti maker machine"],
  openGraph: {
    title: "Best Roti Makers in India",
    description: "Buying guides and reviews for Roti Maker.",
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
