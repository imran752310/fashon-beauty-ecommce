import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/global/navbar/Navbar";
import Footer from "@/Components/global/Footer";
import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "Glowing Beauty – Skincare, Wellness & Self-Care Tips",
  description:
    "Discover expert skincare routines, beauty tips, and self-care advice to glow inside and out with Glowing Beauty.",
  keywords: [
    "Glowing Beauty",
    "Skincare",
    "Beauty Tips",
    "Wellness",
    "Self-Care",
    "Glow",
    "Skin Routines",
  ],
  authors: [{ name: "Imran" }],
  creator: "Imran",
  openGraph: {
    title: "Glowing Beauty – Skincare, Wellness & Self-Care Tips",
    description:
      "Expert skincare and wellness tips to make you glow. Join Glowing Beauty for the latest in beauty care.",
    url: "https://your-domain.com", // Replace with your real domain
    siteName: "Glowing Beauty",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Glowing Beauty – Skincare Tips",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glowing Beauty – Skincare, Wellness & Self-Care Tips",
    description:
      "Glow with the best skincare and beauty advice at Glowing Beauty.",
    creator: "@yourTwitterHandle", // Optional
    images: ["https://your-domain.com/og-image.jpg"],
  },
  metadataBase: new URL("https://your-domain.com"),
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
      >   <CartProvider>
          <FavoriteProvider>
        <Navbar />
        <Toaster position="top-right" />
      {children}
      </FavoriteProvider>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
