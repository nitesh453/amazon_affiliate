




export const metadata = {
  title: "Electric Kettles in India",
  description:
    " electric kettle is one of the most useful and time-saving appliances you can have in your kitchen. In just a few minutes, you can boil water for tea, coffee, instant noodles, or even sterilize baby bottles.",
    keywords: ["Best electric kettle in India","Electric kettle for tea and coffee","Prestige electric kettle review","Havells vs Bajaj kettle",
"Electric kettle buying guide",
"How to use electric kettle for Maggi",
"Cordless kettle for travel"],
  openGraph: {
    title: "Electric Kettles in India",
    description: "Buying guides and reviews for Electric Kettles.",
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
