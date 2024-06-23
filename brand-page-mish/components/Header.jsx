'use client'

import Link from "next/link"
import { useEffect, useState } from 'react'
import { Pyramid, MoveUpRight } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset

      if (scrollY > 90) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-0 w-auto flex justify-between items-center py-4 header-glass-background transition-all duration-200 ${scrolled && 'border-b-[1px] border-zinc-300'}`}>
      <div className="gap-6 w-full flex items-center justify-between">
        <div>
          <Link href="/" className="w-max gap-2 flex items-center justify-center py-2 group transition-all duration-300 hover:px-4 hover:bg-zinc-900 hover:rounded">
            <Pyramid className="size-6 group-hover:text-white" />
            <h2 className="text-[1.3rem] font-semibold tracking-wide group-hover:text-white">mish</h2>
          </Link>
        </div>
        <div className="gap-6 flex items-center justify-center group">
          <Link href="/" className="text-[1.3rem] font-semibold tracking-wide hover:!text-zinc-700 group-hover:text-zinc-900 transition-all">Design</Link>
          <Link href="/" className="text-[1.3rem] font-semibold tracking-wide hover:!text-zinc-700 group-hover:text-zinc-900 transition-all">News</Link>
        </div>
        <div>
          <Link href="/" className="w-max gap-2 flex items-center justify-center py-2 group transition-all duration-300 hover:px-4 hover:bg-zinc-900 hover:rounded">
            <span className="text-[1.3rem] font-semibold tracking-wide group-hover:text-white">Contact</span>
            <MoveUpRight className="size-6 group-hover:text-white" />
          </Link>
        </div>
      </div>
    </header>
  )
}
