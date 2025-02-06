'use client'

import { useState } from 'react'

export default function AddProducts() {
  const [qty, setQty] = useState<number>(0)

  // TEMPORARY
  const stock = 4

  const handleQty = (type: 'i' | 'd') => {
    if (type === 'd' && qty > 1) {
      setQty((prev) => prev - 1)
    } else if(type === 'i' && qty < stock) {
      setQty((prev) => prev + 1)
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <h4 className='font-medium'>Choose a Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='flex justify-between items-center gap-8 bg-gray-200 px-3 py-2 rounded-2xl'>
            <button className='cursor-pointer text-xl' onClick={() => handleQty('d')}>-</button>
            <div>{qty}</div>
            <button className='cursor-pointer text-xl' onClick={() => handleQty('i')}>+</button>
          </div>
          <p className='text-xs'>Only <span className='text-orange-400'>{stock} items</span> left!<br /> {"Don't"} miss it</p>
        </div>
        <button className='py-2 px-10 cursor-pointer ring-rosa-chicle ring-2 rounded-3xl text-rosa-chicle hover:text-white hover:bg-rosa-chicle disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
