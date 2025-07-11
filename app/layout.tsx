import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEYNOVA - Laboratory Equipment & Chemical Supplies Zimbabwe",
  description:
      "Leading supplier of laboratory equipment, safety gear, chemical solutions, and cosmetic products across Zimbabwe.",
  keywords:
      "laboratory equipment Zimbabwe, safety equipment, chemicals, Teynova, Polychems, cosmetics products, Skin care, Hair care",
  generator: "Proud.dev",
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/favicon_io/site.webmanifest",
    },
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
  )
}
