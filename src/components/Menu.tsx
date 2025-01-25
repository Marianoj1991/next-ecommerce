'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  {
    id: 1,
    label: 'Homepage',
    href: ''
  },
  {
    id: 2,
    label: 'Shop',
    href: ''
  },
  {
    id: 3,
    label: 'Deals',
    href: ''
  },
  {
    id: 4,
    label: 'About',
    href: ''
  },
  {
    id: 5,
    label: 'Contact',
    href: ''
  },
  {
    id: 6,
    label: 'Logout',
    href: ''
  },
  {
    id: 7,
    label: 'Cart',
    href: ''
  }
]

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Image src='/menu.png' alt="menu-icon" width={28} height={28} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}  />
      {
        isOpen && <div className="absolute left-0 top-20 bg-black text-white w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-2xl z-10" >
          {
            navLinks.map(link => (
              <Link key={link.id} href={link.href} >{link.label}</Link>
            ))
          }
        </div>
      }
    </div>
  )
}