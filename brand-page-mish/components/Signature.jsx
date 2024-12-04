'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Signature() {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`z-[999] ${!isVisible ? "hidden" : ""} fixed bottom-2 left-2`}>
      <div className="p-4 border border-zinc-200 rounded-md backdrop-blur-[2px]">
        <div className="flex items-center justify-between gap-2 mb-4">
          <p className="w-max border-b border-zinc-200">
            Coded by {""}
            <Link href="https://github.com/ahmeetmish" target="_blank" className="font-semibold hover:underline">
              @ahmeetmish
            </Link>
          </p>
          <div onClick={handleClick} className="cursor-pointer opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
        <p className="max-w-[30ch] md:max-w-[45ch] text-sm">
          This project was designed by myself.
        </p>
      </div>
    </div>
  )
}
