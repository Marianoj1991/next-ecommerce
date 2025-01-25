import Image from 'next/image'
import Link from 'next/link'

export default function ProductList() {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium' >Product Name</span>
          <span className='font-semibold'>$45</span>
        </div>
        <div className='text-sm text-gray-500'>My Description</div>
        <button className='w-max px-4 py-3 rounded-2xl ring-1 ring-rosa-chicle hover:bg-rosa-chicle hover:text-white transition-all ease-linear duration-300'>Add to Cart</button>
      </Link>
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium' >Product Name</span>
          <span className='font-semibold'>$45</span>
        </div>
        <div className='text-sm text-gray-500'>My Description</div>
        <button className='w-max px-4 py-3 rounded-2xl ring-1 ring-rosa-chicle hover:bg-rosa-chicle hover:text-white transition-all ease-linear duration-300'>Add to Cart</button>
      </Link>
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium' >Product Name</span>
          <span className='font-semibold'>$45</span>
        </div>
        <div className='text-sm text-gray-500'>My Description</div>
        <button className='w-max px-4 py-3 rounded-2xl ring-1 ring-rosa-chicle hover:bg-rosa-chicle hover:text-white transition-all ease-linear duration-300'>Add to Cart</button>
      </Link>
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Image Product'
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium' >Product Name</span>
          <span className='font-semibold'>$45</span>
        </div>
        <div className='text-sm text-gray-500'>My Description</div>
        <button className='w-max px-4 py-3 rounded-2xl ring-1 ring-rosa-chicle hover:bg-rosa-chicle hover:text-white transition-all ease-linear duration-300'>Add to Cart</button>
      </Link>
    </div>
  )
}
