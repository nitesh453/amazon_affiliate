




export const metadata = {
  title: "Best Juicers & Blenders in India",
  description:
    " With health-conscious living on the rise, juicers and blenders have become essential appliances in every modern Indian kitchen. Whether you're whipping up a green smoothie, a protein shake, or extracting fresh fruit juice for the family,",
    keywords: ["best juicers in India","best blenders for smoothies","cold press juicer India","blender for protein shakes",
"juicer vs blender",
"portable blender India",
"centrifugal juicer reviews"],
  openGraph: {
    title: "Best Juicers & Blenders in India",
    description: "Buying guides and reviews for Juicers & Blenders.",
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
