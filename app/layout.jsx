
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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
  title: "Angelin Care | Home Nursing & Staffing Services in Kerala",
  description:
    "Angelin Care offers verified home nursing, baby care, hospital bystander, and domestic staffing services across Kerala with structured management and trusted support.",
  keywords: [
    "Home nursing Kerala",
    "Baby care services Kerala",
    "Hospital bystander Kerala",
    "Home maid services Kerala",
    "Domestic staffing Kerala",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
