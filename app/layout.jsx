import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://angelincare.in"),

  title: {
    default: "Angelin Care | Home Nursing & Staffing Services in Kerala",
    template: "%s | Angelin Care",
  },

  description:
    "Angelin Care offers verified home nursing, baby care, hospital bystander, and domestic staffing services across Kerala with structured management and trusted support.",

  keywords: [
    "Home nursing Kerala",
    "Baby care services Kerala",
    "Hospital bystander Kerala",
    "Home maid services Kerala",
    "Domestic staffing Kerala",
    "ANM nurse Kerala",
    "GNM nurse Kerala",
  ],

  openGraph: {
    title: "Angelin Care | Home Nursing & Staffing Services in Kerala",
    description:
      "Verified home nursing, baby care, hospital bystander, and domestic staffing services across Kerala.",
    url: "https://angelincare.in",
    siteName: "Angelin Care",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angelin Care Home Nursing Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Angelin Care | Home Nursing & Staffing Services in Kerala",
    description:
      "Professional home nursing and staffing services across Kerala.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Angelin Care",
              url: "https://angelincare.in",
              telephone: "+91 70121 46398",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Kerala",
              },
              description:
                "Home nursing, baby care, hospital bystander and domestic staffing services across Kerala.",
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
