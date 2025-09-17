




export const metadata = {
  title: "the Best Cookware & Pots for Your Indian Kitchen",
  description:
    " the best cookware and pots ensure your food is evenly cooked, retains nutrients, and lasts for years.",
    keywords: ["Non-Stick Cookware","Stainless Steel Cookware","Tawa for rotis/parathas, iron kadhai for deep-frying","Frying Pan",
"Cookware Set (5–6 pcs)",
"non-stick dosa tawa",
"traditional iron kadha"],
  openGraph: {
    title: "the Best Cookware & Pots for Your Indian Kitchen",
    description: "Buying guides and reviews forCookware & Pots  .",
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
