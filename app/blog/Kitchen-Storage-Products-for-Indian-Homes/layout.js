




export const metadata = {
  title: "Best Kitchen Storage Products for Indian Homes",
  description:
    " you're storing rice, spices, tiffin items, or leftovers, this guide covers the must-have kitchen storage containers and organizers for every modern home.",
    keywords: ["best kitchen storage products India","food storage containers for rice and dal","fridge organizer box","airtight containers online",
"tiffin box for office",
"spice jar set India",
"kitchen storage rack for vegetables","oil dispenser bottle India"],
  openGraph: {
    title: "Best Kitchen Storage Products for Indian Homes",
    description: "Buying guides and reviews forKitchen Storage Products .",
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
