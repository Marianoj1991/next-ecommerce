import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

export default function Navbar() {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>

      {/* MOBILE */}
      <div className='h-full flex items-center justify-between md:hidden'>
        <Link
          href='/'
          className='text-2xl tracking-wide'
        >
          E-COMM
        </Link>
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className='hidden md:flex h-full justify-center items-center gap-8'>
        {/* LEFT */}
        <div className='w-1/3 xl:w-1/2 flex items-center gap-8'>
          <Link
            href='/'
            className='flex items-center gap-4'
          >
            <Image
              src='/logo.png'
              alt='Logo.png'
              width={24}
              height={24}
            />
            <div className='text-lg tracking-wide'>ECOMM</div>
          </Link>
          <div className='hidden xl:flex gap-1'>
            <Link className=' hover:underline-offset-4 hover:text-white hover:underline hover:bg-gray-400 px-4 py-2 rounded' href=''>Homepage</Link>
            <Link className=' hover:underline-offset-4 hover:text-white hover:underline hover:bg-gray-400 px-4 py-2 rounded' href=''>Shop</Link>
            <Link className=' hover:underline-offset-4 hover:text-white hover:underline hover:bg-gray-400 px-4 py-2 rounded' href=''>Deals</Link>
            <Link className=' hover:underline-offset-4 hover:text-white hover:underline hover:bg-gray-400 px-4 py-2 rounded' href=''>About</Link>
            <Link className=' hover:underline-offset-4 hover:text-white hover:underline hover:bg-gray-400 px-4 py-2 rounded' href=''>Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
          <SearchBar />

          <NavIcons />
        </div>
      </div>
    </div>
  )
}
