import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/wrapper/navigation"
import Footer from "@/components/wrapper/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Emergence Porch - Empowering Young Nigerian Leaders",
  description:
    "Empowering young Nigerians with leadership skills, career clarity, entrepreneurial capacity, and social responsibility through mentorship and community.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
