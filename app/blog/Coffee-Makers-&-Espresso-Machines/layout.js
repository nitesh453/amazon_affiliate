




export const metadata = {
  title: "Best Coffee Makers & Espresso Machines",
  description:
    "starts the day with a fresh cup of joy, investing in a coffee maker or espresso machine is a game-changer,basic drip coffee, a strong espresso shot, or creamy cappuccino, there’s a perfect machine for every coffee enthusiast in India. ",
    keywords: ["Best coffee makers in India","Espresso machine for home","Nespresso India","Coffee machine with milk frother",
"South Indian coffee maker",
"Drip coffee maker price",
"How to use espresso machine at home"],
  openGraph: {
    title: "Best Coffee Makers & Espresso Machines",
    description: "Buying guides and reviews for Coffee Makers & Espresso Machines.",
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
