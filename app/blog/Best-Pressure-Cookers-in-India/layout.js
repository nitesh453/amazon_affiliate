




export const metadata = {
  title: "Best Pressure Cookers in India",
  description:
    " A pressure cooker is a must-have kitchen appliance in every Indian home. From quick dals to flavorful biryanis, it cuts cooking time, saves energy, and enhances taste.",
    keywords: ["best pressure cooker in India","pressure cooker buying guide","aluminum vs stainless steel cooker","top pressure cooker brands",
"pressure cooker safety tips",
"pressure cooker for induction stove",
"electric pressure cooker in India"],
  openGraph: {
    title: "Best Pressure Cookers in India",
    description: "Buying guides and reviews for Pressure Cookers.",
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
