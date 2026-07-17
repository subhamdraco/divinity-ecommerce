import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Closest free match to GNC's Proxima Nova Extra Condensed headers */
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Divinity Impex | Global Brands Business Hub",
    template: "%s | Divinity Impex",
  },
  description:
    "Divinity Impex — global manufacturing partner for personal care, healthcare, and FMCG. Explore Titan Core, Reshu, NOVA Inner Compass, and Rizwan Adatia.",
  openGraph: {
    title: "Divinity Impex | Global Brands Business Hub",
    description:
      "Global manufacturing partner crafting premium FMCG, personal care, and performance products worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-sans">
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
