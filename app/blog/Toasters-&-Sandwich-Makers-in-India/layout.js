




export const metadata = {
  title: "Best Toasters & Sandwich Makers in India",
  description:
    " If you're looking to upgrade your kitchen with the best toaster or sandwich maker in India,Whether it's a buttered toast, cheese sandwich, or aloo toastie — these small appliances help you whip up quick, healthy, and tasty breakfasts in minutes.",
    keywords: ["Best toaster in India 2025","Sandwich maker for home use","Non-stick sandwich toaster","Pop-up toaster price",
"Breakfast appliances for Indian kitchen",
"Toaster vs sandwich maker",
],
  openGraph: {
    title: "Best Toasters & Sandwich Makers in India",
    description: "Buying guides and reviews for Toasters & Sandwich Makers.",
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
