import Filters from '@/components/Filters'
import ProductList from '@/components/ProductList'
import Image from 'next/image'

export default function ListPage() {
  return (
    <div className='p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>
      {/* UP */}
      <div className='hidden bg-pink-100 md:flex justify-between h-64'>
        <div className='w-2/3 md:py-2 pl-40 flex flex-col justify-center gap-6'>
          <h2 className='md:text-3xl lg:text-5xl font-bold'>
            Grab up to 50% off on
            <br /> Selected Products
          </h2>
          <button className='px-6 py-4 bg-rosa-chicle w-max rounded-full text-white font-bold hover:scale-110 transition-transform ease-in-out duration-300'>
            Buy Now
          </button>
        </div>
        <div className='relative w-1/3'>
          <Image
            src='/woman.png'
            fill
            alt={`Pictures's woman`}
            className='object-contain'
          />
        </div>
      </div>

      {/* CENTER */}
      <Filters />
    
      {/* BOTTOM */}

      <h2 className='mt-12'>Shoes For You!</h2>
      <ProductList />
    </div>
  )
}
