'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import CartModal from './CartModal'

export default function NavIcons() {
  const router = useRouter()

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // TEMPORARY
  const isLoggedin = true
  const handleProfile = () => {
    if (!isLoggedin) {
      router.push('/')
      return
    }
    setIsProfileOpen((prev) => !prev)
  }

  return (
    <div className='flex items-center justify-center gap-4 lg:gap-6 relative'> 
      <Image
        className='cursor-pointer'
        src='/profile.png'
        alt='Profile Navbar Icon'
        width={22}
        height={22}
        onClick={handleProfile}
      />

      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-10 left-0 shadow-[0px_10px_10px_rgb(0,0,0,0.2)] z-20'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}

      <Image
        className='cursor-pointer'
        src='/notification.png'
        alt='Notification Navbar Icon'
        width={22}
        height={22}
      />

      <div className='relative cursor-pointer'>
        <Image
          src='/cart.png'
          alt='Cart Navbar Icon'
          width={22}
          height={22}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className='absolute -top-4 left-4 rounded-full bg-rosa-chicle p-2 text-white w-6 h-6 flex items-center justify-center'>2</div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  )
}
