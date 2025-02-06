import Image from 'next/image'
import Link from 'next/link'

const year = new Date()

export default function Footer() {
  return (
    <div className='py-12 mt-24 text-sm bg-gray-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>
      {/* TOP */}
      <div className='flex flex-col justify-between gap-16 md:flex-row'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className='text-2xl tracking-wide'>E-COMM</div>
          </Link>
          <p>
            1064 Los Membrillos St, Vistalba, Luján de Cuyo, Mendoza, Argentina
          </p>
          <span className='font-semibold'>cuchillosorix@gmail.com</span>
          <span className='font-semibold'>+54 261 4556677</span>
          <div className='flex gap-6'>
            <Image
              src='/facebook.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/instagram.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/youtube.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/pinterest.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/x.png'
              alt=''
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* CENTER */}
        <div className='hidden lg:flex lg:w-1/2 justify-between'>
          <section className='flex flex-col justify-between'>
            <h2 className='text-lg font-semibold'>COMPANY</h2>
            <div className='flex flex-col gap-4'>
              <span>About Us</span>
              <span>Careers</span>
              <span>Affiliates</span>
              <span>Blog</span>
              <span>Contact Us</span>
            </div>
          </section>
          <section className='flex flex-col justify-between'>
            <h2 className='text-lg font-semibold'>SHOP</h2>
            <div className='flex flex-col gap-4'>
              <span>New Arrivals</span>
              <span>Accesories</span>
              <span>Men</span>
              <span>Women</span>
              <span>All Products</span>
            </div>
          </section>
          <section className='flex flex-col justify-between'>
            <h2 className='text-lg font-semibold'>HELP</h2>
            <div className='flex flex-col gap-4'>
              <span>Customer Service</span>
              <span>My Account</span>
              <span>Find a Store</span>
              <span>Legal & Privacy</span>
              <span>Gift Card</span>
            </div>
          </section>
        </div>

        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h2 className='font-medium text-lg'>SUBSCRIBE</h2>

          <p>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Email address'
              className='w-3/4 p-4'
            />
            <button className='w-1/4 bg-rosa-chicle text-white p-4'>
              JOIN
            </button>
          </div>
          <span>Secure payments</span>
          <div className='flex justify-between'>
            <Image
              src='/discover.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/skrill.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/paypal.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/mastercard.png'
              alt=''
              width={40}
              height={20}
            />
            <Image
              src='/visa.png'
              alt=''
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='mt-20 flex flex-col items-center md:flex-row md:justify-between gap-8'>
        <div>© {new Date().getFullYear()} E-COMM</div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='flex gap-4'>
            <span className='text-gray-400'>Language</span>
            <span className='font-semibold'>United States | English</span>
          </div>
          <div className='flex gap-4'>
            <span className='text-gray-400'>Currency</span>
            <span className='font-semibold'>$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}
