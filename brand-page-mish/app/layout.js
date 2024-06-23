import "./globals.css"
import localFont from "next/font/local"

export const metadata = {
  title: "Mish Brand Page",
}

const ppneuemontreal = localFont({ src: '../font/ppneuemontreal-book.woff', weight: '400', style: 'normal' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`mx-6 ${ppneuemontreal.className}`}>
        {children}
      </body>
    </html>
  )
}
