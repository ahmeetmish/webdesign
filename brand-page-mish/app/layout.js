import "./globals.css"
import localFont from "next/font/local"
import AnimatedCursor from "react-animated-cursor"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Mish Brand Page",
}

const ppneuemontreal = localFont({ src: '../font/ppneuemontreal-book.woff', weight: '400', style: 'normal' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden mx-6 ${ppneuemontreal.className}`}>
        <AnimatedCursor 
          innerSize={11}
          innerScale={1.3}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#222',
            mixBlendMode: 'exclusion'
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
