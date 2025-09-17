




export const metadata = {
  title: "Tableware & Serveware Essentials for a Stylish Indian Dining Experience",
  description:
    " The best tableware & serveware items every Indian household should consider in 2025 — from dinner sets to stylish cups, flasks, and cutlery.",
    keywords: ["best tableware set India","stylish dinnerware online","buy serving bowls and trays","ceramic cups and mugs for tea",
"stainless steel cutlery set India",
"tea coffee sets for gifting",
"insulated water bottles India"],
  openGraph: {
    title: "Tableware & Serveware Essentials for a Stylish Indian",
    description: "Buying guides and reviews for Tableware & Serveware.",
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
