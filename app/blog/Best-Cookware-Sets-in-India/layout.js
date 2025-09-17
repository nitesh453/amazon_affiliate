




export const metadata = {
  title: "Best Cookware Sets in India",
  description:
    "A cookware set is the backbone of a functional kitchen—whether you're a home cook, a bachelor, or a new couple setting up your kitchen. The right cookware set saves you time, energy, and ensures your food is cooked evenly and safely. ",
    keywords: ["best cookware sets in India","non-stick cookware set","stainless steel cookware","cookware buying guide",
"induction compatible cookware",
"affordable cookware sets",
"cookware for Indian cooking"],
  openGraph: {
    title: "Best Cookware Sets in India",
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
