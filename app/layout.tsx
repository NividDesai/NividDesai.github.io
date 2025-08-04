import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://nividdesai.github.io'),
  title: "Nivid Desai | AI Engineer",
  description:
    "Professional portfolio of Nivid Desai, AI Engineer specializing in machine learning, NLP, and data visualization.",
  keywords:
    "AI Engineer, Machine Learning, NLP, Data Visualization, Python, TensorFlow, PyTorch, Nivid Desai, Portfolio",
  authors: [{ name: "Nivid Desai" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nividdesai.github.io",
    title: "Nivid Desai | AI Engineer",
    description:
      "Professional portfolio of Nivid Desai, AI Engineer specializing in machine learning, NLP, and data visualization.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Nivid Desai",
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
