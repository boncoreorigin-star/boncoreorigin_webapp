import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "Boncore Origin | Premium Pilates Essentials Kit & Guided Journal";
const description =
  "Boncore Origin Premium Pilates Essentials Kit and Guided Pilates Journal — studio-grade equipment and mindful tracking for your home practice. Available on Amazon.";
const ogImage = {
  url: "/images/og-image-1200x630.png",
  width: 1200,
  height: 630,
  alt: "Boncore Origin Premium Pilates Essentials Kit and Guided Pilates Journal",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  icons: { icon: "/images/favicon-bo.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Boncore Origin",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body className="min-h-full flex flex-col antialiased bg-cream text-earth">
        {children}
      </body>
    </html>
  );
}
