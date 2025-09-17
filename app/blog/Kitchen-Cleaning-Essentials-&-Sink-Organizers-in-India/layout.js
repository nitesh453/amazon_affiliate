




export const metadata = {
  title: "Best Kitchen Cleaning Essentials & Sink Organizers in India",
  description:
    "the right cleaning tools and sink organizers can make a huge difference,most essential and best-selling kitchen items like dish racks, scrubbers, gloves, sink organizers, garbage bins, and drain filters, all available online in India. ",
    keywords: ["best kitchen dish rack India","sink organizer tray for sponge and soap","dishwashing gloves online","garbage bin with pedal India",
"kitchen scrubber brush set",
"sink drain filter stainless steel",
],
  openGraph: {
    title: "Best Kitchen Cleaning Essentials & Sink Organizers in India",
    description: "Buying guides and reviews for Kitchen Cleaning Essentials & Sink Organizers.",
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
