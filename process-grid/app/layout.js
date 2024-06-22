import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Grid Layout Component",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container mx-auto px-10 flex items-center justify-center h-screen ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
