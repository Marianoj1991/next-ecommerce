'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Image src='/menu.png' alt="menu-icon" width={28} height={28} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}  />
      {
        isOpen && <div className="absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-2xl z-10" >
          <Link href=''>HomePage</Link>
          <Link href=''>Shop</Link>
          <Link href=''>Deals</Link>
          <Link href=''>About</Link>
          <Link href=''>Contact</Link>
          <Link href=''>Logout</Link>
          <Link href=''>Cart(1)</Link>
        </div>
      }
    </div>
  )
}