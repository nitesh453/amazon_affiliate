




export const metadata = {
  title: "Best Non-Stick Cookware in India",
  description:
    " Whether you're making fluffy dosas, sautéing vegetables, or preparing a quick omelette, non-stick cookware is a go-to favorite for modern Indian homes. It promises healthier cooking, easier cleaning, and faster meal prep.",
    keywords: ["non-stick cookware","best non-stick cookware in India","buy non-stick cookware online","non-stick cookware for induction",
"non-stick tawa and fry pan",
"affordable non-stick cookware",
"non-stick cookware care tips"],
  openGraph: {
    title: "Best Non-Stick Cookware in India",
    description: "Buying guides and reviews for Non-Stick Cookware.",
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
