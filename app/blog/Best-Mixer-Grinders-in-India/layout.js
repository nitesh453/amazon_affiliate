




export const metadata = {
  title: "Best Mixer Grinders in India",
  description:
    " A mixer grinder is a must-have kitchen appliance in every Indian household. From grinding spices and blending smoothies to making chutneys and batter, it simplifies daily cooking tasks like a pro.",
    keywords: ["best mixer grinders in India","750w mixer grinder","juicer mixer grinder","mixer grinder for chutney",
"heavy-duty mixer grinder",
"affordable mixer grinder",
"mixer grinder with warranty"],
  openGraph: {
    title: "Best Mixer Grinders in India",
    description: "Buying guides and reviews for Mixer Grinders.",
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
