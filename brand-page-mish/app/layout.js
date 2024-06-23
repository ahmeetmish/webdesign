import "./globals.css"
import localFont from "next/font/local"

import Header from "@/components/Header"

export const metadata = {
  title: "Mish Brand Page",
}

const ppneuemontreal = localFont({ src: '../font/ppneuemontreal-book.woff', weight: '400', style: 'normal' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`mx-6 ${ppneuemontreal.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
