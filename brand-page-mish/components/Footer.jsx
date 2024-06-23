'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const [currentTime, currentSetTime] = useState(getCurrentTime())

  useEffect(() => {
    const interval = setInterval(() => {
      currentSetTime(getCurrentTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function getCurrentTime() {
    const date = new Date()
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }

  return (
    <footer className="fullscreencontainer space-y-10 !mt-20 p-6 bg-zinc-900 text-white">
      <div>
        <h2 className="text-[5rem] font-black leading-[120%] opacity-80">Designing the Future? <br /> Let's Talk!</h2>
      </div>
      <div className="gap-10 flex items-end justify-between">
        <form action="" className="max-w-[320px]">
          <div>
            <label htmlFor='email' className='text-xl font-semibold'>
              Join us and Stay Up to Date!
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='mt-1 w-full py-2 border-b text-lg font-medium bg-transparent border-zinc-400 outline-none placeholder:text-zinc-400 focus:placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none transition-all'
              placeholder='Email Address'
            />
          </div>
        </form>
        <div>
          <Link href="/" className="text-xl font-semibold tracking-wide hover:!text-zinc-700 group-hover:text-zinc-900 transition-all">
            Privacy Policy
          </Link>
        </div>
        <div className="gap-6 flex items-center text-xl font-semibold">
          <span className="px-2">©{currentYear}</span>
          <span className="px-2">{currentTime}</span>
        </div>
      </div>
    </footer>
  )
}
